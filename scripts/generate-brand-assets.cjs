const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SRC = "C:/Users/hajur/Downloads/Zeyks logo.png";
const BRAND_DIR = path.join("public", "brand");
const APP_DIR = "src/app";

// Convert black-on-white artwork to a transparent mark: darkness becomes opacity.
async function buildMark(rgb) {
  const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const out = Buffer.alloc(width * height * 4);
  let minX = width, minY = height, maxX = 0, maxY = 0;

  for (let i = 0; i < data.length; i += 4) {
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    let alpha = lum >= 250 ? 0 : Math.min(255, Math.round((255 - lum) * 1.18));
    const p = i;
    out[p] = rgb[0]; out[p + 1] = rgb[1]; out[p + 2] = rgb[2]; out[p + 3] = alpha;
    if (alpha > 8) {
      const x = (p / 4) % width;
      const y = Math.floor((p / 4) / width);
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }

  const pad = 6;
  const left = Math.max(0, minX - pad);
  const top = Math.max(0, minY - pad);
  const cropW = Math.min(width - left, maxX - minX + 1 + pad * 2);
  const cropH = Math.min(height - top, maxY - minY + 1 + pad * 2);

  const png = await sharp(out, { raw: { width, height, channels: 4 } }).png().toBuffer();
  return { buffer: png, box: { left, top, width: cropW, height: cropH } };
}

function tileSvg(size, radius, bg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="${bg}"/></svg>`;
}

(async () => {
  fs.mkdirSync(BRAND_DIR, { recursive: true });

  const dark = await buildMark([17, 17, 17]);
  const light = await buildMark([255, 255, 255]);

  const crop = o => ({ extract: { left: o.box.left, top: o.box.top, width: o.box.width, height: o.box.height } });
  await sharp(dark.buffer).extract(crop(dark).extract).png().toFile(path.join(BRAND_DIR, "logo-mark.png"));
  await sharp(light.buffer).extract(crop(light).extract).png().toFile(path.join(BRAND_DIR, "logo-mark-white.png"));
  console.log("marks written; glyph box", dark.box);

  // Favicon + apple icon: white mark centred on a dark rounded tile.
  for (const [file, size] of [["icon.png", 64], ["apple-icon.png", 180]]) {
    const inner = Math.round(size * 0.62);
    const scaled = await sharp(light.buffer).extract(crop(light).extract).resize({ height: inner, fit: "inside" }).png().toBuffer({ resolveWithObject: true });
    await sharp({ create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite([
        { input: Buffer.from(tileSvg(size, Math.round(size * 0.22), "#111111")), top: 0, left: 0 },
        { input: scaled.data, top: Math.round((size - scaled.info.height) / 2), left: Math.round((size - scaled.info.width) / 2) },
      ])
      .png().toFile(path.join(APP_DIR, file));
    console.log("wrote", file);
  }

  // Open Graph card: dark panel, blue ring motif, mark + wordmark.
  const W = 1200, H = 630;
  const markH = 210;
  const scaledMark = await sharp(light.buffer).extract(crop(light).extract).resize({ height: markH, fit: "inside" }).png().toBuffer({ resolveWithObject: true });
  const markW = scaledMark.info.width;
  const wordmark = await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="430" height="100">
    <text x="0" y="78" font-family="Inter, 'Helvetica Neue', Arial, sans-serif" font-size="76" font-weight="700" letter-spacing="-3" fill="#ffffff">J-E-Y-K-S</text>
  </svg>`)).png({ alpha: true }).toBuffer({ resolveWithObject: true });
  const ring = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="#111111"/>
    <circle cx="1080" cy="560" r="300" fill="none" stroke="#1677ff" stroke-opacity="0.30" stroke-width="90"/>
    <circle cx="150" cy="60" r="190" fill="none" stroke="#1677ff" stroke-opacity="0.10" stroke-width="60"/>
    <rect x="0" y="0" width="430" height="4" fill="#1677ff"/>
  </svg>`;
  const gap = 46;
  const groupW = markW + gap + wordmark.info.width;
  const startX = Math.round((W - groupW) / 2);
  const centerY = Math.round(H / 2);
  await sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([
      { input: Buffer.from(ring), top: 0, left: 0 },
      { input: scaledMark.data, top: centerY - Math.round(scaledMark.info.height / 2), left: startX },
      { input: wordmark.data, top: centerY - Math.round(wordmark.info.height / 2), left: startX + markW + gap },
    ])
    .png().toFile(path.join(APP_DIR, "opengraph-image.png"));
  console.log("wrote opengraph-image.png");
})().catch(e => { console.error("FAILED:", e.message); process.exit(1); });

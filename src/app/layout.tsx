import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://jeyks.com"),
  title: { default: "J-E-Y-K-S — Technology with purpose", template: "%s | J-E-Y-K-S" },
  description: "A digital technology and creative company building websites, software, products, automation, brands and media.",
  openGraph: {
    type: "website",
    siteName: "J-E-Y-K-S",
    title: "J-E-Y-K-S — Technology with purpose",
    description: "A digital technology and creative company building websites, software, products, automation, brands and media.",
  },
  twitter: { card: "summary_large_image", title: "J-E-Y-K-S — Technology with purpose", description: "A digital technology and creative company building websites, software, products, automation, brands and media." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={inter.variable}><body><Navbar /><main>{children}</main><Footer /></body></html>;
}

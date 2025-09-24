import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NebulaCoin Memecoin — Futuristic Community-Driven Token",
  description: "NebulaCoin is a futuristic memecoin built for the community. Simple buy steps, transparent tokenomics, and a roadmap that points to the stars.",
  keywords: ["memecoin", "futuristic", "cryptocurrency", "buy memecoin", "tokenomics", "roadmap", "community", "landing page", "crypto website"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "NebulaCoin Memecoin — Futuristic Community-Driven Token",
    description: "NebulaCoin is a futuristic memecoin built for the community. Simple buy steps, transparent tokenomics, and a roadmap that points to the stars.",
    type: "website",
    url: "/",
    siteName: "NebulaCoin",
    images: [{
      url: "/images/logo.svg",
      width: 1200,
      height: 630,
      alt: "NebulaCoin Memecoin"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "NebulaCoin Memecoin — Futuristic Community-Driven Token",
    description: "NebulaCoin is a futuristic memecoin built for the community. Simple buy steps, transparent tokenomics, and a roadmap that points to the stars.",
    images: ["/images/logo.svg"]
  },
  robots: { index: true, follow: true },
  icons: [{ icon: "/favicon.ico" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
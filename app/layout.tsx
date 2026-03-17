import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const fontDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Poorav Kadiyan — Intelligence Architect",
    template: "%s — Poorav Kadiyan",
  },
  description:
    "Poorav Kadiyan builds intelligence systems—data → models → deployed workflows—at the intersection of AI engineering, business strategy, and India market intelligence.",
  metadataBase: new URL("https://pooravkadiyan.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} antialiased`}
      >
        <SiteHeader />
        <div className="pt-16">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}

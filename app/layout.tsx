import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const description =
  "Holistic chiropractor in Atlanta. Your body is so smart. It has been holding what it couldn't meet yet. Together, we help it unwind, gently and specifically.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lindsaybrier.com"),
  title: {
    default: "Dr. Lindsay Brier, DC | Holistic Chiropractor in Atlanta",
    template: "%s | Dr. Lindsay Brier, DC",
  },
  description,
  openGraph: {
    title: "Dr. Lindsay Brier, DC | Holistic Chiropractor in Atlanta",
    description,
    type: "website",
    locale: "en_US",
    siteName: "Dr. Lindsay Brier",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4ebe3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}

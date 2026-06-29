import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jørgen Berg | Vekstmarkedsfører, builder og operativ problemløser",
  description:
    "Personlig CV- og porteføljeside for Jørgen Berg med erfaring innen markedsføring, innhold, nettsider, AI-verktøy og kommersiell gjennomføring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${instrumentSans.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <GoogleTagManager gtmId="GTM-KL8SB43V
" />

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
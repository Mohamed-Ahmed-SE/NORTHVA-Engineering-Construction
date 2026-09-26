import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#101312",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "NORTHVA Engineering & Construction | Engineering What Comes Next",
    template: "%s | NORTHVA Engineering & Construction",
  },
  description:
    "NORTHVA is an integrated engineering and construction company delivering complex projects across commercial development, infrastructure, industrial facilities, hospitality, healthcare, and residential construction in Egypt, Saudi Arabia, and the UAE.",
  keywords: [
    "NORTHVA",
    "Engineering and Construction",
    "General Contracting Egypt",
    "Saudi Arabia Construction",
    "UAE Infrastructure",
    "BIM 4D",
    "Commercial Development",
    "MEP Engineering",
    "Civil Infrastructure",
  ],
  authors: [{ name: "NORTHVA Engineering & Construction" }],
  creator: "NORTHVA",
  publisher: "NORTHVA",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://northva-eng.com",
    title: "NORTHVA Engineering & Construction | Engineering What Comes Next",
    description:
      "Integrated engineering and construction company delivering complex projects across Egypt and the Gulf.",
    siteName: "NORTHVA Engineering & Construction",
  },
  twitter: {
    card: "summary_large_image",
    title: "NORTHVA Engineering & Construction",
    description: "Engineering What Comes Next.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#101312] text-[#F4F2EC] selection:bg-[#E6532F] selection:text-white font-sans antialiased min-h-screen flex flex-col">
        <SmoothScroll>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

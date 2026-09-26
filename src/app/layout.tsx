import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import PageLoader from "@/components/ui/PageLoader";
import BackToTop from "@/components/ui/BackToTop";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#101312",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://northva-eng.com"),
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#101312] text-[#F4F2EC] selection:bg-[#E6532F] selection:text-white font-sans antialiased min-h-screen flex flex-col">
        <PageLoader />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999999] focus:px-4 focus:py-2 focus:bg-[#E6532F] focus:text-white focus:font-mono focus:text-xs uppercase tracking-wider"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}


import { Public_Sans, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

// Variable fonts, self-hosted by Next.js at build time. `swap` keeps text visible while loading.
const body = Public_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const heading = Source_Serif_4({ subsets: ["latin"], variable: "--font-heading", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}: BRP to eVisa checklist tool`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE.name,
    title: `${SITE.name}: BRP to eVisa checklist tool`,
    description: SITE.description,
  },
  // Lets AdSense verify site ownership from the HTML source.
  ...(SITE.adsenseClient && { other: { "google-adsense-account": SITE.adsenseClient } }),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10284b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${body.variable} ${heading.variable}`}>
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />

        {/* AdSense loads after the page is interactive so it never blocks LCP. */}
        {SITE.adsenseClient && (
          <Script
            id="adsense-loader"
            async
            strategy="lazyOnload"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsenseClient}`}
          />
        )}
      </body>
    </html>
  );
}

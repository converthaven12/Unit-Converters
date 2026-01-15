// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import AnalyticsPageviewTracker from "./utils/components/AnalyticsPageviewTracker/AnalyticsPageviewTracker";
import Footer from "./utils/components/Footer/Footer";

// Optional SEO head
import SeoHead from "./components/SeoHead";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converthaven — Every Unit Conversion",
  description: "Convert units quickly and accurately with our free converters.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Optional SEO Head */}
        <SeoHead />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="ohF9lUShchQvTlpRtH7L_s-Bgx9Omtv0c4I4p1ykiw8"
        />

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RGW207QLD8"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RGW207QLD8', {
              page_path: window.location.pathname
            });
          `}
        </Script>

        {/* Google AdSense (replace when ready) */}
        <Script
          id="adsense-loader"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AnalyticsPageviewTracker />
        {children}
        <Footer />
      </body>
    </html>
  );
}


// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AnalyticsPageviewTracker from "./utils/components/AnalyticsPageviewTracker/AnalyticsPageviewTracker";
import Footer from "./utils/components/Footer/Footer";
import DelayedFooter from "./utils/components/DelayedFooter/DelayedFooter";
import SeoHead from './components/SeoHead';
 // adjust path based on file location


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Default metadata (fallback)
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
        {/* Inject dynamic SEO tags */}
        <SeoHead />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZNMT4XLDX6"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}  
            gtag('js', new Date());
            gtag('config', 'G-ZNMT4XLDX6', { page_path: window.location.pathname });
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <Script id="adsense-init" strategy="lazyOnload">
  {`
    if (window.adsbygoogle && document.querySelectorAll('ins.adsbygoogle[data-ad-status="done"]').length === 0) {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  `}
</Script>
       
<meta name="google-site-verification" content="ohF9lUShchQvTlpRtH7L_s-Bgx9Omtv0c4I4p1ykiw8" />

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AnalyticsPageviewTracker />
        {children}
        <DelayedFooter />
      </body>
    </html>
  );
}

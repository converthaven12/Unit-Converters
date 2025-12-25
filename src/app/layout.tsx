// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import AnalyticsPageviewTracker from "./utils/components/AnalyticsPageviewTracker/AnalyticsPageviewTracker";
import Footer from "./utils/components/Footer/Footer";
import DelayedFooter from "./utils/components/DelayedFooter/DelayedFooter";

// Optional: works if SeoHead only renders static <meta>/<link> tags.
// Prefer route-level `metadata` or `generateMetadata` for dynamic SEO.
import SeoHead from "./components/SeoHead";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Default metadata (fallback for routes without their own metadata)
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
        {/* Optional custom head component (see note above) */}
        <SeoHead />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="ohF9lUShchQvTlpRtH7L_s-Bgx9Omtv0c4I4p1ykiw8"
        />

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZNMT4XLDX6"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZNMT4XLDX6', {
              page_path: window.location.pathname
            });
          `}
        </Script>

        {/* Google AdSense — replace ca-pub-XXXXXXXXXXXXXXX with your ID */}
        <Script
          id="adsense-loader"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script id="adsense-init" strategy="lazyOnload">
          {`
            (function(){
              try {
                window.adsbygoogle = window.adsbygoogle || [];
                // Only push if there isn't an ad already initialized
                var hasRendered = document.querySelector('ins.adsbygoogle[data-ad-status="done"]');
                if (!hasRendered) {
                  window.adsbygoogle.push({});
                }
              } catch (e) {
                // Fail silently to avoid blocking render
              }
            })();
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AnalyticsPageviewTracker />
        {children}
        {/* If you still want the regular footer visible immediately, keep this: */}
        <Footer />
      </body>
    </html>
  );
}

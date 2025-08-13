// src/app/(screens)/Converters/LengthUnits/MillimetersToCm/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ClientMillimetersToCm from "./ClientMillimetersToCm";

/** ====== SEO ====== */
const CANONICAL =
  "https://www.converthaven.com/Converters/LengthUnits/MillimetersToCm";

const SEO_TITLE =
  "Millimeters to Centimeters Converter (mm → cm) | ConvertHaven";
const SEO_DESC =
  "Instantly convert millimeters to centimeters (mm → cm) with accurate results. Includes formula, worked examples, a quick table, and FAQs.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESC,
  alternates: { canonical: CANONICAL },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
  openGraph: {
    type: "website",
    url: CANONICAL,
    siteName: "ConvertHaven",
    title: SEO_TITLE,
    description: SEO_DESC,
    images: [{ url: "https://www.converthaven.com/og-default.png" }],
  },
  twitter: {
    card: "summary",
    title: SEO_TITLE,
    description: SEO_DESC,
    images: ["https://www.converthaven.com/og-default.png"],
  },
};

/** ====== JSON-LD (Breadcrumbs + WebApp + FAQ) ====== */
function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Converters", item: "https://www.converthaven.com/Converters" },
          { "@type": "ListItem", position: 2, name: "Length Units", item: "https://www.converthaven.com/Converters/LengthUnits" },
          { "@type": "ListItem", position: 3, name: "Millimeters to Centimeters", item: CANONICAL }
        ]
      },
      {
        "@type": "WebApplication",
        name: "Millimeters to Centimeters Converter",
        url: CANONICAL,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        description:
          "Convert millimeters (mm) to centimeters (cm) instantly with accurate results, formula, examples, and a handy table.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@type": "Organization", name: "ConvertHaven", url: "https://www.converthaven.com" }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do you convert mm to cm?",
            acceptedAnswer: { "@type": "Answer", text: "Divide millimeters by 10. Formula: cm = mm ÷ 10." }
          },
          {
            "@type": "Question",
            name: "What is 25 mm in cm?",
            acceptedAnswer: { "@type": "Answer", text: "25 mm ÷ 10 = 2.5 cm." }
          },
          {
            "@type": "Question",
            name: "What is the relationship between mm and cm?",
            acceptedAnswer: { "@type": "Answer", text: "1 cm = 10 mm; 1 mm = 0.1 cm." }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      {/* Exactly ONE H1 on the page */}
      <h1 className="text-3xl font-semibold mb-4">
        Millimeters to Centimeters Converter (mm → cm)
      </h1>

      {/* Calculator */}
      <ClientMillimetersToCm />

      {/* Helpful copy to avoid thin-content flags */}
      <section className="prose prose-neutral max-w-none mt-8">
        <h2>How to Convert mm to cm</h2>
        <p>
          Millimeters and centimeters are both metric units. The conversion is simple:
          <strong> cm = mm ÷ 10</strong> and <strong>mm = cm × 10</strong>.
        </p>

        <h3>Quick Examples</h3>
        <ul>
          <li><strong>45 mm → cm:</strong> 45 ÷ 10 = <strong>4.5 cm</strong></li>
          <li><strong>120 mm → cm:</strong> 120 ÷ 10 = <strong>12 cm</strong></li>
          <li><strong>7.2 cm → mm:</strong> 7.2 × 10 = <strong>72 mm</strong></li>
        </ul>

        <h2>Related Converters</h2>
        <ul>
          <li><Link href="/Converters/LengthUnits/CentimetersToMm">Centimeters to Millimeters (cm → mm)</Link></li>
          <li><Link href="/Converters/LengthUnits/MmToInches">Millimeters to Inches (mm → in)</Link></li>
          <li><Link href="/Converters/LengthUnits/CmToInches">Centimeters to Inches (cm → in)</Link></li>
        </ul>
      </section>

      <JsonLd />
    </main>
  );
}

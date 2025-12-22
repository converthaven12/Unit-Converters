import type { Metadata } from "next";
import Link from "next/link";
import ClientElectricConductance from "./ClientElectricConductance";

const CANONICAL =
  "https://www.converthaven.com/Converters/ElectricityConverters/ElectricConductanceConverter";

const SEO_TITLE = "Electric Conductance Converter (S ⇄ mS ⇄ µS) | ConvertHaven";
const SEO_DESC =
  "Instantly convert electric conductance between siemens (S), millisiemens (mS), and microsiemens (µS). Includes G = 1/R formula, worked examples, and FAQs.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESC,
  alternates: { canonical: CANONICAL },
  robots: {
    index: true,
    follow: true,
    
    
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

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Converters", item: "https://www.converthaven.com/Converters" },
          { "@type": "ListItem", position: 2, name: "Electricity Converters", item: "https://www.converthaven.com/Converters/ElectricityConverters" },
          { "@type": "ListItem", position: 3, name: "Electric Conductance Converter", item: CANONICAL },
        ],
      },
      {
        "@type": "WebApplication",
        name: "Electric Conductance Converter",
        url: CANONICAL,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        description: "Convert electric conductance between siemens (S), millisiemens (mS), and microsiemens (µS) with instant results.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@type": "Organization", name: "ConvertHaven", url: "https://www.converthaven.com" },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", "name": "What is electric conductance?", "acceptedAnswer": { "@type": "Answer", "text": "Electric conductance (G) measures how easily current flows. The SI unit is the siemens (S). Conductance and resistance are reciprocals: G = 1/R." } },
          { "@type": "Question", "name": "How do I convert between conductance units?", "acceptedAnswer": { "@type": "Answer", "text": "1 S = 1000 mS = 1,000,000 µS. Multiply or divide by powers of 10 to move between S, mS, and µS." } },
          { "@type": "Question", "name": "How is conductance related to resistance?", "acceptedAnswer": { "@type": "Answer", "text": "They are reciprocals. Example: R = 50 Ω → G = 1/50 = 0.02 S (20 mS)." } }
        ]
      }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Electric Conductance Converter (Siemens, mS, µS)</h1>
      <ClientElectricConductance />
      <section className="prose prose-neutral max-w-none mt-8">
        <h2>How to Convert Conductance</h2>
        <p>
          Conductance (<strong>G</strong>) is the reciprocal of resistance (<strong>R</strong>): <strong>G = 1/R</strong>.
          Use siemens (<strong>S</strong>) as the base SI unit and switch to <strong>mS</strong> or <strong>µS</strong> for smaller values.
        </p>
        <h3>Quick Examples</h3>
        <ul>
          <li><strong>0.25 S → mS:</strong> 0.25 × 1000 = <strong>250 mS</strong></li>
          <li><strong>7500 µS → S:</strong> 7500 ÷ 1,000,000 = <strong>0.0075 S</strong></li>
          <li><strong>R = 40 Ω → G:</strong> 1 ÷ 40 = <strong>0.025 S</strong> (25 mS)</li>
        </ul>
        <h2>Related Converters</h2>
        <ul>
          <li><Link href="/Converters/ElectricityConverters/ElectricResistanceConverter">Electric Resistance Converter (Ω, kΩ)</Link></li>
          <li><Link href="/Converters/ElectricityConverters/ElectricConductivityConverter">Electrical Conductivity Converter (S/m)</Link></li>
          <li><Link href="/Converters/ElectricityConverters/ElectricCurrentConverter">Electric Current Converter (A, mA)</Link></li>
        </ul>
      </section>
      <JsonLd />
    </main>
  );
}

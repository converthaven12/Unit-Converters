import type { Metadata } from "next";
import ClientCmToInches from "./ClientCmToInches";
import ConversionTable from "./ConversionTable";

/* ---------------------------
   Page-level SEO (Server-rendered)
---------------------------- */
const SITE = "https://www.converthaven.com";
const CANONICAL = `${SITE}/Converters/CommonConversions/CmToInches`;
const OG_IMAGE = `${SITE}/images/og-default.jpg`;

export const metadata: Metadata = {
  title: "Cm to Inches Converter (cm → in) | Fast & Accurate",
  description:
    "Instantly convert centimeters to inches (cm to in). Accurate results with examples and a handy conversion table. Free and mobile-friendly.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    siteName: "ConvertHaven",
    title: "Cm to Inches Converter (cm → in) | Fast & Accurate",
    description:
      "Instantly convert centimeters to inches (cm to in). Accurate results with examples and a handy conversion table. Free and mobile-friendly.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Cm to Inches Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cm to Inches Converter (cm → in) | Fast & Accurate",
    description:
      "Instantly convert centimeters to inches (cm to in). Accurate results with examples and a handy conversion table. Free and mobile-friendly.",
    images: [OG_IMAGE],
  },
};

/* ---------------------------
   JSON-LD Schemas (server-rendered)
---------------------------- */
const WEBAPP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Cm to Inches Converter",
  url: CANONICAL,
  applicationCategory: "Converter",
  operatingSystem: "Web",
  description:
    "Instantly convert centimeters to inches (cm to in). Accurate results with examples and a handy conversion table. Free and mobile-friendly.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many inches are in 1 cm?",
      acceptedAnswer: { "@type": "Answer", text: "1 cm = 0.3937007874 inches." },
    },
    {
      "@type": "Question",
      name: "How do you convert cm to inches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply centimeters by 0.3937007874. Example: 30 cm × 0.3937007874 = 11.811 in.",
      },
    },
  ],
};

const BREADCRUMBS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Converters", item: `${SITE}/Converters` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Common Conversions",
      item: `${SITE}/Converters/CommonConversions`,
    },
    { "@type": "ListItem", position: 4, name: "Cm to Inches", item: CANONICAL },
  ],
};

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Short intro (keep the only H1 inside ClientCmToInches) */}
      <p className="mt-4">
        Convert centimeters to inches instantly. Formula: inches = centimeters ×
        0.3937007874. Example: 30 cm = 11.811 in. Works on mobile and desktop,
        completely free.
      </p>

      {/* Internal links for crawlability */}
      <nav aria-label="Related conversions" className="mt-4">
        <h2 className="text-lg font-semibold text-[#006633]">Related converters</h2>
        <ul className="list-disc ml-6">
          <li><a href="/Converters/LengthUnits/MetersToInches">Meters to Inches</a></li>
          <li><a href="/Converters/LengthUnits/CmToMeters">Cm to Meters</a></li>
          <li><a href="/Converters/CommonConversions/InchesToCm">Inches to Cm</a></li>
          <li><a href="/Converters/LengthUnits/CmToMillimeters">Cm to Millimeters</a></li>
        </ul>
      </nav>

      {/* JSON-LD (visible in “View source”) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBAPP_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS_SCHEMA) }} />

      {/* Client-side interactive converter (contains the single H1) */}
      <ClientCmToInches />

      {/* Content sections */}
      <h2 className="text-xl text-[#006633] font-semibold mt-10">Centimeter</h2>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A centimeter (symbol: cm) is a unit of
          length in the International System of Units (SI). It is defined as 1/100 meters.
        </p>
        <p>
          <strong>History/origin:</strong> The centimeter is based on the SI unit
          meter; the prefix “centi” means one hundredth. Learning a few common prefixes
          (kilo-, centi-, milli-) helps with quick mental conversions.
        </p>
        <p>
          <strong>Current use:</strong> The centimeter is widely used where a smaller
          unit than the meter is needed. Height is commonly measured in centimeters in
          most countries outside the U.S.
        </p>
      </section>

      <h2 className="text-xl text-[#006633] font-semibold mt-10">Inch</h2>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> An inch (symbol: in) is a unit of length in the
          imperial and U.S. customary systems. Since 1959, 1 inch = 25.4 millimeters.
        </p>
        <p>
          <strong>History/origin:</strong> Historically linked to the “uncia” and
          barleycorn measures; the modern inch is derived from the international yard.
        </p>
        <p>
          <strong>Current use:</strong> Common in the U.S., Canada, and the U.K., and
          often used worldwide for electronics (e.g., screen sizes).
        </p>
      </section>

      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        Centimeter to Inch Conversion Table
      </h2>
      <ConversionTable />

      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Centimeter to Inch
      </h2>
      <p>
        1 cm = 0.3937007874 in
        <br />1 in = 2.54 cm
      </p>
      <p>
        <strong>Example:</strong> convert 15 cm to in:
        <br />
        15 cm = 15 × 0.3937007874 in = 5.905511811 in
      </p>
    </div>
  );
}

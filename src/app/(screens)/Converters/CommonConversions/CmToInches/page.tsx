import ClientCmToInches from "./ClientCmToInches";
import ConversionTable from "./ConversionTable";

/* ---------------------------
   Page-level SEO (Server-rendered)
---------------------------- */
export const metadata = {
  title: "Cm to Inches Converter (cm → in) | Fast & Accurate",
  description:
    "Instantly convert centimeters to inches (cm to in). Accurate results with examples and a handy conversion table. Free and mobile-friendly.",
  alternates: {
    canonical:
      "https://www.converthaven.com/Converters/CommonConversions/CmToInches",
  },
  openGraph: {
    type: "website",
    url: "https://www.converthaven.com/Converters/CommonConversions/CmToInches",
    siteName: "ConvertHaven",
    title: "Cm to Inches Converter (cm → in) | Fast & Accurate",
    description:
      "Instantly convert centimeters to inches (cm to in). Accurate results with examples and a handy conversion table. Free and mobile-friendly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cm to Inches Converter (cm → in) | Fast & Accurate",
    description:
      "Instantly convert centimeters to inches (cm to in). Accurate results with examples and a handy conversion table. Free and mobile-friendly.",
  },
};

const CANONICAL =
  "https://www.converthaven.com/Converters/CommonConversions/CmToInches";

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
      acceptedAnswer: {
        "@type": "Answer",
        text: "1 cm = 0.3937007874 inches.",
      },
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.converthaven.com/" },
    { "@type": "ListItem", position: 2, name: "Converters", item: "https://www.converthaven.com/Converters" },
    { "@type": "ListItem", position: 3, name: "Common Conversions", item: "https://www.converthaven.com/Converters/CommonConversions" },
    { "@type": "ListItem", position: 4, name: "Cm to Inches", item: CANONICAL },
  ],
};

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Short intro (keep H1 in the client component only) */}
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

      {/* JSON-LD (server-rendered, visible in View Source) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBAPP_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS_SCHEMA) }}
      />

      {/* Client-side interactive converter */}
      <ClientCmToInches />

      {/* Content sections: change extra H1s to H2s to avoid “too many H1s” */}
      <h2 className="text-xl text-[#006633] font-semibold mt-10">Centimeter</h2>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A centimeter (symbol: cm) is a unit of
          length in the International System of Units (SI), the current form of
          the metric system. It is defined as 1/100 meters.
        </p>
        <p>
          <strong>History/origin:</strong> A centimeter is based on the SI unit
          meter, and as the prefix "centi" indicates, is equal to one hundredth
          of a meter. Metric prefixes range from factors of 10<sup>-18</sup> to
          10<sup>18</sup> based on a decimal system, with the base (in this case
          the meter) having no prefix and having a factor of 1.
        </p>
        <p>
          <strong>Current use: </strong>
          The centimeter, like the meter, is used in all sorts of applications
          worldwide (in countries that have undergone metrication) in instances
          where a smaller denomination of the meter is required. Height is
          commonly measured in centimeters outside of countries like the United
          States.
        </p>
      </section>

      <h2 className="text-xl text-[#006633] font-semibold mt-10">Inch</h2>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> An inch (symbol: in) is a unit of length
          in the imperial and US customary systems of measurement. An inch was
          defined to be equivalent to exactly 25.4 millimeters in 1959. There
          are 12 inches in a foot and 36 inches in a yard.
        </p>
        <p>
          <strong>History/origin:</strong> The term "inch" was derived from the
          Latin unit "uncia" which equated to "one-twelfth" of a Roman foot.
          There have been a number of different standards for the inch in the
          past, with the current definition being based on the international
          yard. One early definition used “three barleycorns” end-to-end; another
          used the average width of three human thumbs.
        </p>
        <p>
          <strong>Current use:</strong> The inch is mostly used in the United
          States, Canada, and the United Kingdom. It is also sometimes used in
          Japan and elsewhere for electronic parts like display sizes.
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
        <strong>Example: </strong>convert 15 cm to in:
        <br />
        15 cm = 15 × 0.3937007874 in = 5.905511811 in
      </p>
    </div>
  );
}


// app/Converters/CommonConversions/CmToInches/page.tsx
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
        text:
          "Multiply centimeters by 0.3937007874. Example: 30 cm × 0.3937007874 = 11.811 in.",
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
          <li>
            <a href="/Converters/LengthUnits/MetersToInches">Meters to Inches</a>
          </li>
          <li>
            <a href="/Converters/LengthUnits/CmToMeters">Cm to Meters</a>
          </li>
          <li>
            <a href="/Converters/CommonConversions/InchesToCm">Inches to Cm</a>
          </li>
          <li>
            <a href="/Converters/LengthUnits/CmToMillimeters">Cm to Millimeters</a>
          </li>
        </ul>
      </nav>

      {/* JSON-LD */}
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

      {/* Client-side interactive converter (contains the single H1) */}
      <ClientCmToInches />

      {/* Conversion Table */}
      <h2 className="text-xl text-[#006633] font-semibold mt-10">
        Centimeter to Inch Conversion Table
      </h2>
      <ConversionTable />

      {/* Full Article */}
      <article className="prose max-w-none mt-12">
        <h2>Cm to Inches Converter – Complete Online Calculator and Guide</h2>

        <p>
          <img
            src="/images/cm-to-inches-calculator.jpg"
            alt="Cm to Inches Converter Online Calculator for Quick Results"
          />
        </p>

        <h3>Introduction – Cm to Inches Converter</h3>
        <p>
          Do you need to <strong>convert cm to inches</strong>? Our free calculator makes
          the conversion fast, easy, and accurate. It works for height, shopping, travel,
          DIY, and school work. You enter centimeters, and you get inches instantly.
        </p>
        <p>
          Many websites and stores list sizes in centimeters. Others use inches. This mix
          often causes confusion. A single number can feel unclear. That is where our tool
          helps. It gives a clean answer in one click. It saves time and prevents errors
          on every device.
        </p>
        <p>
          This guide explains how the <strong>cm to inches converter</strong> works, why
          it matters, and where it helps in real life. You will see simple examples,
          everyday stories, and quick tips. We also link to related tools like the{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/InchesToCm">
            Inches to Cm Converter
          </a>
          , the{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/CmToFeet">
            Cm to Feet Converter
          </a>
          , and the{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/CmToMeters">
            Cm to Meters Converter
          </a>
          . If you also need the direct calculator view, use the{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/CmToInches">
            Cm to Inches Converter
          </a>{" "}
          link here.
        </p>

        <h3>How the Cm to Inches Converter Works</h3>
        <p>
          The rule is simple: <strong>Inches = Centimeters ÷ 2.54</strong>. This rule
          comes from the official definition of an inch. One inch equals exactly 2.54
          centimeters. This is an international standard. You can read more about SI units
          at the{" "}
          <a
            href="https://www.nist.gov/pml/weights-and-measures/metric-si/si-units"
            target="_blank"
            rel="noopener"
          >
            NIST SI Units page
          </a>
          .
        </p>
        <p>
          Here are quick examples. 100 cm ÷ 2.54 = 39.37 inches. 180 cm ÷ 2.54 = 70.87
          inches. 200 cm ÷ 2.54 = 78.74 inches. The math is always the same. Divide by
          2.54 and you are done. If you ever want the reverse, open the{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/InchesToCm">
            Inches to Cm Converter
          </a>{" "}
          and enter your inches.
        </p>
        <p>
          You can do this math by hand. You can also use a phone calculator. But our{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/CmToInches">
            cm to inches calculator
          </a>{" "}
          is faster. You type a value in the cm box. You see the inches right away. Large
          numbers work. Small numbers work. Decimals work too. The tool follows the exact
          rule every time.
        </p>
        <p>
          Why is this better than guessing? Because rounding too early causes errors. A
          small rounding slip can ruin a build plan or a clothing order. The converter
          removes that risk. It gives a correct number in a clear format. If you also need
          feet and inches, jump to the{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/CmToFeet">
            Cm to Feet Converter
          </a>{" "}
          after you get the inches value here.
        </p>

        <p>
          <img
            src="/images/cm-to-inches-formula.jpg"
            alt="Cm to Inches Converter Formula Example Centimeters Divided by 2.54"
          />
        </p>

        <h3>Why You Need a Cm to Inches Converter</h3>
        <p>
          Most countries use centimeters and meters. The United States uses inches and
          feet. The United Kingdom also uses inches for many things. Canada mixes both in
          daily life. Because of this, people see both systems online. That leads to
          mistakes and returns. A reliable converter fixes that.
        </p>
        <p>
          You need a <strong>cm to inches converter</strong> in many situations. Here are
          the most common use cases:
        </p>
        <ul>
          <li>
            <strong>Shopping:</strong> Many size charts are in centimeters. A sofa listed
            at 200 cm equals 78.74 inches. A dress 90 cm long equals 35.43 inches. Our
            tool helps you check before you buy. For other size checks, try the{" "}
            <a href="https://www.converthaven.com/Converters/CommonConversions/CmToMeters">
              Cm to Meters Converter
            </a>
            .
          </li>
          <li>
            <strong>Height:</strong> Doctors often record height in centimeters. Forms in
            the U.S. ask for feet and inches. Use the converter, then confirm with the{" "}
            <a href="https://www.converthaven.com/Converters/CommonConversions/CmToFeet">
              Cm to Feet Converter
            </a>{" "}
            or the{" "}
            <a href="https://www.converthaven.com/Converters/CommonConversions/FeetToCm">
              Feet to Cm Converter
            </a>{" "}
            if you need a reverse check.
          </li>
          <li>
            <strong>Travel:</strong> Airlines publish baggage rules in inches. Many
            travelers measure bags in centimeters. A cabin bag of 55 cm equals 21.65
            inches. This check avoids extra fees.
          </li>
          <li>
            <strong>DIY and construction:</strong> Plans might show inches. Your tape may
            show centimeters. Accurate conversion prevents costly mistakes on doors,
            frames, or flooring. When the plan lists feet, use the{" "}
            <a href="https://www.converthaven.com/Converters/CommonConversions/FeetToInches">
              Feet to Inches Converter
            </a>{" "}
            to keep things consistent.
          </li>
          <li>
            <strong>Sports and fitness:</strong> Equipment sizes vary by region. A yoga
            mat of 180 cm equals 70.87 inches. A tennis racquet of 70 cm equals 27.55
            inches. The tool keeps your data consistent.
          </li>
        </ul>
        <p>
          If you want a simple overview of measurement systems, see{" "}
          <a
            href="https://www.britannica.com/science/measurement"
            target="_blank"
            rel="noopener"
          >
            Britannica’s measurement page
          </a>
          . For imperial background, read{" "}
          <a
            href="https://en.wikipedia.org/wiki/Imperial_units"
            target="_blank"
            rel="noopener"
          >
            Wikipedia on Imperial Units
          </a>
          . These sources explain why both systems still exist.
        </p>

        <h3>Centimeters vs Inches – Key Differences</h3>
        <p>
          A centimeter is part of the metric system. It was designed to be simple and
          logical. One meter equals 100 centimeters. One kilometer equals 1,000 meters.
          The system scales in tens. That makes mental math easier in science and
          engineering. It is used almost everywhere in the world.
        </p>
        <p>
          An inch is part of the imperial system. In the past, the inch varied by region.
          Today it is fixed at 2.54 centimeters. Many U.S. industries still use inches,
          feet, and yards. People like inches for daily talk. They feel natural for hands,
          screens, and small objects. The UK and Canada still use inches for many products
          too.
        </p>
        <p>
          Which one is better? Neither is “best” for every case. Centimeters are great for
          precise work. Inches feel natural for quick estimates. That is why both remain
          in use. Your goal is to convert correctly. Our{" "}
          <strong>cm to inches converter</strong> helps you do that in seconds.
        </p>
        <p>
          For another clear explanation of SI units of length, visit the UK National
          Physical Laboratory:{" "}
          <a href="https://www.npl.co.uk/si-units/length" target="_blank" rel="noopener">
            NPL – SI Units of Length
          </a>
          . You can also review the metric basics on the{" "}
          <a
            href="https://www.nist.gov/pml/weights-and-measures/metric-si/si-units"
            target="_blank"
            rel="noopener"
          >
            NIST SI Units page
          </a>
          .
        </p>

        <p>
          <img
            src="/images/cm-to-inches-comparison.jpg"
            alt="Cm to Inches Comparison Chart for Everyday Sizes"
          />
        </p>

        <h3>Step-by-Step: How to Convert Cm to Inches</h3>
        <p>
          You can convert by hand when the internet is not available. Follow these simple
          steps. First, write down the number in centimeters. Second, divide that number
          by 2.54. Third, write the result in inches. That is it. The steps are always the
          same.
        </p>
        <p>
          Here is a short example. You have 180 centimeters. Divide 180 by 2.54. The
          result is 70.87 inches. That is close to 5 feet 11 inches. If you need feet and
          inches together, convert inches to feet. Divide 70.87 by 12. You get 5.90 feet.
          The 0.90 feet equals 0.90 × 12 = 10.8 inches. So it is about 5 feet 11 inches.
        </p>
        <p>
          Mental tips help when you do not need exact answers. Think of 1 cm as about 0.4
          inches. Think of 10 cm as about 4 inches. Think of 30 cm as about 12 inches.
          Think of 100 cm as about 39 inches. These are rough only. For exact work, use
          the calculator at{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/CmToInches">
            Cm to Inches Converter
          </a>
          .
        </p>
        <p>
          If you need the reverse process, multiply inches by 2.54. You can also open the{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/InchesToCm">
            Inches to Cm Converter
          </a>{" "}
          to get a clean answer right away.
        </p>

        <h3>Real-World Uses of the Cm to Inches Converter</h3>
        <p>
          This tool helps in many parts of daily life. These short stories show how it
          saves time, money, and stress.
        </p>
        <p>
          <strong>Ali buys a table online.</strong> The product page lists a length of 150
          centimeters. Ali thinks that sounds small. The table arrives. It is almost 59
          inches long. It fills more space than he planned. A quick check with the
          converter would have shown the real size. He would have chosen the next size
          down. The room would feel more open.
        </p>
        <p>
          <strong>Sara flies to another country.</strong> Her suitcase stands 75
          centimeters tall. The airline limit says 30 inches. Sara uses the converter.
          Seventy-five centimeters equals 29.52 inches. She smiles. The bag is within the
          limit. She avoids a fee and boards smoothly. Now she checks every bag in inches
          before she books a flight.
        </p>
        <p>
          <strong>Aisha prepares a school poster.</strong> The instructions ask for 24
          inches in width. Her board is 60 centimeters. She converts 60 centimeters to
          inches. The answer is 23.62 inches. That is perfect. She keeps the board. She
          moves to the next task. No last-minute shop trip is needed.
        </p>
        <p>
          <strong>Ahmed works on a DIY project.</strong> The plan shows a cut of 98
          inches. His tape reads centimeters. He converts 98 inches into centimeters with
          the reverse formula. He multiplies by 2.54 and gets 249 centimeters. The cut is
          exact. The piece fits well. The project looks clean and solid.
        </p>
        <p>
          <strong>Nadia checks a sofa online.</strong> The listing says 200 centimeters in
          length. She wants to know if it fits a wall. She converts to inches and gets
          78.74 inches. She measures the wall. The sofa fits with room for a lamp. She
          places the order with confidence.
        </p>
        <p>
          <strong>Omar compares sports gear.</strong> A tennis racquet is listed at 70
          centimeters. He wants inches to compare brands. The converter shows 27.55
          inches. Another brand lists 27 inches. Omar now compares true sizes, not
          guesswork.
        </p>
        <p>
          These examples show a clear pattern. The <strong>cm to inches converter</strong>{" "}
          removes doubt. It turns mixed units into simple numbers you can trust. When you
          finish here, you can continue to related tools like the{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/CmToMeters">
            Cm to Meters Converter
          </a>{" "}
          or the{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/CmToFeet">
            Cm to Feet Converter
          </a>{" "}
          for more checks.
        </p>

        <p>
          <img
            src="/images/cm-to-inches-daily.jpg"
            alt="Cm to Inches Converter for Everyday Real Life Examples"
          />
        </p>

        <h3>Common Mistakes with the Cm to Inches Converter</h3>
        <ul>
          <li>
            <strong>Rounding too early:</strong> Some people use 1 cm ≈ 0.4 inches. This
            is okay for a quick guess. But it is not exact. A small rounding error can
            grow on large numbers.
          </li>
          <li>
            <strong>Mixing units:</strong> A common slip is to read cm as inches. One
            hundred seventy centimeters is not 170 inches. It is about 67 inches. Always
            check the unit label.
          </li>
          <li>
            <strong>Dropping decimals:</strong> Many people ignore decimal places. That
            causes wrong sizes for clothes and parts. Keep two decimals for safer
            results.
          </li>
          <li>
            <strong>Wrong formula:</strong> Some divide by the wrong number. Remember, you
            always divide centimeters by 2.54 to get inches. If you need inches back to
            cm, multiply by 2.54 or use the{" "}
            <a href="https://www.converthaven.com/Converters/CommonConversions/InchesToCm">
              Inches to Cm Converter
            </a>
            .
          </li>
        </ul>
        <p>
          Our{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/CmToInches">
            cm to inches calculator
          </a>{" "}
          prevents these errors. It applies the correct formula and keeps the right
          precision. If you want to check your height in feet and inches after you get an
          inches value, use the{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/FeetToInches">
            Feet to Inches Converter
          </a>{" "}
          for a quick split.
        </p>

        <h3>FAQs – Cm to Inches Converter</h3>

        <h4>What is 1 cm in inches?</h4>
        <p>
          One centimeter equals 0.39 inches. It is less than half an inch. Use the
          converter if you need more decimals for exact work.
        </p>

        <h4>What is 50 cm in inches?</h4>
        <p>
          Fifty centimeters equals 19.69 inches. That is a little under 1 foot 8 inches.
          It is a common size for small shelves and bags.
        </p>

        <h4>What is 100 cm in inches?</h4>
        <p>
          One hundred centimeters equals 39.37 inches. That is a bit over 3 feet. Many
          tables and desks are near this length.
        </p>

        <h4>What is 150 cm in inches?</h4>
        <p>
          One hundred fifty centimeters equals 59.06 inches. That is close to 4 feet 11
          inches. It is a common size for short cabinets.
        </p>

        <h4>What is 170 cm in inches?</h4>
        <p>
          One hundred seventy centimeters equals 66.93 inches. That is about 5 feet 7
          inches. It is a very common adult height.
        </p>

        <h4>What is 183 cm in inches?</h4>
        <p>
          One hundred eighty-three centimeters equals 72.05 inches. That is exactly 6
          feet. People search this often because many athletes are 6 feet tall.
        </p>

        <h4>What is 200 cm in inches?</h4>
        <p>
          Two hundred centimeters equals 78.74 inches. That is taller than most door
          frames. It is also close to large sofa lengths.
        </p>

        <h4>Is 5’7 short or tall?</h4>
        <p>
          Five foot seven (170 cm) is average for men in many countries. For women, it is
          slightly tall. Use the converter for an exact number in inches.
        </p>

        <h4>What is 6 feet in cm?</h4>
        <p>
          Six feet equals 182.88 centimeters. It also equals 72 inches. If you prefer feet
          and inches from centimeters, try the{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/CmToFeet">
            Cm to Feet Converter
          </a>{" "}
          after you convert to inches here.
        </p>

        <h4>Can I convert inches back to cm?</h4>
        <p>
          Yes. Multiply inches by 2.54. For example, 70 inches equals 177.8 centimeters.
          You can also use our{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/InchesToCm">
            Inches to Cm Converter
          </a>{" "}
          for a quick answer.
        </p>

        <h3>Conclusion – Cm to Inches Converter You Can Trust</h3>
        <p>
          Our <strong>cm to inches converter</strong> is fast, simple, and reliable. It is
          useful for school, shopping, travel, sports, and building work. It removes
          guesswork and avoids costly mistakes. Bookmark this page and use it whenever you
          need a clean, exact result.
        </p>
        <p>
          If you want to learn more about units, read{" "}
          <a
            href="https://www.nist.gov/pml/weights-and-measures/metric-si/si-units"
            target="_blank"
            rel="noopener"
          >
            NIST on SI Units
          </a>{" "}
          and{" "}
          <a
            href="https://en.wikipedia.org/wiki/Imperial_units"
            target="_blank"
            rel="noopener"
          >
            Wikipedia on Imperial Units
          </a>
          . Also try our related tools:{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/InchesToCm">
            Inches to Cm Converter
          </a>
          ,{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/CmToFeet">
            Cm to Feet Converter
          </a>
          ,{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/FeetToCm">
            Feet to Cm Converter
          </a>
          , and{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/CmToMeters">
            Cm to Meters Converter
          </a>
          . For quick decimal-to-fraction breakdowns of inches, you can pair results with
          the{" "}
          <a href="https://www.converthaven.com/Converters/CommonConversions/FeetToInches">
            Feet to Inches Converter
          </a>
          .
        </p>

        <p>
          <img
            src="/images/cm-to-inches-conclusion.jpg"
            alt="Cm to Inches Converter for Everyday Life Situations and Projects"
          />
        </p>
      </article>
    </div>
  );
}


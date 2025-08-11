'use client';

import React from "react";
import Head from "next/head";
import Link from "next/link";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

/* ---------------------------
   Units (kept to accurate, common ones)
---------------------------- */
const electricConductanceUnits: Record<string, number> = {
  "siemens [S]": 1,
  "megasiemens [MS]": 1e6,
  "kilosiemens [kS]": 1e3,
  "millisiemens [mS]": 1e-3,
  "microsiemens [µS]": 1e-6,
  "ampere/volt [A/V]": 1, // same as siemens
  "mho": 1,               // old name for siemens
};

/* ---------------------------
   Conversions
---------------------------- */
const convertElectricConductance = (value: number, from: string, to: string): number => {
  const fromFactor = electricConductanceUnits[from];
  const toFactor = electricConductanceUnits[to];
  if (fromFactor == null || toFactor == null) return NaN;
  return (value * fromFactor) / toFactor;
};

/* ---------------------------
   JSON-LD
---------------------------- */
const CANONICAL =
  "https://www.converthaven.com/Converters/ElectricityConverters/ElectricConductanceConverter";

const schemaJSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Converters", "item": "https://www.converthaven.com/Converters" },
        { "@type": "ListItem", "position": 2, "name": "Electricity Converters", "item": "https://www.converthaven.com/Converters/ElectricityConverters" },
        { "@type": "ListItem", "position": 3, "name": "Electric Conductance Converter", "item": CANONICAL }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "Electric Conductance Converter",
      "url": CANONICAL,
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any",
      "description": "Convert electric conductance between siemens (S), millisiemens (mS), and microsiemens (µS) with instant results.",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "publisher": { "@type": "Organization", "name": "ConvertHaven", "url": "https://www.converthaven.com" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is electric conductance?",
          "acceptedAnswer": { "@type": "Answer", "text": "Electric conductance (G) measures how easily current flows. The SI unit is the siemens (S). Conductance is the reciprocal of resistance: G = 1/R." }
        },
        {
          "@type": "Question",
          "name": "How do I convert between conductance units?",
          "acceptedAnswer": { "@type": "Answer", "text": "1 S = 1000 mS = 1,000,000 µS. Multiply or divide by powers of 10 to move between S, mS, and µS." }
        },
        {
          "@type": "Question",
          "name": "How is conductance related to resistance?",
          "acceptedAnswer": { "@type": "Answer", "text": "They are reciprocals. Example: R = 50 Ω → G = 1/50 = 0.02 S (20 mS)." }
        }
      ]
    }
  ]
};

const ElectricConductanceConverterPage: React.FC = () => {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>Electric Conductance Converter (S, mS, µS) | ConvertHaven</title>
        <meta
          name="description"
          content="Instantly convert electric conductance between siemens (S), millisiemens (mS), and microsiemens (µS). Includes formula, examples, and FAQs."
        />
        <link rel="canonical" href={CANONICAL} />

        {/* Robots */}
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:site_name" content="ConvertHaven" />
        <meta property="og:title" content="Electric Conductance Converter (S, mS, µS)" />
        <meta
          property="og:description"
          content="Convert siemens (S), mS, and µS quickly and accurately. Learn G = 1/R with worked examples."
        />
        <meta property="og:image" content="https://www.converthaven.com/og-default.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Electric Conductance Converter (S, mS, µS)" />
        <meta
          name="twitter:description"
          content="Fast, accurate conversions between S, mS, and µS, plus formula and examples."
        />
        <meta name="twitter:image" content="https://www.converthaven.com/og-default.png" />

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJSONLD) }} />
      </Head>

      {/* Single H1 is rendered by ReusableConverter (keep one per page) */}
      <ReusableConverter
        heading="Electric Conductance Converter"
        units={Object.keys(electricConductanceUnits)}
        convert={convertElectricConductance}
      />

      {/* Supporting copy for SEO & UX */}
      <section style={{ maxWidth: 880, margin: "2rem auto", padding: "0 1rem" }}>
        <h2>How to Convert Conductance</h2>
        <p>
          Conductance (<strong>G</strong>) is the reciprocal of resistance (<strong>R</strong>): <strong>G = 1/R</strong>.
          Use siemens (<strong>S</strong>) as the base unit and switch to <strong>mS</strong> or <strong>µS</strong> for smaller values.
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
    </>
  );
};

export default ElectricConductanceConverterPage;

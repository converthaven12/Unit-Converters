'use client';

import React from 'react';
import Head from 'next/head';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

/* =======================
   SEO CONSTANTS (SAFE)
   ======================= */
const SEO_TITLE = 'Mile to Others Converter | Free & Accurate Mile Conversions';
const SEO_DESC =
  'Instantly convert miles to kilometers, meters, yards, feet, and inches. Fast and accurate mile conversions with examples. Free, no login.';
const CANONICAL =
  'https://www.converthaven.com/Converters/linkedConversions/MileToOthers';

const FAQS = [
  {
    q: 'How do you convert miles to kilometers?',
    a: 'Multiply miles by 1.60934. Example: 5 mi × 1.60934 = 8.0467 km.',
  },
  { q: 'What is 1 mile in meters?', a: '1 mile = 1609.344 meters.' },
  { q: 'How many feet are in a mile?', a: '1 mile = 5,280 feet.' },
];

const WEBAPP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mile to Others Converter',
  url: CANONICAL,
  applicationCategory: 'Converter',
  operatingSystem: 'Web',
  description: SEO_DESC,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const BREADCRUMBS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.converthaven.com/' },
    { '@type': 'ListItem', position: 2, name: 'Converters', item: 'https://www.converthaven.com/Converters' },
    { '@type': 'ListItem', position: 3, name: 'Length', item: 'https://www.converthaven.com/Converters/Length' },
    { '@type': 'ListItem', position: 4, name: 'Mile to Others', item: CANONICAL },
  ],
};

/* =======================
   YOUR ORIGINAL DATA
   ======================= */
const mileToMile: Record<string, number> = {
  'Mile': 1,
  'Meter': 1609.34,
  'Kilometer': 1.60934,
  'Decimeter': 16093.4,
  'Centimeter': 160934,
  'Millimeter': 1609340,
  'Micrometer': 1609340000,
  'Nanometer': 1609340000000,
  'Yard': 1760,
  'Foot': 5280,
  'Inch': 63360,
  'Light Year': 1.70108e-13,
  'Break': 1.60934e-9,
  'Exameter': 1.60934e-15,
  'Petameter': 1.60934e-12,
  'Terameter': 1.60934e-9,
  'Gigameter': 0.00160934,
  'Megameter': 1.60934,
  'Hectometer': 16.0934,
  'Dekameter': 160.934,
  'Micron': 1609340000,
  'Picometer': 1.60934e+15,
  'Femtometer': 1.60934e+18,
  'Attometer': 1.60934e+21,
  'Megaparsec': 5.21553e-20,
  'Kiloparsec': 5.21553e-17,
  'Parsec': 5.21553e-14,
  'Astronomical Unit': 1.07578e-8,
  'League': 0.333333,
  'Nautical League (UK)': 0.289474,
  'Nautical League (int.)': 0.289659,
  'League (statute)': 0.333333,
  'Nautical Mile (UK)': 0.868421,
  'Nautical Mile (international)': 0.868976,
  'Mile (statute)': 1,
  'Mile (US Survey)': 1,
  'Mile (Roman)': 1.08754,
  'Kiloyard': 1.76,
  'Furlong': 8,
  'Furlong (US Survey)': 8,
  'Chain': 80,
  'Chain (US Survey)': 80,
  'Rope': 264,
  'Rod': 320,
  'Rod (US Survey)': 320,
  'Perch': 320,
  'Pole': 320,
  'Fathom': 880,
  'Fathom (US Survey)': 880,
  'Ell': 1408,
  'Foot (US Survey)': 5279.99,
  'Link': 8000,
  'Link (US Survey)': 8000,
  'Cubit (UK)': 3520,
  'Hand': 15840,
  'Span (cloth)': 7040,
  'Finger (cloth)': 14080,
  'Nail (cloth)': 28160,
  'Inch (US Survey)': 63360,
  'Barleycorn': 190080,
  'Mil': 63360000,
  'Microinch': 63360000000,
  'Angstrom': 16093400000000,
  'A.u. Of Length': 30412191813635,
  'X-unit': 16059372703412,
  'Fermi': 1.60934e+18,
  'Arpent': 27.5056,
  'Pica': 380160,
  'Point': 4561920,
  'Twip': 91238400,
  'Aln': 2710.35,
  'Famn': 903.449,
  'Caliber': 6336000,
  'Centiinch': 6336000,
  'Ken': 759.827,
  'Russian Archin': 2262.86,
  'Roman Actus': 45.3608,
  'Vara De Tarea': 642.336,
  'Vara Conuquera': 642.336,
  'Vara Castellana': 1927.01,
  'Cubit (Greek)': 3477.49,
  'Long Reed': 502.857,
  'Reed': 586.667,
  'Long Cubit': 3017.14,
  'Handbreadth': 21120,
  'Fingerbreadth': 84480,
  'Planck Length': 9.9585e+37,
  'Electron Radius (classical)': 5.7110635e+17,
  'Bohr Radius': 30412191813635,
  "Earth's Equatorial Radius": 0.000252321,
  "Earth's Polar Radius": 0.000253356,
  "Earth's Distance From Sun": 1.07578e-8,
  "Sun's Radius": 0.00231228,
};

const convert = (value: number, from: string, to: string): number => {
  const fromInMiles = value;
  const toFactor = mileToMile[to];
  if (!toFactor) return 0;
  return fromInMiles / toFactor;
};

const toUnits = Object.keys(mileToMile).sort();

/* =======================
   PAGE COMPONENT
   ======================= */
const MileToAllPage = () => {
  return (
    <>
      {/* SEO head tags */}
      <Head>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESC} />
        <link rel="canonical" href={CANONICAL} />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESC} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:site_name" content="ConvertHaven" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESC} />
      </Head>

      {/* Intro (keep only one main H1 in the whole page – your converter likely renders it) */}
      <p>
        Use this free Mile to Others converter to instantly change miles into
        kilometers, meters, yards, feet, and inches. One mile equals 1.60934
        kilometers and 5,280 feet, so you can quickly switch between imperial
        and metric units without doing the math. Example: 3 miles × 1.60934 =
        4.82802 km. Another example: 0.25 miles × 5280 = 1,320 feet. This tool
        is helpful for runners, drivers, students, and anyone who needs fast,
        accurate distance conversions. Results update immediately, work on
        mobile and desktop, and are completely free to use.
      </p>

      {/* Internal links (improves internal linking) */}
      <nav aria-label="Related conversions" style={{ marginTop: 12 }}>
        <h2>Related converters</h2>
        <ul>
          <li><a href="/Converters/linkedConversions/KmToOthers">Kilometer to Others</a></li>
          <li><a href="/Converters/linkedConversions/MetersToOthers">Meter to Others</a></li>
          <li><a href="/Converters/linkedConversions/YardsToOthers">Yard to Others</a></li>
          <li><a href="/Converters/linkedConversions/FootToOthers">Foot to Others</a></li>
          <li><a href="/Converters/linkedConversions/InchToOthers">Inch to Others</a></li>
        </ul>
      </nav>

      {/* Structured data */}
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

      {/* Your existing converter (unchanged). 
          If this renders an H1, we keep it; if it's not H1, we can add one later. */}
      <LockedUnitConverter
        heading="Mile to Others Converter"
        lockedFromUnit="Mile"
        units={toUnits}
        convert={convert}
      />
    </>
  );
};

export default MileToAllPage;

'use client';

import React from "react";
import Head from "next/head";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const electricConductanceUnits: Record<string, number> = {
  "siemens [S]": 1,
  "megasiemens [MS]": 1e6,
  "kilosiemens [kS]": 1e3,
  "millisiemens [mS]": 1e-3,
  "microsiemens [µS]": 1e-6,
  "ampere/volt [A/V]": 1,
  "mho": 1,
  "gemmho": 1e9,
  "micromho": 1e-6,
  "abmho": 1e9,
  "statmho": 8.98755e11,
  "Quantized Hall conductance": 3.874e-5,
};

const schemaJSONLD = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Electric Conductance Converter",
  "image": "https://www.converthaven.com/Converters/ElectricityConverters/ElectricConductanceConverter.png",
  "description": "Easily convert electric conductance units such as Siemens and mhos with our fast and accurate converter tool.",
  "url": "https://www.converthaven.com/Converters/ElectricityConverters/ElectricConductanceConverter",
};

const ElectricConductanceConverterPage: React.FC = () => {
  const convertElectricConductance = (value: number, from: string, to: string): number => {
    const fromFactor = electricConductanceUnits[from];
    const toFactor = electricConductanceUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <>
      <Head>
        <title>Electric Conductance Converter - ConvertHaven</title>
        <meta
          name="description"
          content="Easily convert electric conductance units such as Siemens and mhos with our fast and accurate converter tool."
        />
        <link
          rel="canonical"
          href="https://www.converthaven.com/Converters/ElectricityConverters/ElectricConductanceConverter"
        />
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Electric Conductance Converter - ConvertHaven" />
        <meta
          property="og:description"
          content="Easily convert electric conductance units such as Siemens and mhos with our fast and accurate converter tool."
        />
        <meta
          property="og:image"
          content="https://www.converthaven.com/Converters/ElectricityConverters/ElectricConductanceConverter.png"
        />
        <meta
          property="og:url"
          content="https://www.converthaven.com/Converters/ElectricityConverters/ElectricConductanceConverter"
        />
        <meta property="og:type" content="website" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJSONLD) }}
        />
      </Head>

      <ReusableConverter
        heading="Electric Conductance Converter"
        units={Object.keys(electricConductanceUnits)}
        convert={convertElectricConductance}
      />
    </>
  );
};

export default ElectricConductanceConverterPage;

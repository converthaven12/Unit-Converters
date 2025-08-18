"use client";
import Head from "next/head";
import Link from "next/link";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "siemens [S]": 1,
  "kilosiemens [kS]": 1e3,
  "megasiemens [MS]": 1e6,
  "millisiemens [mS]": 1e-3,
  "microsiemens [µS]": 1e-6,
  "ampere/volt [A/V]": 1,
  "mho": 1,
};

const convert = (value: number, from: string, to: string): number => {
  const f = units[from];
  const t = units[to];
  if (f == null || t == null) return NaN;
  return (value * f) / t;
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Electric Conductance Converter",
  "url": "https://www.converthaven.com/Converters/ElectricityConverters/ElectricConductanceConverter",
  "description":
    "Convert electric conductance units instantly (Siemens, mho, kilosiemens, millisiemens, etc) online and free.",
  "applicationCategory": "Utility",
  "operatingSystem": "All",
};

export default function ClientElectricConductance() {
  return (
    <>
      <Head>
        <title>
          Electric Conductance Converter | Convert Siemens, Mho, Millisiemens Online
        </title>
        <meta
          name="description"
          content="Convert electric conductance units instantly (Siemens, mho, kilosiemens, millisiemens, etc) online and free. Accurate, fast, and easy for engineers and students."
        />
        <link
          rel="canonical"
          href="https://www.converthaven.com/Converters/ElectricityConverters/ElectricConductanceConverter"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Electric Conductance Converter | Converthaven" />
        <meta
          property="og:description"
          content="Convert electric conductance units instantly (Siemens, mho, kilosiemens, millisiemens, etc) online and free."
        />
        <meta
          property="og:url"
          content="https://www.converthaven.com/Converters/ElectricityConverters/ElectricConductanceConverter"
        />
        <meta
          property="og:image"
          content="https://www.converthaven.com/images/electric-conductance-og.png"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <h1>Electric Conductance Converter</h1>
      <ReusableConverter
        heading="Electric Conductance Converter"
        units={Object.keys(units)}
        convert={convert}
      />
      {/* Internal Links */}
      <section>
        <h2>Related Electricity Converters</h2>
        <ul>
          <li>
            <Link href="/Converters/ElectricityConverters/ElectricResistanceConverter">
              Electric Resistance Converter
            </Link>
          </li>
          <li>
            <Link href="/Converters/ElectricityConverters/ElectricCurrentConverter">
              Electric Current Converter
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

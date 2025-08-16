"use client";
import Head from "next/head";
import Link from "next/link";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable";
import { hexToBinary } from "../../../../utils/Functions/conversionUtils";

const definitions = [
  {
    heading: "Hexadecimal",
    content: [
      "Definition: Hexadecimal is a base-16 numeral system using digits 0-9 and letters A-F.",
      "History/origin: Used widely in computing and digital electronics as a compact representation of binary data.",
      "Current use: Common in programming, memory addressing, and color codes in web design.",
    ],
  },
  {
    heading: "Binary",
    content: [
      "Definition: Binary is a base-2 numeral system using only two digits, 0 and 1.",
      "History/origin: Used in digital electronics and computing as it represents two states (off/on).",
      "Current use: Fundamental to computer systems, data representation, and digital communication.",
    ],
  },
];

// Structured Data for Schema.org
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Hex to Binary Converter",
  "url": "https://www.converthaven.com/Converters/NumberUnits/HexToBinary",
  "description":
    "Convert hexadecimal numbers to binary instantly with our free online Hex to Binary converter. Accurate, fast, and easy to use for students and professionals.",
  "applicationCategory": "Utility",
  "operatingSystem": "All",
};

const HexToBinaryPage = () => {
  return (
    <>
      <Head>
        {/* Unique Title and Description */}
        <title>Hex to Binary Converter | Convert Hexadecimal to Binary Online</title>
        <meta
          name="description"
          content="Convert hexadecimal numbers to binary instantly with our free Hex to Binary converter. Accurate, fast, and easy to use for students and professionals."
        />
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.converthaven.com/Converters/NumberUnits/HexToBinary"
        />
        {/* OpenGraph Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hex to Binary Converter | Converthaven"
        />
        <meta
          property="og:description"
          content="Convert hexadecimal to binary numbers online for free. Useful for programmers, engineers, and students."
        />
        <meta
          property="og:url"
          content="https://www.converthaven.com/Converters/NumberUnits/HexToBinary"
        />
        <meta
          property="og:image"
          content="https://www.converthaven.com/images/hex-to-binary-og.png"
        />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      {/* Only ONE H1 Tag: If ReusableConversionPage renders its own H1, remove the one below! */}
      <h1>Hex to Binary Converter</h1>

      {/* Main Conversion Tool */}
      <ReusableConversionPage
        title="Convert Hexadecimal to Binary"
        fromUnit="Hexadecimal"
        toUnit="Binary"
        convertFunction={hexToBinary}
        definitions={definitions}
        tableComponent={<ConversionTable />}
        conversionExample={
          <>
            Formula: Binary = Hexadecimal converted to decimal, then decimal to
            base-2 string
            <br />
            <strong>Example:</strong> convert hexadecimal FF to binary:
            <br />
            FF (hex) = 255 (decimal)
            <br />
            255 in binary = 11111111
          </>
        }
        reversePath="/Converters/NumberUnits/BinaryToHex"
      />

      {/* Internal Links to Related Tools */}
      <section>
        <h2>Related Unit Converters</h2>
        <ul>
          <li>
            <Link href="/Converters/NumberUnits/BinaryToHex">
              <a>Binary to Hex Converter</a>
            </Link>
          </li>
          <li>
            <Link href="/Converters/NumberUnits/DecimalToBinary">
              <a>Decimal to Binary Converter</a>
            </Link>
          </li>
          <li>
            <Link href="/Converters/NumberUnits/HexToDecimal">
              <a>Hex to Decimal Converter</a>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default HexToBinaryPage;

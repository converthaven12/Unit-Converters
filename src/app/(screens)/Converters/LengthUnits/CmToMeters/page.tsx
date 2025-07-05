"use client";

import Head from 'next/head';
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable";

const definitions = [
  {
    heading: "Centimeter",
    content: [
      "Definition: A centimeter is a unit of length...",
      "History/origin: The centimeter, derived from the meter...",
      "Current use: The centimeter is widely used in everyday life...",
    ],
  },
  {
    heading: "Meter",
    content: [
      "Definition: A meter is the SI base unit of length...",
      "History/origin: The meter was established to provide a standard...",
      "Current use: The meter is the fundamental unit of length...",
    ],
  },
];

const page = () => {
  return (
    <>
      <Head>
        <title>Convert cm to meters - Converthaven</title>
        <meta name="description" content="Easily convert centimeters to meters using our fast and accurate cm to m converter. Perfect for students, engineers, and everyday use." />
      </Head>

      <h1>Centimeters to Meters Converter</h1>
      <p>Convert centimeters (cm) to meters (m) in one click. Our tool ensures precision for your academic, engineering, or personal measurement needs.</p>

      <ReusableConversionPage
        title="Convert Centimeters to Meters"
        fromUnit="Centimeters"
        toUnit="Meters"
        convertFunction={(val) => val / 100}
        definitions={definitions}
        tableComponent={<ConversionTable />}
        conversionExample={
          <>
            1 cm = 0.01 m
            <br />
            1 m = 100 cm
            <br />
            <strong>Example:</strong> convert 150 cm to m:
            <br />
            150 cm = 150 ÷ 100 m = 1.5 m
          </>
        }
        reversePath="/Converters/LengthUnits/MetersToCm"
      />
    </>
  );
};

export default page;


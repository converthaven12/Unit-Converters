"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Bar to Psi

const definitions = [
  {
    heading: "Bar",
    content: [
      "Definition: Bar is a metric unit of pressure, defined as exactly 100,000 Pascals.",
      "History/origin: Introduced by the Norwegian meteorologist Vilhelm Bjerknes in the early 20th century.",
      "Current use: Widely used in meteorology and engineering to measure pressure.",
    ],
  },
  {
    heading: "Pounds per square inch (psi)",
    content: [
      "Definition: Psi is a unit of pressure commonly used in the United States, representing pounds of force per square inch.",
      "History/origin: Originated from imperial units in the US customary system.",
      "Current use: Commonly used in automotive and industrial pressure measurements.",
    ],
  },
];

const BarToPsiPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Bar to Pounds per Square Inch (psi)"
      fromUnit="Bar"
      toUnit="Pounds per Square Inch (psi)"
      convertFunction={(val) => val * 14.5038} // 1 Bar = 14.5038 psi
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Bar to Psi
      conversionExample={
        <>
          Formula: psi = Bar × 14.5038
          <br />
          <strong>Example:</strong> convert 2 Bar to psi:
          <br />2 × 14.5038 = 29.0076 psi
        </>
      }
      reversePath="/Converters/Pressure/PsiToBar"
    />
  );
};

export default BarToPsiPage;

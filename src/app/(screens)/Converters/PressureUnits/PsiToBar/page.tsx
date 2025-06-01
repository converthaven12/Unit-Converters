"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Psi to Bar

const definitions = [
  {
    heading: "Pounds per square inch (psi)",
    content: [
      "Definition: Psi is a unit of pressure commonly used in the United States, representing pounds of force per square inch.",
      "History/origin: Originated from imperial units in the US customary system.",
      "Current use: Commonly used in automotive and industrial pressure measurements.",
    ],
  },
  {
    heading: "Bar",
    content: [
      "Definition: Bar is a metric unit of pressure, defined as exactly 100,000 Pascals.",
      "History/origin: Introduced by the Norwegian meteorologist Vilhelm Bjerknes in the early 20th century.",
      "Current use: Widely used in meteorology and engineering to measure pressure.",
    ],
  },
];

const PsiToBarPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Pounds per Square Inch (psi) to Bar"
      fromUnit="Pounds per Square Inch (psi)"
      toUnit="Bar"
      convertFunction={(val) => val / 14.5038} // 1 psi = 1/14.5038 Bar
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Psi to Bar
      conversionExample={
        <>
          Formula: Bar = psi ÷ 14.5038
          <br />
          <strong>Example:</strong> convert 29.0076 psi to Bar:
          <br />
          29.0076 ÷ 14.5038 = 2 Bar
        </>
      }
      reversePath="/Converters/PressureUnits/BarToPsi"
    />
  );
};

export default PsiToBarPage;

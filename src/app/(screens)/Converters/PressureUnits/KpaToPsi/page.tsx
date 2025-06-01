"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Kpa to Psi

const definitions = [
  {
    heading: "Kilopascal (kPa)",
    content: [
      "Definition: Kilopascal is a unit of pressure equal to 1,000 Pascals.",
      "History/origin: Derived from the Pascal, the SI unit of pressure, named after Blaise Pascal.",
      "Current use: Commonly used worldwide in meteorology, engineering, and other fields.",
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

const KpaToPsiPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Kilopascal (kPa) to Pounds per Square Inch (psi)"
      fromUnit="Kilopascal (kPa)"
      toUnit="Pounds per Square Inch (psi)"
      convertFunction={(val) => val * 0.145038} // 1 kPa = 0.145038 psi
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Kpa to Psi
      conversionExample={
        <>
          Formula: psi = kPa × 0.145038
          <br />
          <strong>Example:</strong> convert 100 kPa to psi:
          <br />
          100 × 0.145038 = 14.5038 psi
        </>
      }
      reversePath="/Converters/PressureUnits/PsiToKpa"
    />
  );
};

export default KpaToPsiPage;

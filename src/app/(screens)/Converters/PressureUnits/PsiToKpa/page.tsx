"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Psi to Kpa

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
    heading: "Kilopascal (kPa)",
    content: [
      "Definition: Kilopascal is a unit of pressure equal to 1,000 Pascals.",
      "History/origin: Derived from the Pascal, the SI unit of pressure, named after Blaise Pascal.",
      "Current use: Commonly used worldwide in meteorology, engineering, and other fields.",
    ],
  },
];

const PsiToKpaPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Pounds per Square Inch (psi) to Kilopascal (kPa)"
      fromUnit="Pounds per Square Inch (psi)"
      toUnit="Kilopascal (kPa)"
      convertFunction={(val) => val / 0.145038} // 1 psi = 6.89476 kPa (approx)
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Psi to Kpa
      conversionExample={
        <>
          Formula: kPa = psi ÷ 0.145038
          <br />
          <strong>Example:</strong> convert 14.5038 psi to kPa:
          <br />
          14.5038 ÷ 0.145038 = 100 kPa
        </>
      }
      reversePath="/Converters/PressureUnits/KpaToPsi"
    />
  );
};

export default PsiToKpaPage;

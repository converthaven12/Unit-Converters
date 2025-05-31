"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for J to kJ

const definitions = [
  {
    heading: "Joule (J)",
    content: [
      "Definition: A joule is the SI unit of energy, defined as the amount of energy transferred when applying a force of one newton over a distance of one meter.",
      "History/origin: Named after James Prescott Joule, it has been adopted as the standard unit of energy worldwide.",
      "Current use: Joules are widely used in physics, engineering, and many scientific disciplines to measure energy.",
    ],
  },
  {
    heading: "Kilojoule (kJ)",
    content: [
      "Definition: A kilojoule is a unit of energy equal to 1,000 joules.",
      "History/origin: The kilojoule is derived from the joule as a larger unit for convenience in measuring bigger quantities of energy.",
      "Current use: Kilojoules are used globally in science, nutrition, and engineering for energy measurements.",
    ],
  },
];

const JToKJPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Joules to Kilojoules"
      fromUnit="Joules (J)"
      toUnit="Kilojoules (kJ)"
      convertFunction={(val) => val / 1000} // 1 J = 0.001 kJ
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 joule = 0.001 kilojoules
          <br />
          1 kilojoule = 1000 joules
          <br />
          <strong>Example:</strong> convert 2500 joules to kilojoules:
          <br />
          2500 ÷ 1000 = 2.5 kilojoules
        </>
      }
      reversePath="/Converters/EnergyUnits/KJToJ"
    />
  );
};

export default JToKJPage;

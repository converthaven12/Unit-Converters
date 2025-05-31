"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for kJ to J

const definitions = [
  {
    heading: "Kilojoule (kJ)",
    content: [
      "Definition: A kilojoule is a unit of energy equal to 1,000 joules.",
      "History/origin: The kilojoule is derived from the joule as a larger unit for convenience in measuring bigger quantities of energy.",
      "Current use: Kilojoules are used globally in science, nutrition, and engineering for energy measurements.",
    ],
  },
  {
    heading: "Joule (J)",
    content: [
      "Definition: A joule is the SI unit of energy, defined as the amount of energy transferred when applying a force of one newton over a distance of one meter.",
      "History/origin: Named after James Prescott Joule, it has been adopted as the standard unit of energy worldwide.",
      "Current use: Joules are widely used in physics, engineering, and many scientific disciplines to measure energy.",
    ],
  },
];

const KJToJPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Kilojoules to Joules"
      fromUnit="Kilojoules (kJ)"
      toUnit="Joules (J)"
      convertFunction={(val) => val * 1000} // 1 kJ = 1000 J
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 kilojoule = 1000 joules
          <br />
          1 joule = 0.001 kilojoules
          <br />
          <strong>Example:</strong> convert 2.5 kilojoules to joules:
          <br />
          2.5 × 1000 = 2500 joules
        </>
      }
      reversePath="/Converters/EnergyUnits/JToKJ"
    />
  );
};

export default KJToJPage;

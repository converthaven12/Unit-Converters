"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adapt this table for Kg to N

const definitions = [
  {
    heading: "Kilogram (kg)",
    content: [
      "Definition: A kilogram is the SI base unit of mass, defined as the mass of the International Prototype Kilogram.",
      "History/origin: Originally defined as the mass of one liter of water, now defined by physical constants.",
      "Current use: Kilograms are widely used worldwide as the standard unit of mass in scientific and everyday measurements.",
    ],
  },
  {
    heading: "Newton (N)",
    content: [
      "Definition: A newton is the SI unit of force, defined as the force required to accelerate one kilogram of mass by one meter per second squared.",
      "History/origin: Named after Sir Isaac Newton for his work in classical mechanics.",
      "Current use: Newtons are the standard unit of force used globally in physics and engineering.",
    ],
  },
];

const KgToNewtonsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Kilograms to Newtons"
      fromUnit="Kilograms (kg)"
      toUnit="Newtons (N)"
      convertFunction={(val) => val * 9.80665} // 1 kg ≈ 9.80665 N (standard gravity)
      definitions={definitions}
      tableComponent={<ConversionTable />} // Use a ConversionTable adapted for Kg to N
      conversionExample={
        <>
          1 kilogram ≈ 9.80665 newtons (under standard gravity)
          <br />
          <strong>Example:</strong> convert 10 kilograms to newtons:
          <br />
          10 × 9.80665 = 98.0665 newtons
        </>
      }
      reversePath="/Converters/Force/NewtonsToKg"
    />
  );
};

export default KgToNewtonsPage;

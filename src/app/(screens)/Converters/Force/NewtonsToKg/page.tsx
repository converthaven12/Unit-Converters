"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adapt this table for N to Kg

const definitions = [
  {
    heading: "Newton (N)",
    content: [
      "Definition: A newton is the SI unit of force, defined as the force required to accelerate one kilogram of mass by one meter per second squared.",
      "History/origin: Named after Sir Isaac Newton for his work in classical mechanics.",
      "Current use: Newtons are the standard unit of force used globally in physics and engineering.",
    ],
  },
  {
    heading: "Kilogram (kg)",
    content: [
      "Definition: A kilogram is the SI base unit of mass, defined as the mass of the International Prototype Kilogram.",
      "History/origin: Originally defined as the mass of one liter of water, now defined by physical constants.",
      "Current use: Kilograms are widely used worldwide as the standard unit of mass in scientific and everyday measurements.",
    ],
  },
];

const NewtonsToKgPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Newtons to Kilograms"
      fromUnit="Newtons (N)"
      toUnit="Kilograms (kg)"
      convertFunction={(val) => val / 9.80665} // 1 N ≈ 1/9.80665 kg
      definitions={definitions}
      tableComponent={<ConversionTable />} // Use a ConversionTable adapted for N to Kg
      conversionExample={
        <>
          1 newton ≈ 0.10197 kilograms (under standard gravity)
          <br />
          <strong>Example:</strong> convert 98.0665 newtons to kilograms:
          <br />
          98.0665 ÷ 9.80665 = 10 kilograms
        </>
      }
      reversePath="/Converters/Force/KgToNewtons"
    />
  );
};

export default NewtonsToKgPage;

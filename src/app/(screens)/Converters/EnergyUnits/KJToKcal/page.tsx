"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for KJ to Kcal

const definitions = [
  {
    heading: "Kilojoule (kJ)",
    content: [
      "Definition: A kilojoule is a unit of energy in the International System of Units (SI), equivalent to 1,000 joules.",
      "History/origin: The joule is named after James Prescott Joule and has been widely adopted as the standard unit of energy.",
      "Current use: Kilojoules are used worldwide in science, engineering, and nutrition to measure energy.",
    ],
  },
  {
    heading: "Kilocalorie (kcal)",
    content: [
      "Definition: A kilocalorie, often just called 'calorie' in dietary contexts, is the amount of energy required to raise the temperature of one kilogram of water by one degree Celsius.",
      "History/origin: The calorie was originally defined in the 19th century as a unit of heat energy.",
      "Current use: Kilocalories are commonly used to express the energy content of foods in many countries, especially in nutrition and dietetics.",
    ],
  },
];

const KJToKcalPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Kilojoules to Kilocalories"
      fromUnit="Kilojoules (kJ)"
      toUnit="Kilocalories (kcal)"
      convertFunction={(val) => val / 4.184} // 1 kcal = 4.184 kJ, so kJ to kcal = kJ / 4.184
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 kilocalorie = 4.184 kilojoules
          <br />
          1 kilojoule = 0.239006 kilocalories
          <br />
          <strong>Example:</strong> convert 100 kilojoules to kilocalories:
          <br />
          100 ÷ 4.184 ≈ 23.9 kilocalories
        </>
      }
      reversePath="/Converters/EnergyUnits/KcalToKJ"
    />
  );
};

export default KJToKcalPage;

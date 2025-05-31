"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for Kcal to Cal

const definitions = [
  {
    heading: "Kilocalorie (kcal)",
    content: [
      "Definition: A kilocalorie, often just called 'calorie' in dietary contexts, is the amount of energy required to raise the temperature of one kilogram of water by one degree Celsius.",
      "History/origin: The calorie was originally defined in the 19th century as a unit of heat energy.",
      "Current use: Kilocalories are commonly used to express the energy content of foods in many countries, especially in nutrition and dietetics.",
    ],
  },
  {
    heading: "Calorie (cal)",
    content: [
      "Definition: A calorie is a unit of energy, defined as the amount of energy needed to raise the temperature of one gram of water by one degree Celsius.",
      "History/origin: The calorie was first defined in the 19th century and is often used in chemistry and physics.",
      "Current use: Calories are used to measure small amounts of energy, often in scientific contexts and older nutrition references.",
    ],
  },
];

const KcalToCalPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Kilocalories to Calories"
      fromUnit="Kilocalories (kcal)"
      toUnit="Calories (cal)"
      convertFunction={(val) => val * 1000} // 1 kcal = 1000 cal
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 kilocalorie = 1000 calories
          <br />
          1 calorie = 0.001 kilocalories
          <br />
          <strong>Example:</strong> convert 5 kilocalories to calories:
          <br />5 × 1000 = 5000 calories
        </>
      }
      reversePath="/Converters/EnergyUnits/CalToKcal"
    />
  );
};

export default KcalToCalPage;

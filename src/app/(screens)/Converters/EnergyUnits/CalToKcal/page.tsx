"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for Cal to Kcal

const definitions = [
  {
    heading: "Calorie (cal)",
    content: [
      "Definition: A calorie is a unit of energy, defined as the amount of energy needed to raise the temperature of one gram of water by one degree Celsius.",
      "History/origin: The calorie was first defined in the 19th century and is often used in chemistry and physics.",
      "Current use: Calories are used to measure small amounts of energy, often in scientific contexts and older nutrition references.",
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

const CalToKcalPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Calories to Kilocalories"
      fromUnit="Calories (cal)"
      toUnit="Kilocalories (kcal)"
      convertFunction={(val) => val / 1000} // 1 cal = 0.001 kcal
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 calorie = 0.001 kilocalories
          <br />
          1 kilocalorie = 1000 calories
          <br />
          <strong>Example:</strong> convert 5000 calories to kilocalories:
          <br />
          5000 ÷ 1000 = 5 kilocalories
        </>
      }
      reversePath="/Converters/EnergyUnits/KcalToCal"
    />
  );
};

export default CalToKcalPage;

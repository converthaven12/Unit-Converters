"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for Cal to J

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
    heading: "Joule (J)",
    content: [
      "Definition: A joule is the SI unit of energy, defined as the amount of energy transferred when applying a force of one newton over a distance of one meter.",
      "History/origin: Named after James Prescott Joule, it has been adopted as the standard unit of energy worldwide.",
      "Current use: Joules are widely used in physics, engineering, and many scientific disciplines to measure energy.",
    ],
  },
];

const CalToJPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Calories to Joules"
      fromUnit="Calories (cal)"
      toUnit="Joules (J)"
      convertFunction={(val) => val * 4.184} // 1 cal = 4.184 J
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 calorie = 4.184 joules
          <br />
          1 joule = 0.239 calories
          <br />
          <strong>Example:</strong> convert 500 calories to joules:
          <br />
          500 × 4.184 = 2092 joules
        </>
      }
      reversePath="/Converters/EnergyUnits/JToCal"
    />
  );
};

export default CalToJPage;

"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for J to Cal

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
    heading: "Calorie (cal)",
    content: [
      "Definition: A calorie is a unit of energy, defined as the amount of energy needed to raise the temperature of one gram of water by one degree Celsius.",
      "History/origin: The calorie was first defined in the 19th century and is often used in chemistry and physics.",
      "Current use: Calories are used to measure small amounts of energy, often in scientific contexts and older nutrition references.",
    ],
  },
];

const JToCalPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Joules to Calories"
      fromUnit="Joules (J)"
      toUnit="Calories (cal)"
      convertFunction={(val) => val / 4.184} // 1 J = 0.239 cal
      definitions={definitions}
      tableComponent={<ConversionTable />} // Use a ConversionTable adapted for J to Cal
      conversionExample={
        <>
          1 joule = 0.239 calories
          <br />
          1 calorie = 4.184 joules
          <br />
          <strong>Example:</strong> convert 2092 joules to calories:
          <br />
          2092 ÷ 4.184 = 500 calories
        </>
      }
      reversePath="/Converters/EnergyUnits/CalToJ"
    />
  );
};

export default JToCalPage;

"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Create this table for mph to knots

const definitions = [
  {
    heading: "Miles per Hour (mph)",
    content: [
      "Definition: Miles per hour is a unit of speed expressing the number of miles traveled in one hour.",
      "History/origin: Common in the Imperial system, especially in the United States and the United Kingdom.",
      "Current use: mph is standard for speed limits and vehicle speed in several countries.",
    ],
  },
  {
    heading: "Knot (kn)",
    content: [
      "Definition: A knot is a unit of speed equal to one nautical mile per hour.",
      "History/origin: The term originated from the method of measuring a ship’s speed using a rope with knots tied at regular intervals.",
      "Current use: Knots are used worldwide in aviation, maritime, and weather forecasting for expressing speed.",
    ],
  },
];

const MilesPerHourToKnotPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Miles per Hour to Knots"
      fromUnit="Miles per Hour (mph)"
      toUnit="Knots (kn)"
      convertFunction={(val) => val / 1.15078} // 1 mph ≈ 0.868976 knots
      definitions={definitions}
      tableComponent={<ConversionTable />} // Create a conversion table for mph to knots
      conversionExample={
        <>
          1 mile per hour ≈ 0.868976 knots
          <br />
          <strong>Example:</strong> convert 23.0156 mph to knots:
          <br />
          23.0156 ÷ 1.15078 = 20 knots
        </>
      }
      reversePath="/Converters/SpeedUnits/KnotToMilesPerHour"
    />
  );
};

export default MilesPerHourToKnotPage;

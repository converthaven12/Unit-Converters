"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Create this table for knots to mph

const definitions = [
  {
    heading: "Knot (kn)",
    content: [
      "Definition: A knot is a unit of speed equal to one nautical mile per hour.",
      "History/origin: The term originated from the method of measuring a ship’s speed using a rope with knots tied at regular intervals.",
      "Current use: Knots are used worldwide in aviation, maritime, and weather forecasting for expressing speed.",
    ],
  },
  {
    heading: "Miles per Hour (mph)",
    content: [
      "Definition: Miles per hour is a unit of speed expressing the number of miles traveled in one hour.",
      "History/origin: Common in the Imperial system, especially in the United States and the United Kingdom.",
      "Current use: mph is standard for speed limits and vehicle speed in several countries.",
    ],
  },
];

const KnotToMilesPerHourPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Knots to Miles per Hour"
      fromUnit="Knots (kn)"
      toUnit="Miles per Hour (mph)"
      convertFunction={(val) => val * 1.15078} // 1 knot ≈ 1.15078 mph
      definitions={definitions}
      tableComponent={<ConversionTable />} // Create a conversion table for knots to mph
      conversionExample={
        <>
          1 knot ≈ 1.15078 miles per hour
          <br />
          <strong>Example:</strong> convert 20 knots to mph:
          <br />
          20 × 1.15078 = 23.0156 mph
        </>
      }
      reversePath="/Converters/SpeedUnits/MphToKnot"
    />
  );
};

export default KnotToMilesPerHourPage;

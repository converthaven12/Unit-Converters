"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Create this table for m/s to mph

const definitions = [
  {
    heading: "Meters per Second (m/s)",
    content: [
      "Definition: Meters per second is the SI unit of speed representing the distance in meters traveled in one second.",
      "History/origin: Derived from the base SI units of meter (length) and second (time).",
      "Current use: Commonly used in physics, meteorology, and various engineering fields to measure velocity.",
    ],
  },
  {
    heading: "Miles per Hour (mph)",
    content: [
      "Definition: Miles per hour is a unit of speed expressing the number of miles traveled in one hour.",
      "History/origin: Used primarily in the Imperial system, especially in the United States and United Kingdom.",
      "Current use: Standard for speed limits and vehicle speeds in countries using the Imperial system.",
    ],
  },
];

const MetersPerSecondToMilesPerHourPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Meters per Second to Miles per Hour"
      fromUnit="Meters per Second (m/s)"
      toUnit="Miles per Hour (mph)"
      convertFunction={(val) => val * 2.23694} // 1 m/s ≈ 2.23694 mph
      definitions={definitions}
      tableComponent={<ConversionTable />} // Implement with m/s to mph data
      conversionExample={
        <>
          1 meter per second ≈ 2.23694 miles per hour
          <br />
          <strong>Example:</strong> convert 10 m/s to mph:
          <br />
          10 × 2.23694 = 22.3694 mph
        </>
      }
      reversePath="/Converters/SpeedUnits/MilesPerHourToMetersPerSecond"
    />
  );
};

export default MetersPerSecondToMilesPerHourPage;

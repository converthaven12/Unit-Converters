"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adapt this table for mph to m/s

const definitions = [
  {
    heading: "Miles per Hour (mph)",
    content: [
      "Definition: Miles per hour is a unit of speed expressing the number of miles traveled in one hour.",
      "History/origin: Used primarily in the Imperial system, especially in the United States and United Kingdom.",
      "Current use: Standard for speed limits and vehicle speeds in countries using the Imperial system.",
    ],
  },
  {
    heading: "Meters per Second (m/s)",
    content: [
      "Definition: Meters per second is the SI unit of speed representing the distance in meters traveled in one second.",
      "History/origin: Derived from the base SI units of meter (length) and second (time).",
      "Current use: Commonly used in physics, meteorology, and various engineering fields to measure velocity.",
    ],
  },
];

const MilesPerHourToMetersPerSecondPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Miles per Hour to Meters per Second"
      fromUnit="Miles per Hour (mph)"
      toUnit="Meters per Second (m/s)"
      convertFunction={(val) => val / 2.23694} // 1 mph ≈ 0.44704 m/s (inverse of 2.23694)
      definitions={definitions}
      tableComponent={<ConversionTable />} // Use a table showing mph to m/s
      conversionExample={
        <>
          1 mile per hour ≈ 0.44704 meters per second
          <br />
          <strong>Example:</strong> convert 22.3694 mph to m/s:
          <br />
          22.3694 ÷ 2.23694 = 10 m/s
        </>
      }
      reversePath="/Converters/SpeedUnits/MetersPerSecondToMilesPerHour"
    />
  );
};

export default MilesPerHourToMetersPerSecondPage;

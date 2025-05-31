"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // You will create this table for m/s to kph

const definitions = [
  {
    heading: "Meters per Second (m/s)",
    content: [
      "Definition: Meters per second is a unit of speed expressing the number of meters traveled in one second.",
      "History/origin: Part of the SI system, widely used in scientific and engineering fields worldwide.",
      "Current use: Commonly used in physics, engineering, and meteorology.",
    ],
  },
  {
    heading: "Kilometers per Hour (kph)",
    content: [
      "Definition: Kilometers per hour is a unit of speed expressing the number of kilometers traveled in one hour.",
      "History/origin: Commonly used in countries adopting the metric system.",
      "Current use: Standard unit for speed limits and vehicle speed in many countries.",
    ],
  },
];

const MetersPerSecondToKphPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Meters per Second to Kilometers per Hour"
      fromUnit="Meters per Second (m/s)"
      toUnit="Kilometers per Hour (kph)"
      convertFunction={(val) => val * 3.6} // 1 m/s = 3.6 kph
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for m/s to kph
      conversionExample={
        <>
          1 meter per second = 3.6 kilometers per hour
          <br />
          <strong>Example:</strong> convert 10 m/s to kph:
          <br />
          10 × 3.6 = 36 kph
        </>
      }
      reversePath="/Converters/SpeedUnits/KphToMetersPerSecond"
    />
  );
};

export default MetersPerSecondToKphPage;

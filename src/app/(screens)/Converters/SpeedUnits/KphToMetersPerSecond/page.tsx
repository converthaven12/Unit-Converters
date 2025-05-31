"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table for kph to m/s

const definitions = [
  {
    heading: "Kilometers per Hour (kph)",
    content: [
      "Definition: Kilometers per hour is a unit of speed expressing the number of kilometers traveled in one hour.",
      "History/origin: Commonly used in countries adopting the metric system.",
      "Current use: Standard unit for speed limits and vehicle speed in many countries.",
    ],
  },
  {
    heading: "Meters per Second (m/s)",
    content: [
      "Definition: Meters per second is a unit of speed expressing the number of meters traveled in one second.",
      "History/origin: Part of the SI system, widely used in scientific and engineering fields worldwide.",
      "Current use: Commonly used in physics, engineering, and meteorology.",
    ],
  },
];

const KphToMetersPerSecondPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Kilometers per Hour to Meters per Second"
      fromUnit="Kilometers per Hour (kph)"
      toUnit="Meters per Second (m/s)"
      convertFunction={(val) => val / 3.6} // 1 kph ≈ 0.27778 m/s
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for kph to m/s
      conversionExample={
        <>
          1 kilometer per hour ≈ 0.27778 meters per second
          <br />
          <strong>Example:</strong> convert 36 kph to m/s:
          <br />
          36 ÷ 3.6 = 10 m/s
        </>
      }
      reversePath="/Converters/SpeedUnits/MetersPerSecondToKph"
    />
  );
};

export default KphToMetersPerSecondPage;

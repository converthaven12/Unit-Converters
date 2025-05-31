"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // You will create this table for mph to ft/s

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
    heading: "Feet per Second (ft/s)",
    content: [
      "Definition: Feet per second is a unit of speed expressing the number of feet traveled in one second.",
      "History/origin: Commonly used in the United States, especially in physics and engineering contexts.",
      "Current use: ft/s is often used in ballistics, aviation, and some engineering fields.",
    ],
  },
];

const MphToFeetPerSecondPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Miles per Hour to Feet per Second"
      fromUnit="Miles per Hour (mph)"
      toUnit="Feet per Second (ft/s)"
      convertFunction={(val) => val / 0.681818} // 1 mph ≈ 1.46667 ft/s
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for mph to ft/s
      conversionExample={
        <>
          1 mile per hour ≈ 1.46667 feet per second
          <br />
          <strong>Example:</strong> convert 20.4545 mph to ft/s:
          <br />
          20.4545 ÷ 0.681818 = 30 ft/s
        </>
      }
      reversePath="/Converters/SpeedUnits/FeetPerSecondToMph"
    />
  );
};

export default MphToFeetPerSecondPage;

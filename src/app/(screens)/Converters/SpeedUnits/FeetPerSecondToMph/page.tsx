"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // You need to create this table for ft/s to mph

const definitions = [
  {
    heading: "Feet per Second (ft/s)",
    content: [
      "Definition: Feet per second is a unit of speed expressing the number of feet traveled in one second.",
      "History/origin: Commonly used in the United States, especially in physics and engineering contexts.",
      "Current use: ft/s is often used in ballistics, aviation, and some engineering fields.",
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

const FeetPerSecondToMphPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Feet per Second to Miles per Hour"
      fromUnit="Feet per Second (ft/s)"
      toUnit="Miles per Hour (mph)"
      convertFunction={(val) => val * 0.681818} // 1 ft/s ≈ 0.681818 mph
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for ft/s to mph
      conversionExample={
        <>
          1 foot per second ≈ 0.681818 miles per hour
          <br />
          <strong>Example:</strong> convert 30 ft/s to mph:
          <br />
          30 × 0.681818 = 20.4545 mph
        </>
      }
      reversePath="/Converters/SpeedUnits/MphToFeetPerSecond"
    />
  );
};

export default FeetPerSecondToMphPage;

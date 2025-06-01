"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Days to Seconds

const definitions = [
  {
    heading: "Day",
    content: [
      "Definition: A day is a unit of time representing a full rotation of the Earth on its axis, typically 24 hours or 86,400 seconds.",
      "History/origin: Based on the natural cycle of day and night; widely adopted in ancient calendars.",
      "Current use: Used universally to divide time and schedule activities.",
    ],
  },
  {
    heading: "Second",
    content: [
      "Definition: A second is the base unit of time in the International System of Units (SI), equal to 1/60 of a minute.",
      "History/origin: Originally defined as a fraction of the Earth's rotation, now based on the vibrations of cesium atoms.",
      "Current use: Used universally as the fundamental time measurement unit in science, engineering, and daily life.",
    ],
  },
];

const DaysToSecondsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Days to Seconds"
      fromUnit="Days"
      toUnit="Seconds"
      convertFunction={(val) => val * 86400} // 1 day = 86,400 seconds
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Days to Seconds
      conversionExample={
        <>
          Formula: Seconds = Days × 86,400
          <br />
          <strong>Example:</strong> convert 2 days to seconds:
          <br />2 × 86,400 = 172,800 Seconds
        </>
      }
      reversePath="/Converters/TimeUnits/SecondsToDays"
    />
  );
};

export default DaysToSecondsPage;

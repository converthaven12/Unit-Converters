"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Seconds to Days

const definitions = [
  {
    heading: "Second",
    content: [
      "Definition: A second is the base unit of time in the International System of Units (SI), equal to 1/60 of a minute.",
      "History/origin: Originally defined as a fraction of the Earth's rotation, now based on the vibrations of cesium atoms.",
      "Current use: Used universally as the fundamental time measurement unit in science, engineering, and daily life.",
    ],
  },
  {
    heading: "Day",
    content: [
      "Definition: A day is a unit of time representing a full rotation of the Earth on its axis, typically 24 hours or 86,400 seconds.",
      "History/origin: Based on the natural cycle of day and night; widely adopted in ancient calendars.",
      "Current use: Used universally to divide time and schedule activities.",
    ],
  },
];

const SecondsToDaysPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Seconds to Days"
      fromUnit="Seconds"
      toUnit="Days"
      convertFunction={(val) => val / 86400} // 1 day = 86,400 seconds
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Seconds to Days
      conversionExample={
        <>
          Formula: Days = Seconds ÷ 86,400
          <br />
          <strong>Example:</strong> convert 172,800 seconds to days:
          <br />
          172,800 ÷ 86,400 = 2 Days
        </>
      }
      reversePath="/Converters/Time/DaysToSeconds"
    />
  );
};

export default SecondsToDaysPage;

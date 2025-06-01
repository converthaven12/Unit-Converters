"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Hours to Days

const definitions = [
  {
    heading: "Hour",
    content: [
      "Definition: An hour is a unit of time equal to 60 minutes or 3600 seconds.",
      "History/origin: Originated from ancient civilizations dividing the day into 24 parts.",
      "Current use: Commonly used in daily life, scheduling, and scientific contexts.",
    ],
  },
  {
    heading: "Day",
    content: [
      "Definition: A day is a unit of time representing a full rotation of the Earth on its axis, typically 24 hours.",
      "History/origin: Based on the natural cycle of day and night; widely adopted in ancient calendars.",
      "Current use: Used universally to divide time and schedule activities.",
    ],
  },
];

const HoursToDaysPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Hours to Days"
      fromUnit="Hours"
      toUnit="Days"
      convertFunction={(val) => val / 24} // 1 day = 24 hours
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Hours to Days
      conversionExample={
        <>
          Formula: Days = Hours ÷ 24
          <br />
          <strong>Example:</strong> convert 48 hours to days:
          <br />
          48 ÷ 24 = 2 Days
        </>
      }
      reversePath="/Converters/TimeUnits/DaysToHours"
    />
  );
};

export default HoursToDaysPage;

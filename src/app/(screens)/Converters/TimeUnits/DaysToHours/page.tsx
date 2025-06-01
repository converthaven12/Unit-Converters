"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Days to Hours

const definitions = [
  {
    heading: "Day",
    content: [
      "Definition: A day is a unit of time representing a full rotation of the Earth on its axis, typically 24 hours.",
      "History/origin: Based on the natural cycle of day and night; widely adopted in ancient calendars.",
      "Current use: Used universally to divide time and schedule activities.",
    ],
  },
  {
    heading: "Hour",
    content: [
      "Definition: An hour is a unit of time equal to 60 minutes or 3600 seconds.",
      "History/origin: Originated from ancient civilizations dividing the day into 24 parts.",
      "Current use: Commonly used in daily life, scheduling, and scientific contexts.",
    ],
  },
];

const DaysToHoursPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Days to Hours"
      fromUnit="Days"
      toUnit="Hours"
      convertFunction={(val) => val * 24} // 1 day = 24 hours
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Days to Hours
      conversionExample={
        <>
          Formula: Hours = Days × 24
          <br />
          <strong>Example:</strong> convert 2 days to hours:
          <br />2 × 24 = 48 Hours
        </>
      }
      reversePath="/Converters/TimeUnits/HoursToDays"
    />
  );
};

export default DaysToHoursPage;

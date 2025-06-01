"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Days to Minutes

const definitions = [
  {
    heading: "Day",
    content: [
      "Definition: A day is a unit of time representing a full rotation of the Earth on its axis, typically 24 hours or 1,440 minutes.",
      "History/origin: Based on the natural cycle of day and night; widely adopted in ancient calendars.",
      "Current use: Used universally to divide time and schedule activities.",
    ],
  },
  {
    heading: "Minute",
    content: [
      "Definition: A minute is a unit of time equal to 60 seconds.",
      "History/origin: Derived from the ancient sexagesimal system, where an hour is divided into 60 minutes.",
      "Current use: Used worldwide as a standard unit of time measurement.",
    ],
  },
];

const DaysToMinutesPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Days to Minutes"
      fromUnit="Days"
      toUnit="Minutes"
      convertFunction={(val) => val * 1440} // 1 day = 1,440 minutes (24 * 60)
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Days to Minutes
      conversionExample={
        <>
          Formula: Minutes = Days × 1,440
          <br />
          <strong>Example:</strong> convert 2 days to minutes:
          <br />2 × 1,440 = 2,880 Minutes
        </>
      }
      reversePath="/Converters/TimeUnits/MinutesToDays"
    />
  );
};

export default DaysToMinutesPage;

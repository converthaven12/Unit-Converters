"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Minutes to Days

const definitions = [
  {
    heading: "Minute",
    content: [
      "Definition: A minute is a unit of time equal to 60 seconds.",
      "History/origin: Derived from the ancient sexagesimal system, where an hour is divided into 60 minutes.",
      "Current use: Used worldwide as a standard unit of time measurement.",
    ],
  },
  {
    heading: "Day",
    content: [
      "Definition: A day is a unit of time representing a full rotation of the Earth on its axis, typically 24 hours or 1,440 minutes.",
      "History/origin: Based on the natural cycle of day and night; widely adopted in ancient calendars.",
      "Current use: Used universally to divide time and schedule activities.",
    ],
  },
];

const MinutesToDaysPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Minutes to Days"
      fromUnit="Minutes"
      toUnit="Days"
      convertFunction={(val) => val / 1440} // 1 day = 1,440 minutes (24 * 60)
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Minutes to Days
      conversionExample={
        <>
          Formula: Days = Minutes ÷ 1,440
          <br />
          <strong>Example:</strong> convert 2,880 minutes to days:
          <br />
          2,880 ÷ 1,440 = 2 Days
        </>
      }
      reversePath="/Converters/Time/DaysToMinutes"
    />
  );
};

export default MinutesToDaysPage;

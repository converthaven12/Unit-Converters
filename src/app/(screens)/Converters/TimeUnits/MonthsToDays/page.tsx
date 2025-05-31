"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Months to Days

const definitions = [
  {
    heading: "Month",
    content: [
      "Definition: A month is a unit of time, approximately 30 or 31 days, representing roughly one cycle of the Moon's phases.",
      "History/origin: Originated from lunar cycles; modern calendars define months with varying lengths.",
      "Current use: Used worldwide to divide years for calendars, financial periods, and scheduling.",
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

const MonthsToDaysPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Months to Days"
      fromUnit="Months"
      toUnit="Days"
      convertFunction={(val) => val * 30} // Approximate: 1 month ≈ 30 days
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Months to Days
      conversionExample={
        <>
          Formula: Days = Months × 30
          <br />
          <strong>Example:</strong> convert 2 months to days:
          <br />2 × 30 = 60 Days
        </>
      }
      reversePath="/Converters/Time/DaysToMonths"
    />
  );
};

export default MonthsToDaysPage;

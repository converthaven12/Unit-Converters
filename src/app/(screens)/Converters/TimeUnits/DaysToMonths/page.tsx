"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Days to Months

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
    heading: "Month",
    content: [
      "Definition: A month is a unit of time, approximately 30 or 31 days, representing roughly one cycle of the Moon's phases.",
      "History/origin: Originated from lunar cycles; modern calendars define months with varying lengths.",
      "Current use: Used worldwide to divide years for calendars, financial periods, and scheduling.",
    ],
  },
];

const DaysToMonthsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Days to Months"
      fromUnit="Days"
      toUnit="Months"
      convertFunction={(val) => val / 30} // Approximate: 1 month ≈ 30 days
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Days to Months
      conversionExample={
        <>
          Formula: Months = Days ÷ 30
          <br />
          <strong>Example:</strong> convert 60 days to months:
          <br />
          60 ÷ 30 = 2 Months
        </>
      }
      reversePath="/Converters/TimeUnits/MonthsToDays"
    />
  );
};

export default DaysToMonthsPage;

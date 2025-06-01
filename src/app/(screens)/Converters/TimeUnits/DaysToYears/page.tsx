"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Days to Years

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
    heading: "Year",
    content: [
      "Definition: A year is a unit of time representing the period it takes for the Earth to complete one orbit around the Sun, approximately 365.25 days.",
      "History/origin: Originated from astronomical observations of the Earth's orbit; forms the basis of the Gregorian calendar.",
      "Current use: Used worldwide for calendar years, age measurement, and long-term planning.",
    ],
  },
];

const DaysToYearsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Days to Years"
      fromUnit="Days"
      toUnit="Years"
      convertFunction={(val) => val / 365.25} // Approximate: 1 year ≈ 365.25 days (accounting for leap years)
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Days to Years
      conversionExample={
        <>
          Formula: Years = Days ÷ 365.25
          <br />
          <strong>Example:</strong> convert 730.5 days to years:
          <br />
          730.5 ÷ 365.25 = 2 Years
        </>
      }
      reversePath="/Converters/TimeUnits/YearsToDays"
    />
  );
};

export default DaysToYearsPage;

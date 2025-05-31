"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Years to Days

const definitions = [
  {
    heading: "Year",
    content: [
      "Definition: A year is a unit of time representing the period it takes for the Earth to complete one orbit around the Sun, approximately 365.25 days.",
      "History/origin: Originated from astronomical observations of the Earth's orbit; forms the basis of the Gregorian calendar.",
      "Current use: Used worldwide for calendar years, age measurement, and long-term planning.",
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

const YearsToDaysPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Years to Days"
      fromUnit="Years"
      toUnit="Days"
      convertFunction={(val) => val * 365.25} // Approximate: 1 year ≈ 365.25 days (accounting for leap years)
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Years to Days
      conversionExample={
        <>
          Formula: Days = Years × 365.25
          <br />
          <strong>Example:</strong> convert 2 years to days:
          <br />2 × 365.25 = 730.5 Days
        </>
      }
      reversePath="/Converters/Time/DaysToYears"
    />
  );
};

export default YearsToDaysPage;

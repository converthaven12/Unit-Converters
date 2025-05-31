"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Hours to Minutes

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
    heading: "Minute",
    content: [
      "Definition: A minute is a unit of time equal to 60 seconds.",
      "History/origin: Derived from the ancient sexagesimal system, where an hour is divided into 60 minutes.",
      "Current use: Used worldwide as a standard unit of time measurement.",
    ],
  },
];

const HoursToMinutesPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Hours to Minutes"
      fromUnit="Hours"
      toUnit="Minutes"
      convertFunction={(val) => val * 60} // 1 hour = 60 minutes
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Hours to Minutes
      conversionExample={
        <>
          Formula: Minutes = Hours × 60
          <br />
          <strong>Example:</strong> convert 2 hours to minutes:
          <br />2 × 60 = 120 Minutes
        </>
      }
      reversePath="/Converters/Time/MinutesToHours"
    />
  );
};

export default HoursToMinutesPage;

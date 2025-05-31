"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Minutes to Hours

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
    heading: "Hour",
    content: [
      "Definition: An hour is a unit of time equal to 60 minutes or 3600 seconds.",
      "History/origin: Originated from ancient civilizations dividing the day into 24 parts.",
      "Current use: Commonly used in daily life, scheduling, and scientific contexts.",
    ],
  },
];

const MinutesToHoursPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Minutes to Hours"
      fromUnit="Minutes"
      toUnit="Hours"
      convertFunction={(val) => val / 60} // 1 hour = 60 minutes
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Minutes to Hours
      conversionExample={
        <>
          Formula: Hours = Minutes ÷ 60
          <br />
          <strong>Example:</strong> convert 120 minutes to hours:
          <br />
          120 ÷ 60 = 2 Hours
        </>
      }
      reversePath="/Converters/Time/HoursToMinutes"
    />
  );
};

export default MinutesToHoursPage;

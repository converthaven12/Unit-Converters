"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Seconds to Minutes

const definitions = [
  {
    heading: "Second",
    content: [
      "Definition: A second is the base unit of time in the International System of Units (SI), equal to 1/60 of a minute.",
      "History/origin: Originally defined as a fraction of the Earth's rotation, now based on the vibrations of cesium atoms.",
      "Current use: Used universally as the fundamental time measurement unit in science, engineering, and daily life.",
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

const SecondsToMinutesPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Seconds to Minutes"
      fromUnit="Seconds"
      toUnit="Minutes"
      convertFunction={(val) => val / 60} // 1 minute = 60 seconds
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Seconds to Minutes
      conversionExample={
        <>
          Formula: Minutes = Seconds ÷ 60
          <br />
          <strong>Example:</strong> convert 120 seconds to minutes:
          <br />
          120 ÷ 60 = 2 Minutes
        </>
      }
      reversePath="/Converters/TimeUnits/MinutesToSeconds"
    />
  );
};

export default SecondsToMinutesPage;

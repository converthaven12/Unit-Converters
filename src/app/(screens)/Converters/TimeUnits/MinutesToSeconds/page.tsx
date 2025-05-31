"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Minutes to Seconds

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
    heading: "Second",
    content: [
      "Definition: A second is the base unit of time in the International System of Units (SI), equal to 1/60 of a minute.",
      "History/origin: Originally defined as a fraction of the Earth's rotation, now based on the vibrations of cesium atoms.",
      "Current use: Used universally as the fundamental time measurement unit in science, engineering, and daily life.",
    ],
  },
];

const MinutesToSecondsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Minutes to Seconds"
      fromUnit="Minutes"
      toUnit="Seconds"
      convertFunction={(val) => val * 60} // 1 minute = 60 seconds
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Minutes to Seconds
      conversionExample={
        <>
          Formula: Seconds = Minutes × 60
          <br />
          <strong>Example:</strong> convert 2 minutes to seconds:
          <br />2 × 60 = 120 Seconds
        </>
      }
      reversePath="/Converters/Time/SecondsToMinutes"
    />
  );
};

export default MinutesToSecondsPage;

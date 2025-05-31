"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Seconds to Milliseconds

const definitions = [
  {
    heading: "Second",
    content: [
      "Definition: A second is the base unit of time in the International System of Units (SI).",
      "History/origin: Defined by vibrations of cesium atoms, replacing earlier astronomical definitions.",
      "Current use: The fundamental unit of time used universally in science, technology, and daily life.",
    ],
  },
  {
    heading: "Millisecond",
    content: [
      "Definition: A millisecond is a unit of time equal to one-thousandth (1/1000) of a second.",
      "History/origin: Derived from the metric system, where 'milli' means one-thousandth.",
      "Current use: Used in science, computing, and time measurements requiring high precision.",
    ],
  },
];

const SecondsToMillisecondsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Seconds to Milliseconds"
      fromUnit="Seconds"
      toUnit="Milliseconds"
      convertFunction={(val) => val * 1000} // 1 second = 1000 milliseconds
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Seconds to Milliseconds
      conversionExample={
        <>
          Formula: Milliseconds = Seconds × 1000
          <br />
          <strong>Example:</strong> convert 2 seconds to milliseconds:
          <br />2 × 1000 = 2000 Milliseconds
        </>
      }
      reversePath="/Converters/Time/MillisecondsToSeconds"
    />
  );
};

export default SecondsToMillisecondsPage;

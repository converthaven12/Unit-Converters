"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable";

const definitions = [
  {
    heading: "Millimeter",
    content: [
      "Definition: A millimeter is a unit of length in the metric system equal to one-thousandth of a meter (0.001 m).",
      "History/origin: The millimeter, like other metric units, was introduced as part of the metric system in the late 18th century and is used worldwide.",
      "Current use: Millimeters are commonly used for small measurements in engineering, manufacturing, and daily life, particularly in countries using the metric system.",
    ],
  },
  {
    heading: "Foot",
    content: [
      "Definition: A foot is a unit of length in the Imperial system, equal to 12 inches or 0.3048 meters.",
      "History/origin: The foot was historically based on the length of a human foot. It has been used since ancient civilizations and is now standardized in the Imperial and US customary systems.",
      "Current use: Feet are commonly used in the United States and a few other countries for measuring height, length, and distances, especially in construction and aviation.",
    ],
  },
];

const MillimetersToFeetPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Millimeters to Feet"
      fromUnit="Millimeters"
      toUnit="Feet"
      convertFunction={(val) => val / 304.8} // 1 foot = 304.8 mm
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 foot = 304.8 mm
          <br />
          1 mm = 1 / 304.8 ft ≈ 0.003281 ft
          <br />
          <strong>Example:</strong> convert 1500 mm to feet:
          <br />
          1500 mm ÷ 304.8 = 4.921 ft
        </>
      }
      reversePath="/Converters/LengthUnits/FeetToMillimeters"
    />
  );
};

export default MillimetersToFeetPage;

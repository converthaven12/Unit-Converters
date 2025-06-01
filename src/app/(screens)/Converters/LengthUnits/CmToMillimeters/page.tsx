"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable";

const definitions = [
  {
    heading: "Centimeter",
    content: [
      "Definition: A centimeter is a unit of length in the metric system equal to one hundredth of a meter, and it is based on the SI (International System of Units) base unit of length, the meter.",
      "History/origin: The centimeter, derived from the meter, was introduced in the metric system as a convenient unit for everyday measurements and is part of the centimeter-gram-second (CGS) system of units.",
      "Current use: The centimeter is widely used in everyday life for measuring small to medium lengths such as the height of a person or the dimensions of objects, and it is also commonly seen on rulers and measuring tapes.",
    ],
  },
  {
    heading: "Millimeter",
    content: [
      "Definition: A millimeter is a unit of length in the metric system equal to one thousandth of a meter and is based on the SI (International System of Units) base unit of length, the meter.",
      "History/origin: The millimeter, derived from the meter (originally defined in the 18th century as one ten-millionth of the distance from the equator to the North Pole), was introduced as a subdivision of the meter to provide precision for smaller measurements.",
      "Current use: The millimeter is commonly used for precise measurements in fields such as engineering, manufacturing, and medicine, and is also frequently used in everyday contexts such as measuring small objects or dimensions.",
    ],
  },
];

const GramToMilligramPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Centimeters to Millimeters"
      fromUnit="Centimeters"
      toUnit="Millimeters"
      convertFunction={(val) => val * 10}
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 cm = 10 mm
          <br />
          1 mm = 0.1 cm
          <br />
          <strong>Example:</strong> convert 7 cm to mm:
          <br />7 cm = 7 × 10 mm = 70 mm
        </>
      }
      reversePath="/Converters/LengthUnits/MillimetersToCm"
    />
  );
};

export default GramToMilligramPage;

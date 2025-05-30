"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for millimeters to meters

const definitions = [
  {
    heading: "Millimeter",
    content: [
      "Definition: A millimeter is a unit of length in the metric system, equal to one thousandth of a meter (0.001 meters).",
      "History/origin: The millimeter was introduced as part of the metric system established in France in the late 18th century.",
      "Current use: Millimeters are widely used around the world for precise measurements in engineering, manufacturing, and everyday use.",
    ],
  },
  {
    heading: "Meter",
    content: [
      "Definition: A meter is the base unit of length in the International System of Units (SI), defined as the distance light travels in vacuum in 1/299,792,458 seconds.",
      "History/origin: The meter was originally defined in 1793 during the French Revolution based on the Earth's meridian and later redefined using the speed of light.",
      "Current use: The meter is used worldwide as the standard unit of length for science, industry, and everyday measurements.",
    ],
  },
];

const MillimetersToMetersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Millimeters to Meters"
      fromUnit="Millimeters"
      toUnit="Meters"
      convertFunction={(val) => val / 1000} // 1 millimeter = 0.001 meters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 millimeter = 0.001 meters
          <br />
          1 meter = 1000 millimeters
          <br />
          <strong>Example:</strong> convert 2500 millimeters to meters:
          <br />
          2500 ÷ 1000 = 2.5 meters
        </>
      }
      reversePath="/Converters/LengthUnits/MetersToMillimeters"
    />
  );
};

export default MillimetersToMetersPage;

"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for meters to millimeters

const definitions = [
  {
    heading: "Meter",
    content: [
      "Definition: A meter is the base unit of length in the International System of Units (SI), defined as the distance light travels in vacuum in 1/299,792,458 seconds.",
      "History/origin: The meter was originally defined in 1793 during the French Revolution based on the Earth's meridian and later redefined using the speed of light.",
      "Current use: The meter is used worldwide as the standard unit of length for science, industry, and everyday measurements.",
    ],
  },
  {
    heading: "Millimeter",
    content: [
      "Definition: A millimeter is a unit of length in the metric system, equal to one thousandth of a meter (0.001 meters).",
      "History/origin: The millimeter was introduced as part of the metric system established in France in the late 18th century.",
      "Current use: Millimeters are widely used around the world for precise measurements in engineering, manufacturing, and everyday use.",
    ],
  },
];

const MetersToMillimetersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Meters to Millimeters"
      fromUnit="Meters"
      toUnit="Millimeters"
      convertFunction={(val) => val * 1000} // 1 meter = 1000 millimeters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 meter = 1000 millimeters
          <br />
          1 millimeter = 0.001 meters
          <br />
          <strong>Example:</strong> convert 2.5 meters to millimeters:
          <br />
          2.5 × 1000 = 2500 millimeters
        </>
      }
      reversePath="/Converters/LengthUnits/MillimetersToMeters"
    />
  );
};

export default MetersToMillimetersPage;

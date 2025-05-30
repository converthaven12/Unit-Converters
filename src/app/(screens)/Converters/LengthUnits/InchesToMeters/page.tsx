"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for inches to meters

const definitions = [
  {
    heading: "Inch",
    content: [
      "Definition: An inch is a unit of length in the Imperial system, equal to 1/12 of a foot or exactly 2.54 centimeters.",
      "History/origin: The inch originated from various human body measurements and has been standardized internationally based on the metric system.",
      "Current use: Inches are widely used in the United States, Canada, and the United Kingdom for measuring small lengths and heights, especially in construction and manufacturing.",
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

const InchesToMetersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Inches to Meters"
      fromUnit="Inches"
      toUnit="Meters"
      convertFunction={(val) => val * 0.0254} // 1 inch = 0.0254 meters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 inch = 0.0254 meters
          <br />
          1 meter = 1 / 0.0254 inches ≈ 39.3701 inches
          <br />
          <strong>Example:</strong> convert 100 inches to meters:
          <br />
          100 × 0.0254 = 2.54 meters
        </>
      }
      reversePath="/Converters/LengthUnits/MetersToInches"
    />
  );
};

export default InchesToMetersPage;

"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for meters to inches

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
    heading: "Inch",
    content: [
      "Definition: An inch is a unit of length in the Imperial system, equal to 1/12 of a foot or exactly 2.54 centimeters.",
      "History/origin: The inch originated from various human body measurements and has been standardized internationally based on the metric system.",
      "Current use: Inches are widely used in the United States, Canada, and the United Kingdom for measuring small lengths and heights, especially in construction and manufacturing.",
    ],
  },
];

const MetersToInchesPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Meters to Inches"
      fromUnit="Meters"
      toUnit="Inches"
      convertFunction={(val) => val / 0.0254} // 1 meter = approx. 39.3701 inches
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 meter = 39.3701 inches
          <br />
          1 inch = 0.0254 meters
          <br />
          <strong>Example:</strong> convert 2 meters to inches:
          <br />2 ÷ 0.0254 = 78.7402 inches
        </>
      }
      reversePath="/Converters/LengthUnits/InchesToMeters"
    />
  );
};

export default MetersToInchesPage;

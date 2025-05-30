"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for meters to kilometers

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
    heading: "Kilometer",
    content: [
      "Definition: A kilometer is a unit of length in the metric system, equal to 1,000 meters.",
      "History/origin: The kilometer was introduced as part of the metric system established in France in the late 18th century.",
      "Current use: Kilometers are widely used worldwide for measuring distances, especially in transportation and geography.",
    ],
  },
];

const MetersToKilometersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Meters to Kilometers"
      fromUnit="Meters"
      toUnit="Kilometers"
      convertFunction={(val) => val / 1000} // 1 meter = 0.001 kilometers
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 meter = 0.001 kilometers
          <br />
          1 kilometer = 1000 meters
          <br />
          <strong>Example:</strong> convert 3200 meters to kilometers:
          <br />
          3200 ÷ 1000 = 3.2 kilometers
        </>
      }
      reversePath="/Converters/LengthUnits/KilometersToMeters"
    />
  );
};

export default MetersToKilometersPage;

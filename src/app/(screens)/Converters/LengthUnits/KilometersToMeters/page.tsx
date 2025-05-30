"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for kilometers to meters

const definitions = [
  {
    heading: "Kilometer",
    content: [
      "Definition: A kilometer is a unit of length in the metric system, equal to 1,000 meters.",
      "History/origin: The kilometer was introduced as part of the metric system established in France in the late 18th century.",
      "Current use: Kilometers are widely used worldwide for measuring distances, especially in transportation and geography.",
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

const KilometersToMetersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Kilometers to Meters"
      fromUnit="Kilometers"
      toUnit="Meters"
      convertFunction={(val) => val * 1000} // 1 kilometer = 1000 meters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 kilometer = 1000 meters
          <br />
          1 meter = 0.001 kilometers
          <br />
          <strong>Example:</strong> convert 3.2 kilometers to meters:
          <br />
          3.2 × 1000 = 3200 meters
        </>
      }
      reversePath="/Converters/LengthUnits/MetersToKilometers"
    />
  );
};

export default KilometersToMetersPage;

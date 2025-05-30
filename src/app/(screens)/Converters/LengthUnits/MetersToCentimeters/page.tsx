"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable";

const definitions = [
  {
    heading: "Meter",
    content: [
      "Definition: A meter is the SI base unit of length, originally defined in 1793 as one ten-millionth of the distance from the equator to the North Pole along a meridian through Paris.",
      "History/origin: The meter was established to provide a universal standard for measuring length and is widely used around the world in science, industry, and everyday life.",
      "Current use: The meter is the fundamental unit of length in the metric system, used globally in scientific measurements, engineering, and everyday length measurements.",
    ],
  },
  {
    heading: "Centimeter",
    content: [
      "Definition: A centimeter is a unit of length in the metric system equal to one hundredth of a meter, and it is based on the SI (International System of Units) base unit of length, the meter.",
      "History/origin: The centimeter, derived from the meter, was introduced in the metric system as a convenient unit for everyday measurements and is part of the centimeter-gram-second (CGS) system of units.",
      "Current use: The centimeter is widely used in everyday life for measuring small to medium lengths such as the height of a person or the dimensions of objects, and it is also commonly seen on rulers and measuring tapes.",
    ],
  },
];

const MetersToCentimetersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Meters to Centimeters"
      fromUnit="Meters"
      toUnit="Centimeters"
      convertFunction={(val) => val * 100}
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 m = 100 cm
          <br />
          1 cm = 0.01 m
          <br />
          <strong>Example:</strong> convert 2.5 m to cm:
          <br />
          2.5 m = 2.5 × 100 cm = 250 cm
        </>
      }
      reversePath="/Converters/LengthUnits/CentimetersToMeters"
    />
  );
};

export default MetersToCentimetersPage;

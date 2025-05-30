"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // You'll need a new table or adjust existing for km to cm

const definitions = [
  {
    heading: "Kilometer",
    content: [
      "Definition: A kilometer is a unit of length equal to 1,000 meters or 100,000 centimeters and is used to measure longer distances.",
      "History/origin: The kilometer was introduced as part of the metric system to measure large distances such as between cities or geographical features.",
      "Current use: The kilometer is widely used globally in transportation, geography, and everyday measurement of long distances.",
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

const KilometersToCentimetersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Kilometers to Centimeters"
      fromUnit="Kilometers"
      toUnit="Centimeters"
      convertFunction={(val) => val * 100000} // 1 km = 100,000 cm
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 km = 100,000 cm
          <br />
          1 cm = 0.00001 km
          <br />
          <strong>Example:</strong> convert 2.5 km to cm:
          <br />
          2.5 km = 2.5 × 100,000 cm = 250,000 cm
        </>
      }
      reversePath="/Converters/LengthUnits/CentimetersToKilometers"
    />
  );
};

export default KilometersToCentimetersPage;

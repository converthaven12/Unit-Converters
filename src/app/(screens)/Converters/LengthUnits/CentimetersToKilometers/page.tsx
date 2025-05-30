"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // You'll create a new table or reuse with appropriate data

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
    heading: "Kilometer",
    content: [
      "Definition: A kilometer is a unit of length equal to 1,000 meters or 100,000 centimeters and is used to measure longer distances.",
      "History/origin: The kilometer was introduced as part of the metric system to measure large distances such as between cities or geographical features.",
      "Current use: The kilometer is widely used globally in transportation, geography, and everyday measurement of long distances.",
    ],
  },
];

const CentimetersToKilometersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Centimeters to Kilometers"
      fromUnit="Centimeters"
      toUnit="Kilometers"
      convertFunction={(val) => val / 100000}
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 cm = 0.00001 km
          <br />
          1 km = 100,000 cm
          <br />
          <strong>Example:</strong> convert 150,000 cm to km:
          <br />
          150,000 cm = 150,000 ÷ 100,000 km = 1.5 km
        </>
      }
      reversePath="/Converters/LengthUnits/KilometersToCentimeters"
    />
  );
};

export default CentimetersToKilometersPage;

"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for miles to meters

const definitions = [
  {
    heading: "Mile",
    content: [
      "Definition: A mile is a unit of length in the Imperial system, equal to 5,280 feet or approximately 1,609.344 meters.",
      "History/origin: The mile originated from the Roman 'mille passus', meaning a thousand paces. It was standardized over time, especially in English-speaking countries, to its current definition.",
      "Current use: The mile is primarily used in the United States and the United Kingdom to measure long distances, especially in transportation and road signs.",
    ],
  },
  {
    heading: "Meter",
    content: [
      "Definition: A meter is the base unit of length in the International System of Units (SI), equal to the length of the path traveled by light in a vacuum in 1/299,792,458 seconds.",
      "History/origin: The meter was originally defined in 1793 as one ten-millionth of the distance from the equator to the North Pole. It has undergone several redefinitions, most recently in terms of the speed of light.",
      "Current use: The meter is widely used around the world in science, engineering, and everyday measurement of distance and length.",
    ],
  },
];

const MilesToMetersPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Miles to Meters"
      fromUnit="Miles"
      toUnit="Meters"
      convertFunction={(val) => val * 1609.344} // 1 mile = 1609.344 meters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 mile = 1,609.344 meters
          <br />
          1 meter = 0.000621 miles
          <br />
          <strong>Example:</strong> convert 3.5 miles to meters:
          <br />
          3.5 × 1609.344 = 5632.704 meters
        </>
      }
      reversePath="/Converters/LengthUnits/MetersToMiles"
    />
  );
};

export default MilesToMetersPage;

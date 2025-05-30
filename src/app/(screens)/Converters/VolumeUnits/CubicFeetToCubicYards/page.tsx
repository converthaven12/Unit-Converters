"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for cubic feet to cubic yards

const definitions = [
  {
    heading: "Cubic Foot (ft³)",
    content: [
      "Definition: A cubic foot (ft³) is a unit of volume in the imperial and US customary systems that equals the volume of a cube with sides of 1 foot.",
      "History/origin: The cubic foot has been used historically in construction, shipping, and other volume measurements.",
      "Current use: Cubic feet are commonly used in the US and UK for measuring larger volumes such as room sizes, storage spaces, and fluids.",
    ],
  },
  {
    heading: "Cubic Yard (yd³)",
    content: [
      "Definition: A cubic yard (yd³) is a unit of volume equal to the volume of a cube with sides of 1 yard (3 feet). It is equal to 27 cubic feet.",
      "History/origin: The cubic yard originated from the imperial system and is based on the yard as a unit of length.",
      "Current use: Cubic yards are widely used in the US for measuring materials like concrete, soil, mulch, and other bulk goods.",
    ],
  },
];

const CubicFeetToCubicYardsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Cubic Feet to Cubic Yards"
      fromUnit="Cubic Feet (ft³)"
      toUnit="Cubic Yards (yd³)"
      convertFunction={(val) => val / 27} // 1 cubic yard = 27 cubic feet
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 cubic yard = 27 cubic feet
          <br />
          1 cubic foot ≈ 0.037037 cubic yards
          <br />
          <strong>Example:</strong> convert 81 cubic feet to cubic yards:
          <br />
          81 ÷ 27 = 3 cubic yards
        </>
      }
      reversePath="/Converters/VolumeUnits/CubicYardsToCubicFeet"
    />
  );
};

export default CubicFeetToCubicYardsPage;

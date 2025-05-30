"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for gallons to cubic feet

const definitions = [
  {
    heading: "Gallon (gal)",
    content: [
      "Definition: A US liquid gallon (gal) is a unit of volume equal to 128 US fluid ounces.",
      "History/origin: The gallon originated from British imperial measurements and varies between US and UK gallons; here we use the US liquid gallon.",
      "Current use: Gallons are widely used in the US for measuring fuel, liquids, and cooking volumes.",
    ],
  },
  {
    heading: "Cubic Foot (ft³)",
    content: [
      "Definition: A cubic foot (ft³) is a unit of volume in the imperial and US customary systems that equals the volume of a cube with sides of 1 foot.",
      "History/origin: The cubic foot has been used historically in construction, shipping, and other volume measurements.",
      "Current use: Cubic feet are commonly used in the US and UK for measuring larger volumes such as room sizes, storage spaces, and fluids.",
    ],
  },
];

const GallonToCubicFeetPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Gallons to Cubic Feet"
      fromUnit="Gallons (gal)"
      toUnit="Cubic Feet (ft³)"
      convertFunction={(val) => val * 0.133681} // 1 gallon ≈ 0.133681 cubic feet
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 gallon ≈ 0.133681 cubic feet
          <br />
          1 cubic foot ≈ 7.48052 gallons
          <br />
          <strong>Example:</strong> convert 50 gallons to cubic feet:
          <br />
          50 × 0.133681 ≈ 6.68405 cubic feet
        </>
      }
      reversePath="/Converters/VolumeUnits/CubicFeetToGallon"
    />
  );
};

export default GallonToCubicFeetPage;

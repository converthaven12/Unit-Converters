"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for cubic feet to gallons

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
    heading: "Gallon (gal)",
    content: [
      "Definition: A US liquid gallon (gal) is a unit of volume equal to 128 US fluid ounces.",
      "History/origin: The gallon originated from British imperial measurements and varies between US and UK gallons; here we use the US liquid gallon.",
      "Current use: Gallons are widely used in the US for measuring fuel, liquids, and cooking volumes.",
    ],
  },
];

const CubicFeetToGallonPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Cubic Feet to Gallons"
      fromUnit="Cubic Feet (ft³)"
      toUnit="Gallons (gal)"
      convertFunction={(val) => val * 7.48052} // 1 cubic foot ≈ 7.48052 gallons
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 cubic foot ≈ 7.48052 gallons
          <br />
          1 gallon ≈ 0.133681 cubic feet
          <br />
          <strong>Example:</strong> convert 10 cubic feet to gallons:
          <br />
          10 × 7.48052 ≈ 74.8052 gallons
        </>
      }
      reversePath="/Converters/VolumeUnits/GallonToCubicFeet"
    />
  );
};

export default CubicFeetToGallonPage;

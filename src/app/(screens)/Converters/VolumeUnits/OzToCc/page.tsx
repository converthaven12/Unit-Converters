"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for oz to cc

const definitions = [
  {
    heading: "Ounce (oz)",
    content: [
      "Definition: An ounce (oz) is a unit of volume commonly used in the US to measure liquid volumes (US fluid ounce).",
      "History/origin: The fluid ounce originated from British Imperial units and is used primarily in the United States.",
      "Current use: Fluid ounces are widely used for beverages, cooking, and other liquid measurements in the US.",
    ],
  },
  {
    heading: "Cubic Centimeter (cc)",
    content: [
      "Definition: A cubic centimeter (cc) is a unit of volume that equals the volume of a cube with sides of 1 centimeter.",
      "History/origin: The cc is derived from the metric system and is commonly used in medical and scientific contexts.",
      "Current use: Cubic centimeters are widely used in medicine for measuring doses and in automotive engineering for engine displacement.",
    ],
  },
];

const OzToCcPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Ounces to Cubic Centimeters"
      fromUnit="Ounces (oz)"
      toUnit="Cubic Centimeters (cc)"
      convertFunction={(val) => val * 29.5735} // 1 oz ≈ 29.5735 cc
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 ounce ≈ 29.5735 cubic centimeters
          <br />
          1 cc ≈ 0.033814 ounces
          <br />
          <strong>Example:</strong> convert 50 ounces to cubic centimeters:
          <br />
          50 × 29.5735 ≈ 1478.675 cc
        </>
      }
      reversePath="/Converters/VolumeUnits/CcToOz"
    />
  );
};

export default OzToCcPage;

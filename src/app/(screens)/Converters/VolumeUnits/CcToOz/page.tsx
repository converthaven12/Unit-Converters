"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for cc to oz

const definitions = [
  {
    heading: "Cubic Centimeter (cc)",
    content: [
      "Definition: A cubic centimeter (cc) is a unit of volume that equals the volume of a cube with sides of 1 centimeter.",
      "History/origin: The cc is derived from the metric system and is commonly used in medical and scientific contexts.",
      "Current use: Cubic centimeters are widely used in medicine for measuring doses and in automotive engineering for engine displacement.",
    ],
  },
  {
    heading: "Ounce (oz)",
    content: [
      "Definition: An ounce (oz) is a unit of volume commonly used in the US to measure liquid volumes (US fluid ounce).",
      "History/origin: The fluid ounce originated from British Imperial units and is used primarily in the United States.",
      "Current use: Fluid ounces are widely used for beverages, cooking, and other liquid measurements in the US.",
    ],
  },
];

const CcToOzPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Cubic Centimeters to Ounces"
      fromUnit="Cubic Centimeters (cc)"
      toUnit="Ounces (oz)"
      convertFunction={(val) => val * 0.033814} // 1 cc ≈ 0.033814 oz
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 cc ≈ 0.033814 ounces
          <br />
          1 ounce ≈ 29.5735 cubic centimeters
          <br />
          <strong>Example:</strong> convert 1500 cc to ounces:
          <br />
          1500 × 0.033814 ≈ 50.72 ounces
        </>
      }
      reversePath="/Converters/VolumeUnits/OzToCc"
    />
  );
};

export default CcToOzPage;

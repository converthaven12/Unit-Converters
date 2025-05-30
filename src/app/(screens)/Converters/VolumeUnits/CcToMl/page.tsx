"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for cc to ml

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
    heading: "Milliliter (ml)",
    content: [
      "Definition: A milliliter is a metric unit of volume equal to one thousandth of a liter.",
      "History/origin: The milliliter was introduced as part of the metric system developed in France during the late 18th century.",
      "Current use: Milliliters are commonly used worldwide for measuring small liquid volumes in science, medicine, and cooking.",
    ],
  },
];

const CcToMlPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Cubic Centimeters to Milliliters"
      fromUnit="Cubic Centimeters (cc)"
      toUnit="Milliliters (ml)"
      convertFunction={(val) => val} // 1 cc = 1 ml exactly
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 cc = 1 ml
          <br />
          1 ml = 1 cc
          <br />
          <strong>Example:</strong> convert 1500 cc to milliliters:
          <br />
          1500 × 1 = 1500 milliliters
        </>
      }
      reversePath="/Converters/VolumeUnits/MlToCc"
    />
  );
};

export default CcToMlPage;

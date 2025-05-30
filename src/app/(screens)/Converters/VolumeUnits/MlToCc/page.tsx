"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for ml to cc

const definitions = [
  {
    heading: "Milliliter (ml)",
    content: [
      "Definition: A milliliter is a metric unit of volume equal to one thousandth of a liter.",
      "History/origin: The milliliter was introduced as part of the metric system developed in France during the late 18th century.",
      "Current use: Milliliters are commonly used worldwide for measuring small liquid volumes in science, medicine, and cooking.",
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

const MlToCcPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Milliliters to Cubic Centimeters"
      fromUnit="Milliliters (ml)"
      toUnit="Cubic Centimeters (cc)"
      convertFunction={(val) => val} // 1 ml = 1 cc exactly
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 ml = 1 cc
          <br />
          1 cc = 1 ml
          <br />
          <strong>Example:</strong> convert 1500 milliliters to cubic
          centimeters:
          <br />
          1500 × 1 = 1500 cc
        </>
      }
      reversePath="/Converters/VolumeUnits/CcToMl"
    />
  );
};

export default MlToCcPage;

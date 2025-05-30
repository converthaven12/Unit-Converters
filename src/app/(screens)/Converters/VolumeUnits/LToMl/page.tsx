"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for liters to ml

const definitions = [
  {
    heading: "Liter (l)",
    content: [
      "Definition: A liter is a metric unit of volume equal to 1000 milliliters.",
      "History/origin: The liter was originally defined in France in 1795 as the volume of one kilogram of water.",
      "Current use: Liters are widely used globally for measuring larger liquid volumes, especially in science, cooking, and commerce.",
    ],
  },
  {
    heading: "Milliliter (ml)",
    content: [
      "Definition: A milliliter is a metric unit of volume equal to one-thousandth of a liter (0.001 liters).",
      "History/origin: The milliliter was introduced with the metric system in the late 18th century.",
      "Current use: Milliliters are widely used around the world for measuring small liquid volumes in cooking, medicine, and science.",
    ],
  },
];

const LToMlPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Liters to Milliliters"
      fromUnit="Liters"
      toUnit="Milliliters"
      convertFunction={(val) => val * 1000} // 1 liter = 1000 milliliters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 liter = 1000 milliliters
          <br />
          1 milliliter = 0.001 liters
          <br />
          <strong>Example:</strong> convert 1.5 liters to milliliters:
          <br />
          1.5 × 1000 = 1500 milliliters
        </>
      }
      reversePath="/Converters/VolumeUnits/MlToL"
    />
  );
};

export default LToMlPage;

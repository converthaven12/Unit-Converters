"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for ml to l

const definitions = [
  {
    heading: "Milliliter (ml)",
    content: [
      "Definition: A milliliter is a metric unit of volume equal to one-thousandth of a liter (0.001 liters).",
      "History/origin: The milliliter was introduced with the metric system in the late 18th century.",
      "Current use: Milliliters are widely used around the world for measuring small liquid volumes in cooking, medicine, and science.",
    ],
  },
  {
    heading: "Liter (l)",
    content: [
      "Definition: A liter is a metric unit of volume equal to 1000 milliliters.",
      "History/origin: The liter was originally defined in France in 1795 as the volume of one kilogram of water.",
      "Current use: Liters are widely used globally for measuring larger liquid volumes, especially in science, cooking, and commerce.",
    ],
  },
];

const MlToLPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Milliliters to Liters"
      fromUnit="Milliliters"
      toUnit="Liters"
      convertFunction={(val) => val / 1000} // 1 ml = 0.001 liters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 milliliter = 0.001 liters
          <br />
          1 liter = 1000 milliliters
          <br />
          <strong>Example:</strong> convert 1500 milliliters to liters:
          <br />
          1500 ÷ 1000 = 1.5 liters
        </>
      }
      reversePath="/Converters/VolumeUnits/LToMl"
    />
  );
};

export default MlToLPage;

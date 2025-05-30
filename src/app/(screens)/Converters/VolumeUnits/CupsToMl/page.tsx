"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for cups to ml

const definitions = [
  {
    heading: "Cup",
    content: [
      "Definition: A cup is a unit of volume commonly used in cooking in the United States, equivalent to 8 US fluid ounces or approximately 236.588 milliliters.",
      "History/origin: The cup as a measurement originated in cooking and household measures.",
      "Current use: Cups are widely used in recipes and food packaging in the US and Canada.",
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

const CupsToMlPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Cups to Milliliters"
      fromUnit="Cups"
      toUnit="Milliliters"
      convertFunction={(val) => val * 236.588} // 1 cup = 236.588 milliliters
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 cup = 236.588 milliliters
          <br />
          1 milliliter = 0.00423 cups
          <br />
          <strong>Example:</strong> convert 2 cups to milliliters:
          <br />2 × 236.588 = 473.176 milliliters
        </>
      }
      reversePath="/Converters/VolumeUnits/MlToCups"
    />
  );
};

export default CupsToMlPage;

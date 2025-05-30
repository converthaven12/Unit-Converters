"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for cups to tablespoons

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
    heading: "Tablespoon",
    content: [
      "Definition: A tablespoon is a unit of volume commonly used in cooking, equal to 3 teaspoons or approximately 14.7868 milliliters.",
      "History/origin: The tablespoon measurement originates from traditional cooking measurements.",
      "Current use: Tablespoons are widely used in recipes and food measurements in the US and many other countries.",
    ],
  },
];

const CupsToTablespoonsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Cups to Tablespoons"
      fromUnit="Cups"
      toUnit="Tablespoons"
      convertFunction={(val) => val * 16} // 1 cup = 16 tablespoons
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 cup = 16 tablespoons
          <br />
          1 tablespoon = 0.0625 cups
          <br />
          <strong>Example:</strong> convert 2 cups to tablespoons:
          <br />2 × 16 = 32 tablespoons
        </>
      }
      reversePath="/Converters/VolumeUnits/TablespoonsToCups"
    />
  );
};

export default CupsToTablespoonsPage;

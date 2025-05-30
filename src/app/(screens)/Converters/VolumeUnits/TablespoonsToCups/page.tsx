"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for tablespoons to cups

const definitions = [
  {
    heading: "Tablespoon",
    content: [
      "Definition: A tablespoon is a unit of volume commonly used in cooking, equal to 3 teaspoons or approximately 14.7868 milliliters.",
      "History/origin: The tablespoon measurement originates from traditional cooking measurements.",
      "Current use: Tablespoons are widely used in recipes and food measurements in the US and many other countries.",
    ],
  },
  {
    heading: "Cup",
    content: [
      "Definition: A cup is a unit of volume commonly used in cooking in the United States, equivalent to 8 US fluid ounces or approximately 236.588 milliliters.",
      "History/origin: The cup as a measurement originated in cooking and household measures.",
      "Current use: Cups are widely used in recipes and food packaging in the US and Canada.",
    ],
  },
];

const TablespoonsToCupsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Tablespoons to Cups"
      fromUnit="Tablespoons"
      toUnit="Cups"
      convertFunction={(val) => val / 16} // 1 cup = 16 tablespoons, so 1 tablespoon = 1/16 cup = 0.0625 cups
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 tablespoon = 0.0625 cups
          <br />
          1 cup = 16 tablespoons
          <br />
          <strong>Example:</strong> convert 32 tablespoons to cups:
          <br />
          32 ÷ 16 = 2 cups
        </>
      }
      reversePath="/Converters/VolumeUnits/CupsToTablespoons"
    />
  );
};

export default TablespoonsToCupsPage;

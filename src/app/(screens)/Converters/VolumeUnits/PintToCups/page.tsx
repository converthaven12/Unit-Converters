"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // You will create a table adjusted for Pints to Cups

const definitions = [
  {
    heading: "Pint (US pt)",
    content: [
      "Definition: A US pint is a unit of volume equal to 16 fluid ounces or 2 cups, approximately 473.176 milliliters.",
      "History/origin: The term 'pint' comes from the Old French word 'pinte', which in turn comes from the Latin 'pincta'.",
      "Current use: Pints are widely used in the United States for serving beverages like beer and milk.",
    ],
  },
  {
    heading: "Cup (US cup)",
    content: [
      "Definition: A US cup is a unit of volume used in cooking measurements, equal to 8 fluid ounces or about 236.588 milliliters.",
      "History/origin: The cup measurement originated from early English cooking measures and was standardized in the US.",
      "Current use: The cup is commonly used in the United States and Canada for cooking and serving sizes.",
    ],
  },
];

const PintsToCupsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Pints to Cups"
      fromUnit="Pints (US pt)"
      toUnit="Cups (US cup)"
      convertFunction={(val) => val * 2} // 1 pint = 2 cups
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 pint = 2 cups
          <br />
          <strong>Example:</strong> convert 3 pints to cups:
          <br />3 × 2 = 6 cups
        </>
      }
      reversePath="/Converters/VolumeUnits/CupsToPints"
    />
  );
};

export default PintsToCupsPage;

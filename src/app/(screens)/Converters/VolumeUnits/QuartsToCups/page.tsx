"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // You will create a table adjusted for Quarts to Cups

const definitions = [
  {
    heading: "Quart (US qt)",
    content: [
      "Definition: A US quart is a unit of volume equal to 4 US cups or approximately 0.946 liters.",
      "History/origin: The quart is derived from the Latin 'quartus', meaning a fourth part, and has been used in English-speaking countries for liquid measurement.",
      "Current use: Quarts are used primarily in the United States to measure liquid volumes like milk, beverages, and other fluids.",
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

const QuartsToCupsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Quarts to Cups"
      fromUnit="Quarts (US qt)"
      toUnit="Cups (US cup)"
      convertFunction={(val) => val * 4} // 1 quart = 4 cups
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 quart = 4 cups
          <br />
          <strong>Example:</strong> convert 3 quarts to cups:
          <br />3 × 4 = 12 cups
        </>
      }
      reversePath="/Converters/VolumeUnits/CupsToQuarts"
    />
  );
};

export default QuartsToCupsPage;

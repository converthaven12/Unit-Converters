"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable";

const definitions = [
  {
    heading: "Gram",
    content: [
      "Definition: A milligram is a unit of weight and mass that is based on the SI (International System of Units) base unit of mass, the kilogram. It is equal to 1/1,000 grams, or 1/1,000,000 kilograms.",
      "History/origin: A gram was defined as the absolute weight of pure water in a cubic centimeter at the temperature of melting ice (later 4 °C) and was originally a fundamental unit of mass in the centimeter-gram-second system until the SI system adopted the kilogram as the base unit of mass, redefining the gram as one thousandth of a kilogram.",
      "Current use: The gram is widely used in everyday life as well as scientific contexts; for example, it is typically used to measure non-liquid ingredients for cooking or groceries, and nutrition labels often require the relative contents to be stated per 100 grams of the product.",
    ],
  },
  {
    heading: "Milligram",
    content: [
      "Definition: A milligram is a unit of mass in the metric system equal to one thousandth of a gram or one millionth of a kilogram, based on the SI (International System of Units) base unit of mass, the kilogram.",
      "History/origin: The milligram is derived from the gram, which was originally defined as the absolute weight of pure water in a cubic centimeter at the temperature of melting ice (later 4 °C), and became a subdivision after the SI system established the kilogram as the base unit of mass, making a milligram equal to 1/1,000,000 of a kilogram.",
      "Current use: The milligram is widely used in fields requiring precise measurement of small quantities, such as medicine, nutrition, and science, where dosages and contents are often listed in milligrams to ensure accuracy.",
    ],
  },
];

const GramToMilligramPage = () => {
  return (
    <ReusableConversionPage
      title="Convert grams to milligrams"
      fromUnit="gram"
      toUnit="milligram"
      convertFunction={(val) => val * 1000}
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 g = 1000 mg
          <br />
          1 mg = 0.001 g
          <br />
          <strong>Example:</strong> convert 15 g to mg:
          <br />
          15 g = 15 × 1000 mg = 15000 mg
        </>
      }
      reversePath="/Converters/WeightAndMass/MilligramsToGrams"
    />
  );
};

export default GramToMilligramPage;

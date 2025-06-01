"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Fahrenheit to Kelvin

const definitions = [
  {
    heading: "Fahrenheit (°F)",
    content: [
      "Definition: Fahrenheit is a temperature scale where water freezes at 32 °F and boils at 212 °F under standard atmospheric pressure.",
      "History/origin: Developed by Daniel Gabriel Fahrenheit in 1724.",
      "Current use: Commonly used in the United States and some Caribbean countries for everyday temperature measurements.",
    ],
  },
  {
    heading: "Kelvin (K)",
    content: [
      "Definition: Kelvin is the SI base unit of temperature, starting at absolute zero (0 K), where all thermal motion ceases.",
      "History/origin: Developed by William Thomson, Lord Kelvin.",
      "Current use: Used primarily in scientific contexts to measure thermodynamic temperature.",
    ],
  },
];

const FahrenheitToKelvinPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Fahrenheit (°F) to Kelvin (K)"
      fromUnit="Fahrenheit (°F)"
      toUnit="Kelvin (K)"
      convertFunction={(val) => ((val - 32) * 5) / 9 + 273.15} // K = (°F - 32) × 5/9 + 273.15
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Fahrenheit to Kelvin
      conversionExample={
        <>
          Formula: Kelvin = (Fahrenheit - 32) × 5/9 + 273.15
          <br />
          <strong>Example:</strong> convert 77 °F to K:
          <br />
          (77 - 32) × 5/9 + 273.15 = 298.15 K
        </>
      }
      reversePath="/Converters/TemperatureUnits/KelvinToFahrenheit"
    />
  );
};

export default FahrenheitToKelvinPage;

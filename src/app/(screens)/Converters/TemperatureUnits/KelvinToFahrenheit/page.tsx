"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Kelvin to Fahrenheit

const definitions = [
  {
    heading: "Kelvin (K)",
    content: [
      "Definition: Kelvin is the SI base unit of temperature, starting at absolute zero (0 K), where all thermal motion ceases.",
      "History/origin: Developed by William Thomson, Lord Kelvin.",
      "Current use: Used primarily in scientific contexts to measure thermodynamic temperature.",
    ],
  },
  {
    heading: "Fahrenheit (°F)",
    content: [
      "Definition: Fahrenheit is a temperature scale where water freezes at 32 °F and boils at 212 °F under standard atmospheric pressure.",
      "History/origin: Developed by Daniel Gabriel Fahrenheit in 1724.",
      "Current use: Commonly used in the United States and some Caribbean countries for everyday temperature measurements.",
    ],
  },
];

const KelvinToFahrenheitPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Kelvin (K) to Fahrenheit (°F)"
      fromUnit="Kelvin (K)"
      toUnit="Fahrenheit (°F)"
      convertFunction={(val) => ((val - 273.15) * 9) / 5 + 32} // °F = (K - 273.15) × 9/5 + 32
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Kelvin to Fahrenheit
      conversionExample={
        <>
          Formula: Fahrenheit = (Kelvin - 273.15) × 9/5 + 32
          <br />
          <strong>Example:</strong> convert 298.15 K to °F:
          <br />
          (298.15 - 273.15) × 9/5 + 32 = 77 °F
        </>
      }
      reversePath="/Converters/TemperatureUnits/FahrenheitToKelvin"
    />
  );
};

export default KelvinToFahrenheitPage;

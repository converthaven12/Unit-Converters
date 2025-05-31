"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Kelvin to Celsius

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
    heading: "Celsius (°C)",
    content: [
      "Definition: Celsius is a scale and unit of measurement for temperature where 0 °C is the freezing point of water and 100 °C is the boiling point at standard atmospheric pressure.",
      "History/origin: Developed by Anders Celsius in 1742.",
      "Current use: Widely used around the world for everyday temperature measurements.",
    ],
  },
];

const KelvinToCelsiusPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Kelvin (K) to Celsius (°C)"
      fromUnit="Kelvin (K)"
      toUnit="Celsius (°C)"
      convertFunction={(val) => val - 273.15} // °C = K - 273.15
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Kelvin to Celsius
      conversionExample={
        <>
          Formula: Celsius = Kelvin - 273.15
          <br />
          <strong>Example:</strong> convert 298.15 K to °C:
          <br />
          298.15 - 273.15 = 25 °C
        </>
      }
      reversePath="/Converters/Temperature/CelsiusToKelvin"
    />
  );
};

export default KelvinToCelsiusPage;

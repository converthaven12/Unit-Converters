"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Table component for Celsius to Kelvin

const definitions = [
  {
    heading: "Celsius (°C)",
    content: [
      "Definition: Celsius is a scale and unit of measurement for temperature where 0 °C is the freezing point of water and 100 °C is the boiling point at standard atmospheric pressure.",
      "History/origin: Developed by Anders Celsius in 1742.",
      "Current use: Widely used around the world for everyday temperature measurements.",
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

const CelsiusToKelvinPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Celsius (°C) to Kelvin (K)"
      fromUnit="Celsius (°C)"
      toUnit="Kelvin (K)"
      convertFunction={(val) => val + 273.15} // K = °C + 273.15
      definitions={definitions}
      tableComponent={<ConversionTable />} // Table component for Celsius to Kelvin
      conversionExample={
        <>
          Formula: Kelvin = Celsius + 273.15
          <br />
          <strong>Example:</strong> convert 25 °C to K:
          <br />
          25 + 273.15 = 298.15 K
        </>
      }
      reversePath="/Converters/Temperature/KelvinToCelsius"
    />
  );
};

export default CelsiusToKelvinPage;

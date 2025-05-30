'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const heatTransferCoefficientUnits: Record<string, number> = {
  "Watt per square meter Kelvin (W/m²·K)": 1,
  "Watt per square meter Celsius (W/m²·°C)": 1, // °C and K intervals are equivalent
  "Kilocalorie per hour square meter Celsius (kcal/h·m²·°C)": 1.163,
  "BTU per hour square foot Fahrenheit (BTU/h·ft²·°F)": 5.678263,
  "BTU per second square foot Fahrenheit (BTU/s·ft²·°F)": 20441.7476,
  "BTU per minute square foot Fahrenheit (BTU/min·ft²·°F)": 340.69579,
  "BTU per second square meter Fahrenheit (BTU/s·m²·°F)": 21934.64,
  "BTU per hour square inch Fahrenheit (BTU/h·in²·°F)": 8181.67,
};

const HeatTransferCoefficientConverterPage: React.FC = () => {
  const convert = (value: number, from: string, to: string): number => {
    const fromFactor = heatTransferCoefficientUnits[from];
    const toFactor = heatTransferCoefficientUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return value * (fromFactor / toFactor);
  };

  return (
    <ReusableConverter
      heading="Heat Transfer Coefficient Converter"
      units={Object.keys(heatTransferCoefficientUnits)}
      convert={convert}
    />
  );
};

export default HeatTransferCoefficientConverterPage;

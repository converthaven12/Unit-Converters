'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const heatFluxDensityUnits: Record<string, number> = {
  "Watt per square meter (W/m²)": 1,
  "Watt per square centimeter (W/cm²)": 10000,
  "BTU per hour square foot (BTU/hr·ft²)": 3.15459,
  "Calorie per second square centimeter (cal/s·cm²)": 41840,
  "Kilowatt per square meter (kW/m²)": 1000,
};

const HeatFluxDensityConverterPage: React.FC = () => {
  const convert = (value: number, from: string, to: string): number => {
    const fromFactor = heatFluxDensityUnits[from];
    const toFactor = heatFluxDensityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return value * (fromFactor / toFactor);
  };

  return (
    <ReusableConverter
      heading="Heat Flux Density Converter"
      units={Object.keys(heatFluxDensityUnits)}
      convert={convert}
    />
  );
};

export default HeatFluxDensityConverterPage;

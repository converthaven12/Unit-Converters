'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const heatDensityUnits: Record<string, number> = {
  "Joule per cubic meter (J/m³)": 1,
  "Kilojoule per cubic meter (kJ/m³)": 1000,
  "Calorie per cubic centimeter (cal/cm³)": 4184 * 1e6,
  "BTU per cubic foot (BTU/ft³)": 37257.1428571,
  "Watt hour per liter (Wh/L)": 3600 * 1000,
};

const HeatDensityConverterPage: React.FC = () => {
  const convert = (value: number, from: string, to: string): number => {
    const fromFactor = heatDensityUnits[from];
    const toFactor = heatDensityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return value * (fromFactor / toFactor);
  };

  return (
    <ReusableConverter
      heading="Heat Density Converter"
      units={Object.keys(heatDensityUnits)}
      convert={convert}
    />
  );
};

export default HeatDensityConverterPage;

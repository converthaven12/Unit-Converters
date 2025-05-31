'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const heatDensityUnits: Record<string, number> = {
  "joule/square meter [J/m^2]": 1,
  "calorie (th)/square centimeter": 41840,      // 1 cal(th)/cm² = 41840 J/m²
  "langley": 41840,                             // 1 langley = 1 cal/cm² ≈ 41840 J/m²
  "Btu (IT)/square foot": 11306.4,             // 1 Btu/ft² = 11306.4 J/m²
  "Btu (th)/square foot": 11280,                // 1 Btu(th)/ft² = 11280 J/m²
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

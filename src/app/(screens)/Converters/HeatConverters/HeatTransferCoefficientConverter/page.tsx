'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const heatTransferCoefficientUnits: Record<string, number> = {
  "watt/square meter/K": 1,
  "watt/square meter/%b0C": 1,                      // %°C same as K increment
  "joule/second/square meter/K": 1,                  // same as W/m²/K
  "calorie (IT)/second/square centimeter/%b0C": 41840, // cal/(s·cm²·°C) to W/m²/K
  "kilocalorie (IT)/hour/square meter/%b0C": 1.163,  // kcal/(hr·m²·°C) to W/m²/K
  "kilocalorie (IT)/hour/square foot/%b0C": 12.52,   // kcal/(hr·ft²·°C) to W/m²/K
  "Btu (IT)/second/square foot/%b0F": 20340,         // Btu/(s·ft²·°F) to W/m²/K
  "Btu (th)/second/square foot/%b0F": 20300,         // Btu(th)/(s·ft²·°F)
  "Btu (IT)/hour/square foot/%b0F": 5.65,            // Btu/(hr·ft²·°F)
  "Btu (th)/hour/square foot/%b0F": 5.64,
  "CHU/hour/square foot/%b0C": 5.64,
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

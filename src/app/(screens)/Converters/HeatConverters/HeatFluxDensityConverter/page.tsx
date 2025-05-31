'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const heatFluxDensityUnits: Record<string, number> = {
  "watt/square meter [W/m^2]": 1,
  "kilowatt/square meter": 1000,
  "watt/square centimeter": 10000,               // 1 W/cm² = 10,000 W/m²
  "watt/square inch [W/in^2]": 1550,             // 1 W/in² = 1550 W/m² approx
  "joule/second/square meter": 1,                 // same as watt/m²
  "kilocalorie (IT)/hour/square meter": 1.163,  // 1 kcal/hr/m² = 1.163 W/m²
  "kilocalorie (IT)/hour/square foot": 12.52,   // 1 kcal/hr/ft² = 12.52 W/m²
  "calorie (IT)/second/square centimeter": 41840, // 1 cal/s/cm² = 41840 W/m²
  "calorie (IT)/minute/square centimeter": 697, // 1 cal/min/cm² = 697 W/m²
  "calorie (IT)/hour/square centimeter": 11.6,  // 1 cal/hr/cm² = 11.6 W/m²
  "calorie (th)/second/square centimeter": 41840,
  "calorie (th)/minute/square centimeter": 697,
  "calorie (th)/hour/square centimeter": 11.6,
  "dyne/hour/centimeter": 2.778e-6,              // 1 dyne/hr/cm = 2.778e-6 W/m²
  "erg/hour/square millimeter": 2.778e-8,        // 1 erg/hr/mm² = 2.778e-8 W/m²
  "foot pound/minute/square foot": 57.61,        // 1 ft·lbf/min/ft² = 57.61 W/m²
  "horsepower/square foot": 25440,                // 1 hp/ft² = 25440 W/m²
  "horsepower (metric)/square foot": 25440,       // approx same as above
  "Btu (IT)/second/square foot": 11306.4,
  "Btu (IT)/minute/square foot": 188.44,
  "Btu (IT)/hour/square foot": 3.141,
  "Btu (th)/second/square inch": 1550,
  "Btu (th)/second/square foot": 11306.4,
  "Btu (th)/minute/square foot": 188.44,
  "Btu (th)/hour/square foot": 3.134,
  "CHU/hour/square foot": 3.134,
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

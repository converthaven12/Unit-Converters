"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const magneticFluxDensityUnits: Record<string, number> = {
  "tesla [T]": 1,
  "weber/square meter": 1,                   // 1 Wb/m² = 1 T
  "weber/square centimeter": 1e4,            // 1 Wb/cm² = 10⁴ T
  "weber/square inch [Wb/in^2]": 1550.0031,  // 1 Wb/in² ≈ 1550.0031 T
  "maxwell/square meter": 1e-8,              // 1 Mx/m² = 10⁻⁸ T
  "maxwell/square centimeter": 1e-4,         // 1 Mx/cm² = 10⁻⁴ T
  "maxwell/square inch [Mx/in^2]": 0.0155,   // 1 Mx/in² ≈ 0.0155 T
  "gauss [Gs, G]": 1e-4,                     // 1 G = 10⁻⁴ T
  "line/square centimeter": 1e-4,            // 1 line/cm² = 10⁻⁴ T
  "line/square inch": 0.0155,                // ≈ 1 line/in² = 0.0155 T
  "gamma": 1e-9,                             // 1 gamma = 10⁻⁹ T
};


const convert = (value: number, from: string, to: string): number => {
  const fromFactor = magneticFluxDensityUnits[from];
  const toFactor = magneticFluxDensityUnits[to];
  return (value * fromFactor) / toFactor;
};

const MagneticFluxDensityConverter = () => (
  <ReusableConverter
    heading="Magnetic Flux Density Converter"
    units={Object.keys(magneticFluxDensityUnits)}
    convert={convert}
  />
);

export default MagneticFluxDensityConverter;

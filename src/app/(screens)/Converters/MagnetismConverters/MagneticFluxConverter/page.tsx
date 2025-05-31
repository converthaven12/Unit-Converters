"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const magneticFluxUnits: Record<string, number> = {
  "weber [Wb]": 1,
  "milliweber [mWb]": 1e-3,
  "microweber [µWb]": 1e-6,
  "volt second [V*s]": 1,
  "unit pole": 1.2566370614e-7,               // Approx. 1 unit pole = µ₀/4π Wb
  "megaline": 0.01,                           // 1 megaline = 0.01 Wb
  "kiloline": 1e-5,                           // 1 kiloline = 10⁻⁵ Wb
  "line": 1e-8,                               // 1 line = 10⁻⁸ Wb
  "maxwell [Mx]": 1e-8,                       // 1 Mx = 10⁻⁸ Wb
  "tesla square meter [T*m^2]": 1,            // 1 T·m² = 1 Wb
  "tesla square centimeter": 1e-4,            // 1 T·cm² = 10⁻⁴ Wb
  "gauss square centimeter": 1e-8,            // 1 G·cm² = 10⁻⁸ Wb
  "magnetic flux quantum": 2.067833848e-15,   // Φ₀ ≈ 2.068×10⁻¹⁵ Wb
};


const convert = (value: number, from: string, to: string): number => {
  const fromFactor = magneticFluxUnits[from];
  const toFactor = magneticFluxUnits[to];
  return (value * fromFactor) / toFactor;
};

const MagneticFluxConverter = () => (
  <ReusableConverter
    heading="Magnetic Flux Converter"
    units={Object.keys(magneticFluxUnits)}
    convert={convert}
  />
);

export default MagneticFluxConverter;

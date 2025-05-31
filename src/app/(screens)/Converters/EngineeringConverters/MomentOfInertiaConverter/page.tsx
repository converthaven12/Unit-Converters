'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const momentOfInertiaUnits: Record<string, number> = {
  "Kilogram meter squared (kg·m²)": 1,              // base unit
  "Kilogram centimeter squared (kg·cm²)": 1e-4,     // (1 cm = 0.01 m)^2 = 1e-4
  "Kilogram millimeter squared (kg·mm²)": 1e-6,     // (1 mm = 0.001 m)^2 = 1e-6
  "Gram centimeter squared (g·cm²)": 1e-7,          // 1 g = 0.001 kg, cm² = 1e-4 m² → 0.001 * 1e-4 = 1e-7
  "Gram millimeter squared (g·mm²)": 1e-9,          // 0.001 kg * (0.001 m)^2 = 1e-9
  "Kilogram-force meter square second (kgf·m²·s)": 9.80665, // kgf = 9.80665 N, assuming unit of torque*second? Usually moment of inertia is mass*distance² only, but if involving force*time², multiply by g
  "Kilogram-force centimeter square second (kgf·cm²·s)": 9.80665e-4, // scaled from above by 1e-4
  "Ounce inch squared (oz·in²)": 8.5065e-6,
  "Ounce-force inch square second (ozf·in²·s)": 8.345e-5,          // approx ozf to N (1 ozf = 0.2780139 N), times inch² in m²
  "Pound foot squared (lb·ft²)": 0.0421401,
  "Pound-force foot square second (lbf·ft²·s)": 0.4145,           // lb force ≈ 4.44822 N, times ft²
  "Pound inch squared (lb·in²)": 0.002939,                       // 1 lb * (1 in = 0.0254 m)^2
  "Pound-force inch square second (lbf·in²·s)": 0.02887,
  "Slug foot squared (slug·ft²)": 1.35582,
};


const MomentOfInertiaConverterPage: React.FC = () => {
  const convertMomentOfInertia = (value: number, from: string, to: string): number => {
    const fromFactor = momentOfInertiaUnits[from];
    const toFactor = momentOfInertiaUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Moment of Inertia Converter"
      units={Object.keys(momentOfInertiaUnits)}
      convert={convertMomentOfInertia}
    />
  );
};

export default MomentOfInertiaConverterPage;

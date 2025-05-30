"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Candela per square meter (cd/m²)": 1,       // SI unit
  "Nit (nt)": 1,                               // Synonym of cd/m²
  "Foot-Lambert (fL)": 0.318309886,            // 1 fL ≈ 1/π cd/m²
  "Lambert (L)": 3183.098861,                   // 1 L = 10,000/π cd/m²
  "Stilb (sb)": 10000,                          // 1 sb = 10,000 cd/m²
  "Apostilb (asb)": 0.318309886,                // 1 asb = 1/π cd/m²
  "Skot (sk)": 0.001,                           // 1 sk = 0.001 cd/m²
};

const convert = (value: number, from: string, to: string): number => {
  if (!(from in units) || !(to in units)) return NaN;
  return (value * units[from]) / units[to];
};

const LuminanceConverter = () => (
  <ReusableConverter
    heading="Luminance Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default LuminanceConverter;

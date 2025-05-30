"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  Candela: 1,          // SI unit
  "Millicandela (mcd)": 1e-3,
  "Kilocandela (kcd)": 1e3,
  "Footcandle": 10.764,   // Footcandle is illumination not intensity but often confused; keep approximate scale
};

const convert = (value: number, from: string, to: string): number => {
  if (!(from in units) || !(to in units)) return NaN;
  return (value * units[from]) / units[to];
};

const LuminousIntensityConverter = () => (
  <ReusableConverter
    heading="Luminous Intensity Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default LuminousIntensityConverter;

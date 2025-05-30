"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  Gray: 1,                  // Absorbed dose SI unit
  Rad: 0.01,                // 1 Rad = 0.01 Gray
  Sievert: 1,               // Equivalent dose SI unit (numerically same for simplicity)
  Rem: 0.01,                // 1 Rem = 0.01 Sievert
  "Roentgen (R)": 2.58e-4,  // Exposure unit (C/kg), approx conversion to Gray air kerma
  "Milliroentgen (mR)": 2.58e-7,
  "Microgray (µGy)": 1e-6,
  "Milligray (mGy)": 1e-3,
  "Microsievert (µSv)": 1e-6,
  "Millisievert (mSv)": 1e-3,
};

const convert = (value: number, from: string, to: string): number => {
  if (!(from in units) || !(to in units)) return NaN;
  return (value * units[from]) / units[to];
};

const RadiationConverter = () => (
  <ReusableConverter
    heading="Radiation Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default RadiationConverter;

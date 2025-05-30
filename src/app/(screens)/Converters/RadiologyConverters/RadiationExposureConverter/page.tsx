"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

// Exposure units relate to ionization in air
const units: Record<string, number> = {
  Roentgen: 1,           // R (old unit of exposure)
  Milliroentgen: 1e-3,
  Microroentgen: 1e-6,
  CoulombPerKg: 2.58e-4, // 1 R = 2.58×10⁻⁴ C/kg (SI unit)
  MillicoulombPerKg: 2.58e-7,
  MicocoulombPerKg: 2.58e-10,
};

const convert = (value: number, from: string, to: string): number => {
  if (!(from in units) || !(to in units)) return NaN;
  return (value * units[from]) / units[to];
};

const RadiationExposureConverter = () => (
  <ReusableConverter
    heading="Radiation-Exposure Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default RadiationExposureConverter;

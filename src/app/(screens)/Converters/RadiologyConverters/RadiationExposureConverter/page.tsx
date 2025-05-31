"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

// Exposure units relate to ionization in air
const units: Record<string, number> = {
  "coulomb/kilogram [C/kg]": 1,
  "millicoulomb/kilogram [mC/kg]": 1e-3,
  "microcoulomb/kilogram [µC/kg]": 1e-6,
  "roentgen [R]": 2.58e-4,
  "tissue roentgen": 2.58e-4, // treated same as R unless clarified otherwise
  "parker": 2.58e-4,          // assumed equal to R
  "rep": 2.58e-4              // historically approx same as R
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

"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  Gray: 1,
  Milligray: 1e-3,
  Microgray: 1e-6,
  Rad: 0.01,
  JoulePerKilogram: 1,  // Equivalent to Gray
};

const convert = (value: number, from: string, to: string): number => {
  if (!(from in units) || !(to in units)) return NaN;
  return (value * units[from]) / units[to];
};

const RadiationAbsorbedDoseConverter = () => (
  <ReusableConverter
    heading="Radiation-Absorbed Dose Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default RadiationAbsorbedDoseConverter;

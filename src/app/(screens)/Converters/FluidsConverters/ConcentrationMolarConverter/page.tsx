"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Mole/liter (M)": 1,
  "Millimole/liter (mM)": 1e-3,
  "Micromole/liter (µM)": 1e-6,
  "Nanomole/liter (nM)": 1e-9,
  "Mole/cubic meter (mol/m³)": 1e-3
};

const convert = (value: number, from: string, to: string): number => {
  return (value * units[from]) / units[to];
};

const ConcentrationMolarConverter = () => (
  <ReusableConverter
    heading="Concentration - Molar Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default ConcentrationMolarConverter;

"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Kilogram/Pascal/Second/Square Meter": 1,
  "Permeability (0°C)": 1.01325e-10,
  "Permeability (23°C)": 1.01325e-10 * 1.05,
  "Permeability Inches (0°C)": 2.54e-10,
  "Permeability Inches (23°C)": 2.54e-10 * 1.05,
};

const convert = (value: number, from: string, to: string): number => {
  return (value * units[from]) / units[to];
};

const PermeabilityConverter = () => (
  <ReusableConverter
    heading="Permeability Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default PermeabilityConverter;

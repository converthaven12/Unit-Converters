"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Darcy (D)": 1,
  "Millidarcy (mD)": 1e-3,
  "Square meter (m²)": 9.869233e-13,
  "Square centimeter (cm²)": 9.869233e-9
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

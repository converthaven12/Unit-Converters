"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Mol/Cubic Meter": 1,
  "Mol/Liter": 1e3,
  "Mol/Cubic Centimeter": 1e6,
  "Mol/Cubic Millimeter": 1e9,
  "Kilomol/Cubic Meter": 1e3,
  "Kilomol/Liter": 1e6,
  "Kilomol/Cubic Centimeter": 1e9,
  "Kilomol/Cubic Millimeter": 1e12,
  "Millimol/Cubic Meter": 1e-3,
  "Millimol/Liter": 1,
  "Millimol/Cubic Centimeter": 1e3,
  "Millimol/Cubic Millimeter": 1e6,
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

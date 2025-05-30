"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

// Digital image resolution can be measured in pixels per inch/cm or total pixels count (simplified)
const units: Record<string, number> = {
  "Pixels per inch (PPI)": 1,
  "Pixels per centimeter (PPCM)": 2.54,  // 1 inch = 2.54 cm, so 1 PPI = 2.54 PPCM
  "Dots per inch (DPI)": 1,              // Often interchangeable with PPI
  "Dots per centimeter (DPCM)": 2.54,
};

const convert = (value: number, from: string, to: string): number => {
  if (!(from in units) || !(to in units)) return NaN;
  return (value * units[from]) / units[to];
};

const DigitalImageResolutionConverter = () => (
  <ReusableConverter
    heading="Digital Image Resolution Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default DigitalImageResolutionConverter;

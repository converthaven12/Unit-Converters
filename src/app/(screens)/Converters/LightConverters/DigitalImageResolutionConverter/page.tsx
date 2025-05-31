"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

// Digital image resolution can be measured in pixels per inch/cm or total pixels count (simplified)
const units: Record<string, number> = {
  "Dot/meter [dot/m]": 1,
  "Dot/millimeter [dot/mm]": 1000,
  "Dot/inch [dot/in]": 39.3701,
  "Pixel/inch [pixel/in]": 39.3701,
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

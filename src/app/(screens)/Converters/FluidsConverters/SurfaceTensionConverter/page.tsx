"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Newton/Meter": 1,
  "Millinewton/Meter": 1e-3,
  "Gram-Force/Centimeter": 0.0980665,
  "Dyne/Centimeter": 1e-3,
  "Erg/Square Centimeter": 1e-3,
  "Erg/Square Millimeter": 0.1,
  "Poundal/Inch": 0.138255,
  "Pound-Force/Inch": 175.1268,
};

const convert = (value: number, from: string, to: string): number => {
  return (value * units[from]) / units[to];
};

const SurfaceTensionConverter = () => (
  <ReusableConverter
    heading="Surface Tension Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default SurfaceTensionConverter;

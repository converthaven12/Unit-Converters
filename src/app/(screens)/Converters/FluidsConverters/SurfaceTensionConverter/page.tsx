"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Newton per meter (N/m)": 1,
  "Dyne per centimeter (dyne/cm)": 0.001,
  "Millinewton per meter (mN/m)": 0.001
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

"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Pascal second (Pa·s)": 1,
  "Poise (P)": 0.1,
  "Centipoise (cP)": 0.001,
  "Millipascal second (mPa·s)": 0.001,
  "Reyn (Re)": 6894.76
};

const convert = (value: number, from: string, to: string): number => {
  return (value * units[from]) / units[to];
};

const ViscosityDynamicConverter = () => (
  <ReusableConverter
    heading="Dynamic Viscosity Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default ViscosityDynamicConverter;

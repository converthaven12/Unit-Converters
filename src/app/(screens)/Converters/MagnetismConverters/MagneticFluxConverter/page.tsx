"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const magneticFluxUnits: Record<string, number> = {
  "Weber": 1,
  "Milliweber": 1e-3,
  "Microweber": 1e-6,
  "Nanoweber": 1e-9,
  "Maxwell": 1e-8,
  "Volt-Second": 1,
};

const convert = (value: number, from: string, to: string): number => {
  const fromFactor = magneticFluxUnits[from];
  const toFactor = magneticFluxUnits[to];
  return (value * fromFactor) / toFactor;
};

const MagneticFluxConverter = () => (
  <ReusableConverter
    heading="Magnetic Flux Converter"
    units={Object.keys(magneticFluxUnits)}
    convert={convert}
  />
);

export default MagneticFluxConverter;

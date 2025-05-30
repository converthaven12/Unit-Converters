"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const magneticFluxDensityUnits: Record<string, number> = {
  "Tesla": 1,
  "Gauss": 1e-4,
  "Weber per Square Meter": 1,
  "Kilotesla": 1e3,
  "Millitesla": 1e-3,
  "Microtesla": 1e-6,
  "Nanotesla": 1e-9,
  "Gamma": 1e-9,
};

const convert = (value: number, from: string, to: string): number => {
  const fromFactor = magneticFluxDensityUnits[from];
  const toFactor = magneticFluxDensityUnits[to];
  return (value * fromFactor) / toFactor;
};

const MagneticFluxDensityConverter = () => (
  <ReusableConverter
    heading="Magnetic Flux Density Converter"
    units={Object.keys(magneticFluxDensityUnits)}
    convert={convert}
  />
);

export default MagneticFluxDensityConverter;

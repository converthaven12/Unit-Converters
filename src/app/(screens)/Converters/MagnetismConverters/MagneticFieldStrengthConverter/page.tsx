"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const magneticFieldStrengthUnits: Record<string, number> = {
  "Ampere per Meter": 1,
  "Oersted": 79.5774715459,
};

const convert = (value: number, from: string, to: string): number => {
  const fromFactor = magneticFieldStrengthUnits[from];
  const toFactor = magneticFieldStrengthUnits[to];
  return (value * fromFactor) / toFactor;
};

const MagneticFieldStrengthConverter = () => (
  <ReusableConverter
    heading="Magnetic Field Strength Converter"
    units={Object.keys(magneticFieldStrengthUnits)}
    convert={convert}
  />
);

export default MagneticFieldStrengthConverter;

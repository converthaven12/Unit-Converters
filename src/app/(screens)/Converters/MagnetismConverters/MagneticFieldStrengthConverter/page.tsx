"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const magneticFieldStrengthUnits: Record<string, number> = {
  "ampere/meter [A/m]": 1,
  "ampere turn/meter [At/m]": 1,              // equivalent to A/m
  "kiloampere/meter [kA/m]": 1000,            // 1 kA/m = 1000 A/m
  "oersted [Oe]": 79.5774715459,              // 1 Oe ≈ 79.577 A/m
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

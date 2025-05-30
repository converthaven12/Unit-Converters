"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const magnetomotiveForceUnits: Record<string, number> = {
  "Ampere-Turn": 1,
  "Gilbert": 0.795774715459,
  "Kiloampere-Turn": 1000,
  "Milliampere-Turn": 1e-3,
  "Microampere-Turn": 1e-6,
};

const convert = (value: number, from: string, to: string): number => {
  const fromFactor = magnetomotiveForceUnits[from];
  const toFactor = magnetomotiveForceUnits[to];
  return (value * fromFactor) / toFactor;
};

const MagnetomotiveForceConverter = () => (
  <ReusableConverter
    heading="Magnetomotive Force Converter"
    units={Object.keys(magnetomotiveForceUnits)}
    convert={convert}
  />
);

export default MagnetomotiveForceConverter;

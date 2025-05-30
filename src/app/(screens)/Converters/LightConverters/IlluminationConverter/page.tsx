"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Lux (lx)": 1,            // SI unit
  "Phot (ph)": 10000,       // 1 phot = 10,000 lux
  "Foot-candle (fc)": 10.7639,  // 1 fc = 10.7639 lux
  "Meter-candle (m-cd)": 1,  // Obsolete, approx lux
  "Kilolux (klx)": 1000,
};

const convert = (value: number, from: string, to: string): number => {
  if (!(from in units) || !(to in units)) return NaN;
  return (value * units[from]) / units[to];
};

const IlluminationConverter = () => (
  <ReusableConverter
    heading="Illumination Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default IlluminationConverter;

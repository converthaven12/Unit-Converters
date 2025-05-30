"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  Becquerel: 1,           // SI unit (decays per second)
  Curie: 3.7e10,          // 1 Ci = 3.7 x 10^10 Bq
  Millicurie: 3.7e7,
  Microcurie: 3.7e4,
  Kilobecquerel: 1e3,
  Megabecquerel: 1e6,
  Gigabecquerel: 1e9,
  Terabecquerel: 1e12,
};

const convert = (value: number, from: string, to: string): number => {
  if (!(from in units) || !(to in units)) return NaN;
  return (value * units[from]) / units[to];
};

const RadiationActivityConverter = () => (
  <ReusableConverter
    heading="Radiation-Activity Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default RadiationActivityConverter;

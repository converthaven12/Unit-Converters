"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Lux [lx]": 1,
  "Meter-candle [m*c]": 1,
  "Centimeter-candle [cm*c]": 10000,
  "Foot-candle [ft*c, fc]": 10.7639,
  "Flame": 20,
  "Phot [ph]": 10000,
  "Nox": 0.001,
  "Candela steradian/sq. meter": 1,
  "Lumen/square meter [lm/m²]": 1,
  "Lumen/square centimeter": 10000,
  "Lumen/square foot [lm/ft²]": 10.7639,
  "Watt/sq. cm (at 555 nm)": 683000,
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

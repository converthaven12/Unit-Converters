"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Candle (international) [c]": 1,
  "Candle (German) [c (German)]": 0.98,
  "Candle (UK) [c (UK)]": 1.02,
  "Decimal candle": 1,
  "Candle (pentane)": 0.981,
  "Pentane candle (10 candle power)": 10,
  "Hefner candle": 0.903,
  "Carcel unit": 9.61,
  "Bougie decimal": 1,
  "Lumen/steradian [lm/sr]": 1,
};

const convert = (value: number, from: string, to: string): number => {
  if (!(from in units) || !(to in units)) return NaN;
  return (value * units[from]) / units[to];
};

const LuminousIntensityConverter = () => (
  <ReusableConverter
    heading="Luminous Intensity Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default LuminousIntensityConverter;

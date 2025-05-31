"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Candela/square meter": 1,
  "Candela/square centimeter": 10000,
  "Candela/square foot": 10.7639,
  "Candela/square inch": 1550.0031,
  "Kilocandela/square meter": 1000,
  "Stilb [sb]": 10000,
  "Lumen/sq. meter/steradian": 1,
  "Lumen/sq. cm/steradian": 10000,
  "Lumen/square foot/steradian": 10.7639,
  "Watt/sq. cm/steradian (at 555 nm)": 683000,
  "Nit [nt]": 1,
  "Millinit [mnt]": 0.001,
  "Lambert [L]": 3183.098861,
  "Millilambert [mL]": 3.183098861,
  "Foot-lambert [fL]": 0.318309886,
  "Apostilb": 0.318309886,
  "Blondel": 0.318309886,
  "Bril": 1e-7,
  "Skot": 0.001
};


const convert = (value: number, from: string, to: string): number => {
  if (!(from in units) || !(to in units)) return NaN;
  return (value * units[from]) / units[to];
};

const LuminanceConverter = () => (
  <ReusableConverter
    heading="Luminance Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default LuminanceConverter;

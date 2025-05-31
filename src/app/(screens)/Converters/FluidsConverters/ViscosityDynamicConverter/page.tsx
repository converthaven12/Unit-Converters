"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Pascal Second": 1,
  "Kilogram-Force Second/Square Meter": 9.80665,
  "Newton Second/Square Meter": 1,
  "Millinewton Second/Square Meter": 1e-3,
  "Dyne Second/Square Centimeter": 0.1,
  "Poise": 0.1,
  "Exapoise": 1e17,
  "Petapoise": 1e14,
  "Terapoise": 1e11,
  "Gigapoise": 1e8,
  "Megapoise": 1e5,
  "Kilopoise": 100,
  "Hectopoise": 10,
  "Dekapoise": 1,
  "Decipoise": 0.01,
  "Centipoise": 0.001,
  "Millipoise": 1e-4,
  "Micropoise": 1e-7,
  "Nanopoise": 1e-10,
  "Picopoise": 1e-13,
  "Femtopoise": 1e-16,
  "Attopoise": 1e-19,
  "Pound-Force Second/Square Inch": 6894.76,
  "Pound-Force Second/Square Foot": 47.8803,
  "Poundal Second/Square Foot": 1.48816,
  "Gram/Centimeter/Second": 0.1,
  "Slug/Foot/Second": 47.8803,
  "Pound/Foot/Second": 1.48816,
  "Pound/Foot/Hour": 1.48816 / 3600,
};


const convert = (value: number, from: string, to: string): number => {
  return (value * units[from]) / units[to];
};

const ViscosityDynamicConverter = () => (
  <ReusableConverter
    heading="Dynamic Viscosity Converter"
    units={Object.keys(units)}
    convert={convert}
  />
);

export default ViscosityDynamicConverter;

"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Point (pt)": 1,
  "Pica (pc)": 12,
  "Inch (in)": 72,
  "Millimeter (mm)": 72 / 25.4,
  "Centimeter (cm)": (72 / 25.4) * 10,
  "Didot point": 1.07,
  "Cicero": 12.84,
};

const convert = (value: number, from: string, to: string): number => {
  return (value * units[from]) / units[to];
};

const TypographyConverter = () => (
  <ReusableConverter heading="Typography Converter" units={Object.keys(units)} convert={convert} />
);

export default TypographyConverter;

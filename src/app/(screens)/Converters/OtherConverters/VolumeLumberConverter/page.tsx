"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Board Foot": 1,
  "Cubic Foot": 12,
  "Cubic Inch": 1 / 144,
  "Cubic Meter": 423.776,
  "Cubic Yard": 3231.47,
  "Cord (Firewood)": 165,
  "Cubic Centimeter": 0.0005787,
};

const convert = (value: number, from: string, to: string): number => {
  return (value * units[from]) / units[to];
};

const VolumeLumberConverter = () => (
  <ReusableConverter heading="Volume - Lumber Converter" units={Object.keys(units)} convert={convert} />
);

export default VolumeLumberConverter;

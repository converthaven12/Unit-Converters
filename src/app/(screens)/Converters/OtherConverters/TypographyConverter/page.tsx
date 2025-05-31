"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "twip": 1 / 567,                 // 1 twip = 1/1440 inch = ~0.000175 m (approximate)
  "meter [m]": 1,
  "centimeter [cm]": 0.01,
  "millimeter [mm]": 0.001,
  "character (X)": 1,              // Usually a count, no physical length
  "character (Y)": 1,              // Usually a count, no physical length
  "pixel (X)": 1,                  // Dependent on resolution, typically no fixed physical length
  "pixel (Y)": 1,
  "inch [in]": 0.0254,
  "pica (computer)": 0.004233333, // 1 pica = 1/6 inch = 0.004233333 m
  "pica (printer's)": 0.00421752, // slightly different definition
  "PostScript point": 0.000352778, // 1 pt = 1/72 inch = 0.000352778 m
  "point (computer)": 0.000352778,
  "point (printer's)": 0.000352778,
  "en": 0.000352778,               // 1 en = 0.5 em, often equal to 1 point
};


const convert = (value: number, from: string, to: string): number => {
  return (value * units[from]) / units[to];
};

const TypographyConverter = () => (
  <ReusableConverter heading="Typography Converter" units={Object.keys(units)} convert={convert} />
);

export default TypographyConverter;

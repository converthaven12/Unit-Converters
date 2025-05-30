"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units = [
  "Percent (%)",
  "Parts per million (ppm)",
  "Parts per billion (ppb)",
  "Mole fraction",
  "Mass fraction"
];

// Helper: convert input value from 'from' unit to mole fraction (as base unit)
const toMoleFraction = (value: number, from: string): number => {
  switch (from) {
    case "Percent (%)":
      return value / 100;         // percent to mole fraction approx.
    case "Parts per million (ppm)":
      return value / 1e6;
    case "Parts per billion (ppb)":
      return value / 1e9;
    case "Mole fraction":
      return value;
    case "Mass fraction":
      // Approximate conversion assuming similar molecular weight (this is a placeholder)
      return value; // Note: For accurate conversion, molecular weights needed.
    default:
      return NaN;
  }
};

// Helper: convert mole fraction to 'to' unit
const fromMoleFraction = (value: number, to: string): number => {
  switch (to) {
    case "Percent (%)":
      return value * 100;
    case "Parts per million (ppm)":
      return value * 1e6;
    case "Parts per billion (ppb)":
      return value * 1e9;
    case "Mole fraction":
      return value;
    case "Mass fraction":
      // Approximate, see note above
      return value;
    default:
      return NaN;
  }
};

const convert = (value: number, from: string, to: string): number => {
  if (from === to) return value;
  const moleFraction = toMoleFraction(value, from);
  if (isNaN(moleFraction)) return NaN;
  return fromMoleFraction(moleFraction, to);
};

const ConcentrationSolutionConverter = () => (
  <ReusableConverter
    heading="Concentration - Solution Converter"
    units={units}
    convert={convert}
  />
);

export default ConcentrationSolutionConverter;

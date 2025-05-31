"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

// Supported units
const units = [
  "kilogram/liter [kg/L]",
  "gram/liter [g/L]",
  "milligram/liter [mg/L]",
  "part/million (ppm)",
  "grain/gallon (US) [gr/gal (US)]",
  "grain/gallon (UK) [gr/gal (UK)]",
  "pound/gallon (US)",
  "pound/gallon (UK)",
  "pound/million gallon (US)",
  "pound/million gallon (UK)",
  "pound/cubic foot [lb/ft³]"
];

// Conversion factors to base unit: gram/liter (g/L)
const toGramPerLiter = (value: number, from: string): number => {
  switch (from) {
    case "kilogram/liter [kg/L]":
      return value * 1000;
    case "gram/liter [g/L]":
      return value;
    case "milligram/liter [mg/L]":
    case "part/million (ppm)": // assuming ppm by mass in water
      return value / 1000;
    case "grain/gallon (US) [gr/gal (US)]":
      return value * 0.017118; // 1 gr/gal (US) ≈ 0.017118 g/L
    case "grain/gallon (UK) [gr/gal (UK)]":
      return value * 0.014286; // 1 gr/gal (UK) ≈ 0.014286 g/L
    case "pound/gallon (US)":
      return value * 119.826; // 1 lb/gal (US) ≈ 119.826 g/L
    case "pound/gallon (UK)":
      return value * 99.776; // 1 lb/gal (UK) ≈ 99.776 g/L
    case "pound/million gallon (US)":
      return value * 0.000119826; // ≈ g/L
    case "pound/million gallon (UK)":
      return value * 0.000099776; // ≈ g/L
    case "pound/cubic foot [lb/ft³]":
      return value * 16.0185; // 1 lb/ft³ ≈ 16.0185 g/L
    default:
      console.warn(`Unknown 'from' unit: ${from}`);
      return NaN;
  }
};

// Conversion from base unit (gram/liter) to target
const fromGramPerLiter = (value: number, to: string): number => {
  switch (to) {
    case "kilogram/liter [kg/L]":
      return value / 1000;
    case "gram/liter [g/L]":
      return value;
    case "milligram/liter [mg/L]":
    case "part/million (ppm)":
      return value * 1000;
    case "grain/gallon (US) [gr/gal (US)]":
      return value / 0.017118;
    case "grain/gallon (UK) [gr/gal (UK)]":
      return value / 0.014286;
    case "pound/gallon (US)":
      return value / 119.826;
    case "pound/gallon (UK)":
      return value / 99.776;
    case "pound/million gallon (US)":
      return value / 0.000119826;
    case "pound/million gallon (UK)":
      return value / 0.000099776;
    case "pound/cubic foot [lb/ft³]":
      return value / 16.0185;
    default:
      console.warn(`Unknown 'to' unit: ${to}`);
      return NaN;
  }
};

const convert = (value: number, from: string, to: string): number => {
  if (from === to) return value;
  const base = toGramPerLiter(value, from);
  return isNaN(base) ? NaN : fromGramPerLiter(base, to);
};

const ConcentrationSolutionConverter = () => (
  <ReusableConverter
    heading="Concentration - Solution Converter"
    units={units}
    convert={convert}
  />
);

export default ConcentrationSolutionConverter;

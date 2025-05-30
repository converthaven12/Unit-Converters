"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Yotta (Y)": 1e24,
  "Zetta (Z)": 1e21,
  "Exa (E)": 1e18,
  "Peta (P)": 1e15,
  "Tera (T)": 1e12,
  "Giga (G)": 1e9,
  "Mega (M)": 1e6,
  "Kilo (k)": 1e3,
  "Hecto (h)": 1e2,
  "Deca (da)": 1e1,
  "None": 1,
  "Deci (d)": 1e-1,
  "Centi (c)": 1e-2,
  "Milli (m)": 1e-3,
  "Micro (µ)": 1e-6,
  "Nano (n)": 1e-9,
  "Pico (p)": 1e-12,
  "Femto (f)": 1e-15,
  "Atto (a)": 1e-18,
  "Zepto (z)": 1e-21,
  "Yocto (y)": 1e-24,
};

const convert = (value: number, from: string, to: string): number => {
  return (value * units[from]) / units[to];
};

const PrefixesConverter = () => (
  <ReusableConverter heading="Prefixes Converter" units={Object.keys(units)} convert={convert} />
);

export default PrefixesConverter;

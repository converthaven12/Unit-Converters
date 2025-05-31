"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "cubic meter [m^3]": 1,
  "cubic foot [ft^3]": 0.0283168,
  "cubic inch [in^3]": 1.6387e-5,
  "board feet": 0.00235974,              // 1 board foot = 144 cubic inches = 0.00235974 m³
  "thousand board feet": 2.35974,
  "cord": 3.62456,                       // 128 cubic feet = 3.62456 m³ (commonly used cord volume)
  "cord (80 cubic ft)": 2.26513,        // specific smaller cord volume
  "cord feet": 0.0283168,                // 1 cubic foot = 0.0283168 m³ (cord feet probably same as cubic foot)
  "cunit": 0.0283168,                    // Assuming cunit ~ cubic foot for now
  "pallet": 0.5,                        // typical pallet volume (approximate, varies widely)
  "cross tie": 0.25,                    // approximate volume in m³
  "switch tie": 0.25,                   // approximate volume in m³
  "thousand square feet (1/8-inch panels)": 0.00254,  // volume = area × thickness; thickness in m
  "thousand square feet (1/4-inch panels)": 0.00508,
  "thousand square feet (3/8-inch panels)": 0.00762,
  "thousand square feet (1/2-inch panels)": 0.01016,
  "thousand square feet (3/4-inch panels)": 0.01524,
};

const convert = (value: number, from: string, to: string): number => {
  return (value * units[from]) / units[to];
};

const VolumeLumberConverter = () => (
  <ReusableConverter heading="Volume - Lumber Converter" units={Object.keys(units)} convert={convert} />
);

export default VolumeLumberConverter;

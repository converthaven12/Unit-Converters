"use client";

import React, { useState } from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units = ["bel [B]", "decibel [dB]", "neper [Np]"];

// Conversion formulas between units
const convert = (value: number, from: string, to: string): number => {
  if (from === to) return value;

  // Convert all input values first to a common base — let's use bel as base
  let valueInBel: number;

  switch (from) {
    case "bel [B]":
      valueInBel = value;
      break;
    case "decibel [dB]":
      valueInBel = value / 10; // dB to bel
      break;
    case "neper [Np]":
      valueInBel = (value * 8.6858896) / 10; // Np → dB → bel
      break;
    default:
      return NaN;
  }

  // Convert from bel to target unit
  switch (to) {
    case "bel [B]":
      return valueInBel;
    case "decibel [dB]":
      return valueInBel * 10;
    case "neper [Np]":
      return (valueInBel * 10) / 8.6858896;
    default:
      return NaN;
  }
};

const SoundConverter = () => (
  <ReusableConverter
    heading="Sound Level Converter"
    units={units}
    convert={convert}
  />
);

export default SoundConverter;

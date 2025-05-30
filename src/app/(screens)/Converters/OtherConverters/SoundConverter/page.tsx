"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const units: Record<string, number> = {
  "Decibel (dB)": 1,
  "Bel (B)": 10,
  "Pascal (Pa)": 1,
  "MicroPascal (µPa)": 1e-6,
  "Atmosphere (atm)": 101325,
  "Bar": 100000,
  "Torr": 133.322,
  "Sound Pressure Level (SPL) Reference": 20e-6, // Reference pressure in Pa
};

const convert = (value: number, from: string, to: string): number => {
  // Decibel conversions are logarithmic and context dependent,
  // so for simplicity, only convert pressure units linearly here.
  if ((from === "Decibel (dB)" || from === "Bel (B)") || (to === "Decibel (dB)" || to === "Bel (B)")) {
    // No direct linear conversion
    return NaN;
  }
  return (value * units[from]) / units[to];
};

const SoundConverter = () => (
  <ReusableConverter heading="Sound Converter" units={Object.keys(units)} convert={convert} />
);

export default SoundConverter;

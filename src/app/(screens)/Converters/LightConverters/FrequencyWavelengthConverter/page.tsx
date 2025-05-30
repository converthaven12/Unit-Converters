"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const speedOfLight = 299792458; // m/s

const units = [
  "Hertz (Hz)",
  "Kilohertz (kHz)",
  "Megahertz (MHz)",
  "Gigahertz (GHz)",
  "Wavelength (meters)",
  "Wavelength (nanometers)"
];

const convert = (value: number, from: string, to: string): number => {
  if (from === to) return value;

  if (from.includes("Hertz") && to.includes("Wavelength")) {
    let freqHz = value;
    if (from === "Kilohertz (kHz)") freqHz = value * 1e3;
    else if (from === "Megahertz (MHz)") freqHz = value * 1e6;
    else if (from === "Gigahertz (GHz)") freqHz = value * 1e9;

    let wavelengthMeters = speedOfLight / freqHz;
    if (to === "Wavelength (nanometers)") return wavelengthMeters * 1e9;
    return wavelengthMeters;
  }

  if (from.includes("Wavelength") && to.includes("Hertz")) {
    let wavelengthMeters = value;
    if (from === "Wavelength (nanometers)") wavelengthMeters = value * 1e-9;

    let freqHz = speedOfLight / wavelengthMeters;
    if (to === "Kilohertz (kHz)") return freqHz / 1e3;
    else if (to === "Megahertz (MHz)") return freqHz / 1e6;
    else if (to === "Gigahertz (GHz)") return freqHz / 1e9;
    return freqHz;
  }

  const freqUnits: Record<string, number> = {
    "Hertz (Hz)": 1,
    "Kilohertz (kHz)": 1e3,
    "Megahertz (MHz)": 1e6,
    "Gigahertz (GHz)": 1e9,
  };

  const wavelengthUnits: Record<string, number> = {
    "Wavelength (meters)": 1,
    "Wavelength (nanometers)": 1e-9,
  };

  if (from in freqUnits && to in freqUnits) {
    return (value * freqUnits[from]) / freqUnits[to];
  }

  if (from in wavelengthUnits && to in wavelengthUnits) {
    return (value * wavelengthUnits[from]) / wavelengthUnits[to];
  }

  return NaN;
};

const FrequencyWavelengthConverter = () => (
  <ReusableConverter
    heading="Frequency - Wavelength Converter"
    units={units}
    convert={convert}
  />
);

export default FrequencyWavelengthConverter;

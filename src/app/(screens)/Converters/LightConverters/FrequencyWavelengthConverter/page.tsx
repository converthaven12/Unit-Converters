"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const speedOfLight = 299792458; // m/s

const frequencyWavelengthUnits: Record<string, number> = {
  // Frequency units (Hz base)
  "Hertz [Hz]": 1,
  "Exahertz [EHz]": 1e18,
  "Petahertz [PHz]": 1e15,
  "Terahertz [THz]": 1e12,
  "Gigahertz [GHz]": 1e9,
  "Megahertz [MHz]": 1e6,
  "Kilohertz [kHz]": 1e3,
  "Hectohertz [hHz]": 1e2,
  "Dekahertz [daHz]": 1e1,
  "Decihertz [dHz]": 1e-1,
  "Centihertz [cHz]": 1e-2,
  "Millihertz [mHz]": 1e-3,
  "Microhertz [µHz]": 1e-6,
  "Nanohertz [nHz]": 1e-9,
  "Picohertz [pHz]": 1e-12,
  "Femtohertz [fHz]": 1e-15,
  "Attohertz [aHz]": 1e-18,
  "Cycle/second": 1,

  // Wavelength units (meters base)
  "Wavelength in exametres": 1e18,
  "Wavelength in petametres": 1e15,
  "Wavelength in terametres": 1e12,
  "Wavelength in gigametres": 1e9,
  "Wavelength in megametres": 1e6,
  "Wavelength in kilometres": 1e3,
  "Wavelength in hectometres": 1e2,
  "Wavelength in dekametres": 1e1,
  "Wavelength in metres [m]": 1,
  "Wavelength in decimetres": 1e-1,
  "Wavelength in centimetres [cm]": 1e-2,
  "Wavelength in millimetres [mm]": 1e-3,
  "Wavelength in micrometres": 1e-6,
  "Wavelength in nanometres [nm]": 1e-9,

  // Special wavelengths (meters)
  "Electron Compton wavelength": 2.426310238e-12,
  "Proton Compton wavelength": 1.321409856e-15,
  "Neutron Compton wavelength": 1.319590905e-15,
};

const units = Object.keys(frequencyWavelengthUnits);

const convert = (value: number, from: string, to: string): number => {
  if (from === to) return value;

  const fromIsFrequency = from.includes("Hz") || from === "Cycle/second";
  const toIsFrequency = to.includes("Hz") || to === "Cycle/second";

  const fromIsWavelength = from.startsWith("Wavelength") || from.includes("wavelength") || from.includes("Compton");
  const toIsWavelength = to.startsWith("Wavelength") || to.includes("wavelength") || to.includes("Compton");

  // Convert from frequency to frequency
  if (fromIsFrequency && toIsFrequency) {
    const baseValue = value * frequencyWavelengthUnits[from];
    return baseValue / frequencyWavelengthUnits[to];
  }

  // Convert from wavelength to wavelength
  if (fromIsWavelength && toIsWavelength) {
    const baseValue = value * frequencyWavelengthUnits[from];
    return baseValue / frequencyWavelengthUnits[to];
  }

  // Frequency to wavelength
  if (fromIsFrequency && toIsWavelength) {
    const freqHz = value * frequencyWavelengthUnits[from];
    if (freqHz === 0) return NaN;
    const wavelengthMeters = speedOfLight / freqHz;
    return wavelengthMeters / frequencyWavelengthUnits[to]; // convert base meters to target wavelength unit
  }

  // Wavelength to frequency
  if (fromIsWavelength && toIsFrequency) {
    const wavelengthMeters = value * frequencyWavelengthUnits[from];
    if (wavelengthMeters === 0) return NaN;
    const freqHz = speedOfLight / wavelengthMeters;
    return freqHz / frequencyWavelengthUnits[to]; // convert base Hz to target frequency unit
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

"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const pressureUnits: Record<string, number> = {
  Pascal: 1,
  Kilopascal: 1e3,
  Megapascal: 1e6,
  Gigapascal: 1e9,
  Terapascal: 1e12,
  Petapascal: 1e15,
  Exapascal: 1e18,
  Bar: 1e5,
  Millibar: 100,
  Hectopascal: 100,
  "Standard atmosphere (atm)": 101325,
  "Technical atmosphere": 98066.5,
  "Atmosphere technical [at]": 98066.5,
  Torr: 133.322,
  "Millimeter mercury (0°C)": 133.322,
  "Centimeter mercury (0°C)": 1333.22,
  "Inch of mercury (32°F)": 3386.39,
  "Inch of mercury (60°F)": 3370,
  "Inch of water (4°C)": 249.089,
  "Millimeter water (4°C)": 9.80665,
  "Centimeter water (4°C)": 98.0665,
  "Foot water (4°C)": 2989.07,
  "Inch water (60°F)": 248.84,
  "Foot water (60°F)": 2987,

  "Pound per square inch (psi)": 6894.76,
  "Kilopound per square inch (ksi)": 6.89476e6,
  "Kip-force per square inch": 6.89476e6,
  "Pound-force per square foot": 47.8803,
  "Poundal per square foot": 0.145038,

  "Kilogram-force per square centimeter": 98066.5,
  "Kilogram-force per square meter": 9.80665,
  "Kilogram-force per square millimeter": 9.80665e6,
  "Gram-force per square centimeter": 98.0665,

  "Newton per square meter": 1,
  "Newton per square centimeter": 1e4,
  "Newton per square millimeter": 1e6,
  "Kilonewton per square meter": 1e3,

  "Dyne per square centimeter": 0.1,

  "Ton-force (short) per square foot": 46667,
  "Ton-force (short) per square inch": 6.6667e4,
  "Ton-force (long) per square foot": 50300,
  "Ton-force (long) per square inch": 71879,
};

const PressureConverterPage: React.FC = () => {
  const convertPressure = (value: number, from: string, to: string): number => {
    const fromFactor = pressureUnits[from];
    const toFactor = pressureUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="PressureUnits Converter"
      units={Object.keys(pressureUnits)}
      convert={convertPressure}
    />
  );
};

export default PressureConverterPage;

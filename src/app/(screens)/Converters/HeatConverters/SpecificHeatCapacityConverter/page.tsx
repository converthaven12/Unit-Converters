'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const specificHeatCapacityUnits: Record<string, number> = {
  "joule/kilogram/K [J/(kg*K)]": 1,
  "joule/kilogram/°C [J/(kg*°C)]": 1,
  "joule/gram/°C [J/(g*°C)]": 1000,
  "kilojoule/kilogram/K": 1000,
  "kilojoule/kilogram/°C": 1000,
  "calorie (IT)/gram/°C": 4184,
  "calorie (IT)/gram/°F": 2324,
  "calorie (th)/gram/°C": 4184,
  "kilocalorie (IT)/kilogram/°C": 4184,
  "kilocalorie (th)/kilogram/°C": 4184,
  "kilocalorie (IT)/kilogram/K": 4184,
  "kilocalorie (th)/kilogram/K": 4184,
  "kilogram-force meter/kilogram/K": 9.80665,
  "pound-force foot/pound/°R": 4186.8,
  "Btu (IT)/pound/°F": 2326,
  "Btu (th)/pound/°F": 2320,
  "Btu (IT)/pound/°R": 4186,
  "Btu (th)/pound/°R": 4180,
  "Btu (IT)/pound/°C": 4186,
  "CHU/pound/°C [CHU/(lb*°C)]": 4186,
};

const SpecificHeatCapacityConverterPage: React.FC = () => {
  const convert = (value: number, from: string, to: string): number => {
    const fromFactor = specificHeatCapacityUnits[from];
    const toFactor = specificHeatCapacityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return value * (fromFactor / toFactor);
  };

  return (
    <ReusableConverter
      heading="Specific Heat Capacity Converter"
      units={Object.keys(specificHeatCapacityUnits)}
      convert={convert}
    />
  );
};

export default SpecificHeatCapacityConverterPage;

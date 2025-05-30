'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const electricFieldStrengthUnits: Record<string, number> = {
  "Volt per meter (V/m)": 1,
  "Statvolt per centimeter (statV/cm)": 299.792458,
  "Volt per centimeter (V/cm)": 100,
  "Kilovolt per meter (kV/m)": 1000,
  "Millivolt per meter (mV/m)": 0.001,
};

const ElectricFieldStrengthConverterPage: React.FC = () => {
  const convertElectricFieldStrength = (value: number, from: string, to: string): number => {
    const fromFactor = electricFieldStrengthUnits[from];
    const toFactor = electricFieldStrengthUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Electric Field Strength Converter"
      units={Object.keys(electricFieldStrengthUnits)}
      convert={convertElectricFieldStrength}
    />
  );
};

export default ElectricFieldStrengthConverterPage;

'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const electricFieldStrengthUnits: Record<string, number> = {
  "volt/meter [V/m]": 1,
  "kilovolt/meter [kV/m]": 1e3,
  "kilovolt/centimeter [kV/cm]": 1e5,
  "volt/centimeter [V/cm]": 100,
  "millivolt/meter [mV/m]": 1e-3,
  "microvolt/meter [µ/m]": 1e-6,
  "kilovolt/inch [kV/in]": 3.937e4,
  "volt/inch [V/in]": 39.37,
  "volt/mil [V/mil]": 3.937e4,
  "abvolt/centimeter [abV/cm]": 1e-8,
  "statvolt/centimeter [stV/cm]": 299.792458,
  "statvolt/inch [stV/in]": 11781.0,
  "newton/coulomb [N/C]": 1,
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

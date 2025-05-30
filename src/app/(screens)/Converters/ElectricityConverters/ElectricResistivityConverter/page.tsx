'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const electricResistivityUnits: Record<string, number> = {
  "Ohm meter (Ω·m)": 1,
  "Ohm centimeter (Ω·cm)": 0.01,
  "Microohm centimeter (μΩ·cm)": 1e-8,
  "Ohm millimeter (Ω·mm)": 0.001,
  "Abohm centimeter (abΩ·cm)": 1e-11,
};

const ElectricResistivityConverterPage: React.FC = () => {
  const convertElectricResistivity = (value: number, from: string, to: string): number => {
    const fromFactor = electricResistivityUnits[from];
    const toFactor = electricResistivityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Electric Resistivity Converter"
      units={Object.keys(electricResistivityUnits)}
      convert={convertElectricResistivity}
    />
  );
};

export default ElectricResistivityConverterPage;

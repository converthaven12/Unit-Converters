'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const electricResistanceUnits: Record<string, number> = {
  "Ohm (Ω)": 1,
  "Milliohm (mΩ)": 0.001,
  "Kiloohm (kΩ)": 1000,
  "Megaohm (MΩ)": 1e6,
  "Gigaohm (GΩ)": 1e9,
  "Abohm (abΩ)": 1e-9,
  "Statohm (statΩ)": 8.98755179e11,
};

const ElectricResistanceConverterPage: React.FC = () => {
  const convertElectricResistance = (value: number, from: string, to: string): number => {
    const fromFactor = electricResistanceUnits[from];
    const toFactor = electricResistanceUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Electric Resistance Converter"
      units={Object.keys(electricResistanceUnits)}
      convert={convertElectricResistance}
    />
  );
};

export default ElectricResistanceConverterPage;

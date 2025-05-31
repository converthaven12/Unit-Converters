'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const electricResistanceUnits: Record<string, number> = {
  "ohm": 1,
  "megohm": 1e6,
  "microhm": 1e-6,
  "volt/ampere [V/A]": 1,
  "reciprocal siemens [1/S]": 1,
  "abohm": 1e-9,
  "EMU of resistance": 1e-9,
  "statohm": 1.11265e12,
  "ESU of resistance": 1.11265e12,
  "Quantized Hall resistance": 25812.807, // ohms, approx
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

'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const electricResistivityUnits: Record<string, number> = {
  "ohm meter": 1,
  "ohm centimeter": 0.01,
  "ohm inch": 0.0254,
  "microhm centimeter": 1e-8,
  "microhm inch": 2.54e-8,
  "abohm centimeter": 1e-11,
  "statohm centimeter": 1.11265e10,
  "circular mil ohm/foot": 1.271e-8,
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

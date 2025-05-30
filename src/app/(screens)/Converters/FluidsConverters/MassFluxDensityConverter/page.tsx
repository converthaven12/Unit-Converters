"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";


export const massFluxUnits: Record<string, number> = {
  "Kilogram/second/square meter": 1,
  "Gram/second/square meter": 0.001,
  "Pound/second/square foot": 0.45359237 / 0.09290304,
  "Pound/hour/square foot": (0.45359237 / 0.09290304) / 3600
};

const MassFluxDensityConverter: React.FC = () => {
  const convertMassFlux = (value: number, from: string, to: string): number => {
    const fromFactor = massFluxUnits[from];
    const toFactor = massFluxUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Mass Flux Density Converter"
      units={Object.keys(massFluxUnits)}
      convert={convertMassFlux}
    />
  );
};

export default MassFluxDensityConverter;
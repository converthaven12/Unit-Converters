"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";


const massFluxUnits: Record<string, number> = {
  "Gram/Second/Square Meter": 1e-3,
  "Kilogram/Hour/Square Meter": 1 / 3600,
  "Kilogram/Hour/Square Foot": 1 / 3600 / 0.092903,
  "Kilogram/Second/Square Meter": 1,
  "Gram/Second/Square Centimeter": 1e-3 / 0.0001,
  "Pound/Hour/Square Foot": 0.453592 / 3600 / 0.092903,
  "Pound/Second/Square Foot": 0.453592 / 0.092903,
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
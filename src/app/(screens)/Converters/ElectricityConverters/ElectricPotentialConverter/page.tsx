'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const electricPotentialUnits: Record<string, number> = {
  "Volt (V)": 1,
  "Millivolt (mV)": 0.001,
  "Kilovolt (kV)": 1000,
  "Megavolt (MV)": 1e6,
  "Microvolt (μV)": 1e-6,
  "Statvolt (statV)": 299.792458,
  "Abvolt (abV)": 1e-8,
};

const ElectricPotentialConverterPage: React.FC = () => {
  const convertElectricPotential = (value: number, from: string, to: string): number => {
    const fromFactor = electricPotentialUnits[from];
    const toFactor = electricPotentialUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Electric Potential Converter"
      units={Object.keys(electricPotentialUnits)}
      convert={convertElectricPotential}
    />
  );
};

export default ElectricPotentialConverterPage;

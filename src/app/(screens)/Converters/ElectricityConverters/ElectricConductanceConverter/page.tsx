'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const electricConductanceUnits: Record<string, number> = {
  "Siemens (S)": 1,
  "Millisiemens (mS)": 0.001,
  "Microsiemens (μS)": 1e-6,
  "Nanosiemens (nS)": 1e-9,
  "Abmho (abmho)": 1e9,
};

const ElectricConductanceConverterPage: React.FC = () => {
  const convertElectricConductance = (value: number, from: string, to: string): number => {
    const fromFactor = electricConductanceUnits[from];
    const toFactor = electricConductanceUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Electric Conductance Converter"
      units={Object.keys(electricConductanceUnits)}
      convert={convertElectricConductance}
    />
  );
};

export default ElectricConductanceConverterPage;

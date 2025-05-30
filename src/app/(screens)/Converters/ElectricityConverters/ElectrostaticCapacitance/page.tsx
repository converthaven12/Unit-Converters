'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const capacitanceUnits: Record<string, number> = {
  "Farad (F)": 1,
  "Millifarad (mF)": 1e-3,
  "Microfarad (μF)": 1e-6,
  "Nanofarad (nF)": 1e-9,
  "Picofarad (pF)": 1e-12,
  "Abfarad (abF)": 1e9,
};

const ElectrostaticCapacitancePage: React.FC = () => {
  const convertCapacitance = (value: number, from: string, to: string): number => {
    const fromFactor = capacitanceUnits[from];
    const toFactor = capacitanceUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Electrostatic Capacitance Converter"
      units={Object.keys(capacitanceUnits)}
      convert={convertCapacitance}
    />
  );
};

export default ElectrostaticCapacitancePage;

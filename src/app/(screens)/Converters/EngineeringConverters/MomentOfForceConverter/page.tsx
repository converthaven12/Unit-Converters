'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const momentOfForceUnits: Record<string, number> = {
  "Newton meter (N·m)": 1,
  "Kilogram meter (kg·m)": 9.80665,
  "Pound foot (lb·ft)": 1.35582,
  "Pound inch (lb·in)": 0.1129848,
  "Ounce inch (oz·in)": 0.00706155,
};

const MomentOfForceConverterPage: React.FC = () => {
  const convertMomentOfForce = (value: number, from: string, to: string): number => {
    const fromFactor = momentOfForceUnits[from];
    const toFactor = momentOfForceUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Moment of Force Converter"
      units={Object.keys(momentOfForceUnits)}
      convert={convertMomentOfForce}
    />
  );
};

export default MomentOfForceConverterPage;

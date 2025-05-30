'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const forceUnits: Record<string, number> = {
  Newton: 1,
  Kilonewton: 1e3,
  Meganewton: 1e6,
  "Dyne": 1e-5,
  "Pound-force": 4.44822,
  "Kilogram-force": 9.80665,
  "Ounce-force": 0.2780139,
  "Poundal": 0.138255,
};

const ForceConverterPage: React.FC = () => {
  const convertForce = (value: number, from: string, to: string): number => {
    const fromFactor = forceUnits[from];
    const toFactor = forceUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Force Converter"
      units={Object.keys(forceUnits)}
      convert={convertForce}
    />
  );
};

export default ForceConverterPage;

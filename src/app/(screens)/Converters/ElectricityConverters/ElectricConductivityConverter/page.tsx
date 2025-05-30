'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const electricConductivityUnits: Record<string, number> = {
  "Siemens per meter (S/m)": 1,
  "Millisiemens per meter (mS/m)": 0.001,
  "Microsiemens per meter (μS/m)": 1e-6,
  "Siemens per centimeter (S/cm)": 100,
  "Millisiemens per centimeter (mS/cm)": 0.1,
};

const ElectricConductivityConverterPage: React.FC = () => {
  const convertElectricConductivity = (value: number, from: string, to: string): number => {
    const fromFactor = electricConductivityUnits[from];
    const toFactor = electricConductivityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Electric Conductivity Converter"
      units={Object.keys(electricConductivityUnits)}
      convert={convertElectricConductivity}
    />
  );
};

export default ElectricConductivityConverterPage;

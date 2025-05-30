'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const momentOfInertiaUnits: Record<string, number> = {
  "Kilogram meter squared (kg·m²)": 1,
  "Gram centimeter squared (g·cm²)": 1e-7,
  "Pound foot squared (lb·ft²)": 0.0421401,
  "Slug foot squared (slug·ft²)": 1.35582,
  "Ounce inch squared (oz·in²)": 8.5065e-6,
};

const MomentOfInertiaConverterPage: React.FC = () => {
  const convertMomentOfInertia = (value: number, from: string, to: string): number => {
    const fromFactor = momentOfInertiaUnits[from];
    const toFactor = momentOfInertiaUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Moment of Inertia Converter"
      units={Object.keys(momentOfInertiaUnits)}
      convert={convertMomentOfInertia}
    />
  );
};

export default MomentOfInertiaConverterPage;

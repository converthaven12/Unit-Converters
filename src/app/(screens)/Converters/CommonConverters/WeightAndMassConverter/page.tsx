"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const weightUnits: Record<string, number> = {
  Microgram: 1e-6,
  Milligram: 1e-3,
  Centigram: 1e-2,
  Decigram: 1e-1,
  Gram: 1,
  Decagram: 1e1,
  Hectogram: 1e2,
  Kilogram: 1e3,
  MetricTon: 1e6,
  Ounce: 28.349523125,
  Pound: 453.59237,
  Stone: 6350.29318,
  ShortTon: 907184.74,
  LongTon: 1016046.9088,
  Carat: 0.2,
  Grain: 0.06479891,
  Dram: 1.7718451953125,
  Pennyweight: 1.55517384,
  Scruple: 1.2959782,
  Tola: 11.6638038,
  Quintal: 100000,
  AtomicMassUnit: 1.66053906660e-24,
  SolarMass: 1.98847e30,
  EarthMass: 5.9722e24,
  PlanckMass: 2.176434e-8,
  Slug: 14593.90294,
  "Hundredweight (UK)": 50802.34544,
  "Hundredweight (US)": 45359.237,
};

const WeightAndMassConverterPage: React.FC = () => {
  const convertWeight = (value: number, from: string, to: string): number => {
    const fromFactor = weightUnits[from];
    const toFactor = weightUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Weight and Mass Converter"
      units={Object.keys(weightUnits)}
      convert={convertWeight}
    />
  );
};

export default WeightAndMassConverterPage;

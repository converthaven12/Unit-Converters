"use client";

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const weightUnits: Record<string, number> = {
  gram: 1,
  kilogram: 1000,
  milligram: 0.001,
  "ton (metric)": 1_000_000,
  pound: 453.59237,
  ounce: 28.349523125,
  carat: 0.2,
  "ton (short)": 907184.74,
  "ton (long)": 1016046.9088,
  "Atomic mass unit": 1.66053906660e-24,
  exagram: 1e18,
  petagram: 1e15,
  teragram: 1e12,
  gigagram: 1e9,
  megagram: 1e6,
  hectogram: 100,
  dekagram: 10,
  decigram: 0.1,
  centigram: 0.01,
  microgram: 1e-6,
  nanogram: 1e-9,
  picogram: 1e-12,
  femtogram: 1e-15,
  attogram: 1e-18,
  dalton: 1.66053906660e-24,
  "kilogram-force square second/meter": 1000, // Approximation same as kg
  kilopound: 453592.37,
  kip: 453592.37,
  slug: 14593.90294,
  "pound-force square second/foot": 453.59237, // Approx same as pound
  "pound (troy or apothecary)": 373.2417216,
  poundal: 14.5939,
  "ton (assay) (US)": 37323.471619,
  "ton (assay) (UK)": 37324.9831,
  "kiloton (metric)": 1e9,
  "quintal (metric)": 100000,
  "hundredweight (US)": 45359.237,
  "hundredweight (UK)": 50802.34544,
  "quarter (US)": 11339.81,
  "quarter (UK)": 12700,
  "stone (US)": 6350.29318,
  "stone (UK)": 6350.29318,
  tonne: 1_000_000,
  pennyweight: 1.55517384,
  scruple: 1.2959782,
  grain: 0.06479891,
  gamma: 1e-6,
  "talent (Biblical Hebrew)": 30000,
  "mina (Biblical Hebrew)": 500,
  "shekel (Biblical Hebrew)": 11.5,
  "bekan (Biblical Hebrew)": 2.0,
  "gerah (Biblical Hebrew)": 0.57,
  "talent (Biblical Greek)": 26000,
  "mina (Biblical Greek)": 450,
  "tetradrachma (Biblical Greek)": 17,
  "didrachma (Biblical Greek)": 8.5,
  "drachma (Biblical Greek)": 4.3,
  "denarius (Biblical Roman)": 3.9,
  "assarion (Biblical Roman)": 0.6,
  "quadrans (Biblical Roman)": 0.25,
  "lepton (Biblical Roman)": 0.15,
  "Planck mass": 2.176434e-5,
  "Electron mass (rest)": 9.10938356e-28,
  "Muon mass": 1.883531594e-25,
  "Proton mass": 1.6726219e-24,
  "Neutron mass": 1.674927471e-24,
  "Deuteron mass": 3.343583719e-24,
  "Earth's mass": 5.9722e27,
  "Sun's mass": 1.98847e33,
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

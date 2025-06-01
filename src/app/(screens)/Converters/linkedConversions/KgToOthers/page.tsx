'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 kilogram)
const weightToKilogram: Record<string, number> = {
  Gram: 0.001,
  Milligram: 1e-6,
  'Ton (metric)': 1000,
  Ounce: 0.028349523125,
  Pound: 0.45359237,
  Carat: 0.0002,
  'Ton (short)': 907.18474,
  'Ton (long)': 1016.0469088,
  'Atomic Mass Unit': 1.66053904e-27,
  Break: 1,
  Exagram: 1e15,
  Petagram: 1e12,
  Teragram: 1e9,
  Gigagram: 1e6,
  Megagram: 1000,
  Hectogram: 0.1,
  Dekagram: 0.01,
  Decigram: 0.0001,
  Centigram: 1e-5,
  Microgram: 1e-9,
  Nanogram: 1e-12,
  Picogram: 1e-15,
  Femtogram: 1e-18,
  Attogram: 1e-21,
  Dalton: 1.66053904e-27,
  'Kilogram-force Square Second/meter': 9.80665,
  Kilopound: 453.59237,
  Kip: 453.59237,
  Slug: 14.5939029,
  'Pound-force Square Second/foot': 14.5939029,
  'Pound (troy Or Apothecary)': 0.3732417216,
  Poundal: 0.014086719565,
  'Ton (assay) (US)': 0.0291667,
  'Ton (assay) (UK)': 0.0326667,
  'Kiloton (metric)': 1e6,
  'Quintal (metric)': 100,
  'Hundredweight (US)': 45.359237,
  'Hundredweight (UK)': 50.80234544,
  'Quarter (US)': 11.33980925,
  'Quarter (UK)': 12.70058636,
  'Stone (US)': 5.669904625,
  'Stone (UK)': 6.35029318,
  Tonne: 1000,
  Pennyweight: 0.00155517384,
  'Scruple (apothecary)': 0.0012959782,
  Grain: 6.479891e-5,
  Gamma: 1e-9,
  'Talent (Biblical Hebrew)': 30,
  'Mina (Biblical Hebrew)': 0.5,
  'Shekel (Biblical Hebrew)': 0.0114,
  'Bekan (Biblical Hebrew)': 0.0057,
  'Gerah (Biblical Hebrew)': 0.00057,
  'Talent (Biblical Greek)': 60,
  'Mina (Biblical Greek)': 1,
  'Tetradrachma (Biblical Greek)': 0.014,
  'Didrachma (Biblical Greek)': 0.007,
  'Drachma (Biblical Greek)': 0.0035,
  'Denarius (Biblical Roman)': 0.0031,
  'Assarion (Biblical Roman)': 0.00019375,
  'Quadrans (Biblical Roman)': 0.0000484375,
  'Lepton (Biblical Roman)': 0.00002421875,
  'Planck Mass': 2.17671e-11,
  'Electron Mass (rest)': 9.10938356e-31,
  'Muon Mass': 1.8835327e-28,
  'Proton Mass': 1.6726219e-27,
  'Neutron Mass': 1.6749275e-27,
  'Deuteron Mass': 3.3435835e-27,
  "Earth's Mass": 5.976e24,
  "Sun's Mass": 1.989e30,
};

// Convert from kilogram to target
const convert = (value: number, from: string, to: string): number => {
  const fromInKilograms = value; // Already in kilograms
  const toFactor = weightToKilogram[to];
  if (!toFactor) return 0;
  return fromInKilograms / toFactor;
};

// Prepare all unit keys (excluding 'Kilogram')
const toUnits = Object.keys(weightToKilogram).sort();

const KilogramToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Kilogram to All Units Converter"
      lockedFromUnit="Kilogram"
      units={toUnits}
      convert={convert}
    />
  );
};

export default KilogramToAllPage;
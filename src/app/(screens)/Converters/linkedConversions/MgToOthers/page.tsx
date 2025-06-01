'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 milligram)
const massFromMilligram: Record<string, number> = {
  Gram: 1e-3,
  Kilogram: 1e-6,
  'Ton (metric)': 1e-9,
  Pound: 2.20462e-6,
  Ounce: 3.5274e-5,
  Carat: 5,
  'Ton (short)': 1.10231e-9,
  'Ton (long)': 9.84207e-10,
  'Atomic Mass Unit': 6.02214076e+20,
  Break: 1.57473e-6,
  Exagram: 1e-21,
  Petagram: 1e-18,
  Teragram: 1e-15,
  Gigagram: 1e-12,
  Megagram: 1e-9,
  Hectogram: 1e-5,
  Dekagram: 1e-4,
  Decigram: 0.01,
  Centigram: 0.1,
  Microgram: 1000,
  Nanogram: 1e6,
  Picogram: 1e9,
  Femtogram: 1e12,
  Attogram: 1e15,
  Dalton: 6.02214076e+20,
  'Kilogram-force Square Second/meter': 1.01972e-4,
  Kilopound: 2.20462e-9,
  Kip: 2.20462e-9,
  Slug: 6.85218e-8,
  'Pound-force Square Second/foot': 0.00007093,
  'Pound (troy Or Apothecary)': 2.67923e-6,
  Poundal: 7.233e-5,
  'Ton (assay) (US)': 3.5274e-7,
  'Ton (assay) (UK)': 3.307e-7,
  'Kiloton (metric)': 1e-12,
  'Quintal (metric)': 1e-8,
  'Hundredweight (US)': 2.2046e-8,
  'Hundredweight (UK)': 1.9684e-8,
  'Quarter (US)': 8.8185e-9,
  'Quarter (UK)': 4.921e-9,
  'Stone (US)': 1.5747e-7,
  'Stone (UK)': 1.5747e-7,
  Tonne: 1e-9,
  Pennyweight: 0.00064301,
  'Scruple (apothecary)': 0.015432,
  Grain: 0.015432,
  Gamma: 1,
  'Talent (Biblical Hebrew)': 3.333e-8,
  'Mina (Biblical Hebrew)': 1.3333e-6,
  'Shekel (Biblical Hebrew)': 4.4444e-5,
  'Bekan (Biblical Hebrew)': 8.8889e-5,
  'Gerah (Biblical Hebrew)': 4.4444e-6,
  'Talent (Biblical Greek)': 2.857e-8,
  'Mina (Biblical Greek)': 1.1428e-6,
  'Tetradrachma (Biblical Greek)': 4.5714e-5,
  'Didrachma (Biblical Greek)': 2.2857e-5,
  'Drachma (Biblical Greek)': 1.1428e-5,
  'Denarius (Biblical Roman)': 3.409e-5,
  'Assarion (Biblical Roman)': 2.8408e-6,
  'Quadrans (Biblical Roman)': 7.102e-7,
  'Lepton (Biblical Roman)': 3.551e-7,
  'Planck Mass': 4.59e-33,
  'Electron Mass (rest)': 1.09777e+24,
  'Muon Mass': 5.62e+21,
  'Proton Mass': 6.022e+20,
  'Neutron Mass': 6.022e+20,
  'Deuteron Mass': 3.011e+20,
  "Earth's Mass": 1.674e-27,
  "Sun's Mass": 5.03e-33,
};

// Convert from milligram to target unit
const convert = (value: number, from: string, to: string): number => {
  const factor = massFromMilligram[to];
  if (!factor) return 0;
  return value * factor;
};

const toUnits = Object.keys(massFromMilligram).sort();

const MilligramToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Milligram to All Units Converter"
      lockedFromUnit="Milligram"
      units={toUnits}
      convert={convert}
    />
  );
};

export default MilligramToAllPage;

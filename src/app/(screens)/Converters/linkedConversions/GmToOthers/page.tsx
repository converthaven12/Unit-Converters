'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 gram)
const massFromGram: Record<string, number> = {
  Kilogram: 1e-3,
  Milligram: 1e3,
  'Ton (metric)': 1e-6,
  Ounce: 0.035274,
  Pound: 0.00220462,
  Carat: 5,
  'Ton (short)': 1.10231e-6,
  'Ton (long)': 9.84207e-7,
  'Atomic Mass Unit': 6.02214076e+23,
  Break: 0.00157473,
  Exagram: 1e-18,
  Petagram: 1e-15,
  Teragram: 1e-12,
  Gigagram: 1e-9,
  Megagram: 1e-6,
  Hectogram: 0.01,
  Dekagram: 0.1,
  Decigram: 10,
  Centigram: 100,
  Microgram: 1e6,
  Nanogram: 1e9,
  Picogram: 1e12,
  Femtogram: 1e15,
  Attogram: 1e18,
  Dalton: 6.02214076e+23,
  'Kilogram-force Square Second/meter': 0.101972,
  Kilopound: 2.20462e-6,
  Kip: 2.20462e-6,
  Slug: 6.85218e-5,
  'Pound-force Square Second/foot': 0.0709316,
  'Pound (troy Or Apothecary)': 0.00267923,
  Poundal: 0.07233,
  'Ton (assay) (US)': 3.5274e-4,
  'Ton (assay) (UK)': 3.307e-4,
  'Kiloton (metric)': 1e-9,
  'Quintal (metric)': 1e-5,
  'Hundredweight (US)': 2.2046e-5,
  'Hundredweight (UK)': 1.9684e-5,
  'Quarter (US)': 8.8185e-6,
  'Quarter (UK)': 4.921e-6,
  'Stone (US)': 0.00015747,
  'Stone (UK)': 0.00015747,
  Tonne: 1e-6,
  Pennyweight: 0.64301,
  'Scruple (apothecary)': 15.432,
  Grain: 15.432,
  Gamma: 1000000,
  'Talent (Biblical Hebrew)': 3.333e-5,
  'Mina (Biblical Hebrew)': 0.0013333,
  'Shekel (Biblical Hebrew)': 0.044444,
  'Bekan (Biblical Hebrew)': 0.088889,
  'Gerah (Biblical Hebrew)': 0.004444,
  'Talent (Biblical Greek)': 2.857e-5,
  'Mina (Biblical Greek)': 0.0011428,
  'Tetradrachma (Biblical Greek)': 0.045714,
  'Didrachma (Biblical Greek)': 0.022857,
  'Drachma (Biblical Greek)': 0.011428,
  'Denarius (Biblical Roman)': 0.03409,
  'Assarion (Biblical Roman)': 0.0028408,
  'Quadrans (Biblical Roman)': 0.0007102,
  'Lepton (Biblical Roman)': 0.0003551,
  'Planck Mass': 4.59e-30,
  'Electron Mass (rest)': 1.09777e+27,
  'Muon Mass': 5.62e+24,
  'Proton Mass': 6.022e+23,
  'Neutron Mass': 6.022e+23,
  'Deuteron Mass': 3.011e+23,
  "Earth's Mass": 1.674e-24,
  "Sun's Mass": 5.03e-30,
};

const convert = (value: number, from: string, to: string): number => {
  const factor = massFromGram[to];
  if (!factor) return 0;
  return value * factor;
};

const toUnits = Object.keys(massFromGram).sort();

const GramToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Gram to All Units Converter"
      lockedFromUnit="Gram"
      units={toUnits}
      convert={convert}
    />
  );
};

export default GramToAllPage;

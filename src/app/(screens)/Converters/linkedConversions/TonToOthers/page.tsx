'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 ton (metric))
const weightToTon: Record<string, number> = {
  Kilogram: 0.001,
  Gram: 1e-6,
  Milligram: 1e-9,
  Ounce: 2.834952313e-5,
  Carat: 2e-7,
  'Ton (short)': 0.0005,
  'Ton (long)': 0.000446428571,
  'Atomic Mass Unit': 6.02214129e+29,
  Break: 1,
  Exagram: 1e-12,
  Petagram: 1e-9,
  Teragram: 1e-6,
  Gigagram: 0.001,
  Megagram: 1,
  Hectogram: 0.01,
  Dekagram: 0.1,
  Decigram: 0.0001,
  Centigram: 1e-5,
  Microgram: 1e-12,
  Nanogram: 1e-15,
  Picogram: 1e-18,
  Femtogram: 1e-21,
  Attogram: 1e-24,
  Dalton: 6.02214129e+29,
  'Kilogram-force Square Second/meter': 0.000101971621,
  Pound: 0.00045359237,
  Kilopound: 4.5359237e-7,
  Kip: 4.5359237e-7,
  Slug: 1.45939029e-5,
  'Pound-force Square Second/foot': 1.45939029e-5,
  'Pound (troy Or Apothecary)': 3.732417216e-7,
  Poundal: 1.4086719565e-5,
  'Ton (assay) (US)': 2.91667e-5,
  'Ton (assay) (UK)': 3.26667e-5,
  'Kiloton (metric)': 1000,
  'Quintal (metric)': 10,
  'Hundredweight (US)': 0.0045359237,
  'Hundredweight (UK)': 0.005080234544,
  'Quarter (US)': 0.001133980925,
  'Quarter (UK)': 0.001270058636,
  'Stone (US)': 0.0005669904625,
  'Stone (UK)': 0.000635029318,
  Tonne: 1,
  Pennyweight: 1.55517384e-6,
  'Scruple (apothecary)': 1.2959782e-6,
  Grain: 6.479891e-8,
  Gamma: 1e-15,
  'Talent (Biblical Hebrew)': 3e-5,
  'Mina (Biblical Hebrew)': 0.0005,
  'Shekel (Biblical Hebrew)': 0.0114,
  'Bekan (Biblical Hebrew)': 0.0057,
  'Gerah (Biblical Hebrew)': 0.00057,
  'Talent (Biblical Greek)': 6e-5,
  'Mina (Biblical Greek)': 0.001,
  'Tetradrachma (Biblical Greek)': 0.014,
  'Didrachma (Biblical Greek)': 0.007,
  'Drachma (Biblical Greek)': 0.0035,
  'Denarius (Biblical Roman)': 0.0031,
  'Assarion (Biblical Roman)': 0.00019375,
  'Quadrans (Biblical Roman)': 0.0000484375,
  'Lepton (Biblical Roman)': 0.00002421875,
  'Planck Mass': 2.17671e-14,
  'Electron Mass (rest)': 9.10938356e-34,
  'Muon Mass': 1.8835327e-31,
  'Proton Mass': 1.6726219e-30,
  'Neutron Mass': 1.6749275e-30,
  'Deuteron Mass': 3.3435835e-30,
  "Earth's Mass": 5.976e-28,
  "Sun's Mass": 1.989e-33,
};

const convert = (value: number, from: string, to: string): number => {
  const fromInTons = value;
  const toFactor = weightToTon[to];
  if (!toFactor) return 0;
  return fromInTons / toFactor;
};

const toUnits = Object.keys(weightToTon).sort();

const TonToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Ton (metric) to All Units Converter"
      lockedFromUnit="Ton (metric)"
      units={toUnits}
      convert={convert}
    />
  );
};

export default TonToAllPage;
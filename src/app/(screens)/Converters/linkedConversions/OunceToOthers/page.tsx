'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 ounce)
const weightToOunce: Record<string, number> = {
  Kilogram: 35.27396195,
  Gram: 0.03527396195,
  Milligram: 3.527396195e-5,
  'Ton (metric)': 35273.96195,
  Pound: 16,
  Carat: 0.00705479239,
  'Ton (short)': 32000,
  'Ton (long)': 35840,
  'Atomic Mass Unit': 1.707248e+25,
  Break: 1,
  Exagram: 3.527396195e+16,
  Petagram: 3.527396195e+13,
  Teragram: 3.527396195e+10,
  Gigagram: 35273961.95,
  Megagram: 35273.96195,
  Hectogram: 3.527396195,
  Dekagram: 0.3527396195,
  Decigram: 0.03527396195,
  Centigram: 0.003527396195,
  Microgram: 3.527396195e-7,
  Nanogram: 3.527396195e-10,
  Picogram: 3.527396195e-13,
  Femtogram: 3.527396195e-16,
  Attogram: 3.527396195e-19,
  Dalton: 1.707248e+25,
  'Kilogram-force Square Second/meter': 0.27801385,
  Kilopound: 0.016,
  Kip: 0.016,
  Slug: 0.002020439,
  'Pound-force Square Second/foot': 0.002020439,
  'Pound (troy Or Apothecary)': 0.01316571429,
  Poundal: 0.00558035714,
  'Ton (assay) (US)': 0.00102857143,
  'Ton (assay) (UK)': 0.001152,
  'Kiloton (metric)': 35273.96195,
  'Quintal (metric)': 3.527396195,
  'Hundredweight (US)': 1.6,
  'Hundredweight (UK)': 1.792,
  'Quarter (US)': 0.4,
  'Quarter (UK)': 0.448,
  'Stone (US)': 0.8,
  'Stone (UK)': 0.896,
  Tonne: 35273.96195,
  Pennyweight: 0.05485714286,
  'Scruple (apothecary)': 0.04571428571,
  Grain: 0.002285714286,
  Gamma: 3.527396195e-8,
  'Talent (Biblical Hebrew)': 1.0582188585,
  'Mina (Biblical Hebrew)': 0.01763698098,
  'Shekel (Biblical Hebrew)': 0.0004030736,
  'Bekan (Biblical Hebrew)': 0.0002015368,
  'Gerah (Biblical Hebrew)': 2.015368e-5,
  'Talent (Biblical Greek)': 2.116437717,
  'Mina (Biblical Greek)': 0.03527396195,
  'Tetradrachma (Biblical Greek)': 0.0004938355,
  'Didrachma (Biblical Greek)': 0.0002469177,
  'Drachma (Biblical Greek)': 0.0001234589,
  'Denarius (Biblical Roman)': 0.000109375,
  'Assarion (Biblical Roman)': 6.8359375e-6,
  'Quadrans (Biblical Roman)': 1.708984375e-6,
  'Lepton (Biblical Roman)': 8.544921875e-7,
  'Planck Mass': 1.618944e-10,
  'Electron Mass (rest)': 3.215379726e-31,
  'Muon Mass': 5.309172492e-28,
  'Proton Mass': 5.978633201e-27,
  'Neutron Mass': 5.970403753e-27,
  'Deuteron Mass': 1.19572664e-26,
  "Earth's Mass": 2.1049628e-23,
  "Sun's Mass": 1.7636981e-29,
};

const convert = (value: number, from: string, to: string): number => {
  const fromInOunces = value;
  const toFactor = weightToOunce[to];
  if (!toFactor) return 0;
  return fromInOunces / toFactor;
};

const toUnits = Object.keys(weightToOunce).sort();

const OunceToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Ounce to All Units Converter"
      lockedFromUnit="Ounce"
      units={toUnits}
      convert={convert}
    />
  );
};

export default OunceToAllPage;
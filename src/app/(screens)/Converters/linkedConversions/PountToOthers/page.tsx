'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 pound)
const weightToPound: Record<string, number> = {
  Kilogram: 2.20462262,
  Gram: 0.00220462262,
  Milligram: 2.20462262e-6,
  'Ton (metric)': 2204.62262,
  Ounce: 0.0625,
  Carat: 0.000440924524,
  'Ton (short)': 2000,
  'Ton (long)': 2240,
  'Atomic Mass Unit': 1.06703e+26,
  Break: 1,
  Exagram: 2.20462262e+15,
  Petagram: 2.20462262e+12,
  Teragram: 2204622620,
  Gigagram: 2204622.62,
  Megagram: 2204.62262,
  Hectogram: 0.220462262,
  Dekagram: 0.0220462262,
  Decigram: 0.00220462262,
  Centigram: 0.000220462262,
  Microgram: 2.20462262e-7,
  Nanogram: 2.20462262e-10,
  Picogram: 2.20462262e-13,
  Femtogram: 2.20462262e-16,
  Attogram: 2.20462262e-19,
  Dalton: 1.06703e+26,
  'Kilogram-force Square Second/meter': 0.06972639,
  Kilopound: 0.001,
  Kip: 0.001,
  Slug: 0.0321740486,
  'Pound-force Square Second/foot': 0.0321740486,
  'Pound (troy Or Apothecary)': 0.000822857143,
  Poundal: 0.000348772727,
  'Ton (assay) (US)': 0.000064285714,
  'Ton (assay) (UK)': 0.000072,
  'Kiloton (metric)': 2204.62262,
  'Quintal (metric)': 0.220462262,
  'Hundredweight (US)': 0.1,
  'Hundredweight (UK)': 0.112,
  'Quarter (US)': 0.025,
  'Quarter (UK)': 0.028,
  'Stone (US)': 0.05,
  'Stone (UK)': 0.056,
  Tonne: 2204.62262,
  Pennyweight: 0.003428571429,
  'Scruple (apothecary)': 0.002857142857,
  Grain: 0.0001428571429,
  Gamma: 2.20462262e-9,
  'Talent (Biblical Hebrew)': 0.06613867866,
  'Mina (Biblical Hebrew)': 0.001102311311,
  'Shekel (Biblical Hebrew)': 2.51968e-5,
  'Bekan (Biblical Hebrew)': 1.25984e-5,
  'Gerah (Biblical Hebrew)': 1.25984e-6,
  'Talent (Biblical Greek)': 0.1322773573,
  'Mina (Biblical Greek)': 0.00220462262,
  'Tetradrachma (Biblical Greek)': 3.0864719e-5,
  'Didrachma (Biblical Greek)': 1.543236e-5,
  'Drachma (Biblical Greek)': 7.71618e-6,
  'Denarius (Biblical Roman)': 6.8359375e-6,
  'Assarion (Biblical Roman)': 4.272460938e-7,
  'Quadrans (Biblical Roman)': 1.068115234e-7,
  'Lepton (Biblical Roman)': 5.340576172e-8,
  'Planck Mass': 1.01184e-11,
  'Electron Mass (rest)': 2.009612329e-32,
  'Muon Mass': 3.318232808e-29,
  'Proton Mass': 3.736645751e-28,
  'Neutron Mass': 3.731502346e-28,
  'Deuteron Mass': 7.4732915e-28,
  "Earth's Mass": 1.3156017e-24,
  "Sun's Mass": 1.1023113e-30,
};

const convert = (value: number, from: string, to: string): number => {
  const fromInPounds = value;
  const toFactor = weightToPound[to];
  if (!toFactor) return 0;
  return fromInPounds / toFactor;
};

const toUnits = Object.keys(weightToPound).sort();

const PoundToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Pound to All Units Converter"
      lockedFromUnit="Pound"
      units={toUnits}
      convert={convert}
    />
  );
};

export default PoundToAllPage;
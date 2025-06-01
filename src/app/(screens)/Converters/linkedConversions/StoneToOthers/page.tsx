'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 stone (US))
const weightToStoneUS: Record<string, number> = {
  Kilogram: 5.669904625,
  Gram: 0.005669904625,
  Milligram: 5.669904625e-6,
  'Ton (metric)': 5669.904625,
  Ounce: 1.25,
  Carat: 0.001133980925,
  'Ton (short)': 4000,
  'Ton (long)': 4480,
  'Atomic Mass Unit': 3.4136e+26,
  Break: 1,
  Exagram: 5.669904625e+15,
  Petagram: 5.669904625e+12,
  Teragram: 5669904625,
  Gigagram: 5669904.625,
  Megagram: 5669.904625,
  Hectogram: 0.5669904625,
  Dekagram: 0.05669904625,
  Decigram: 0.005669904625,
  Centigram: 0.0005669904625,
  Microgram: 5.669904625e-7,
  Nanogram: 5.669904625e-10,
  Picogram: 5.669904625e-13,
  Femtogram: 5.669904625e-16,
  Attogram: 5.669904625e-19,
  Dalton: 3.4136e+26,
  'Kilogram-force Square Second/meter': 0.17871539,
  Pound: 0.125,
  Kilopound: 0.002,
  Kip: 0.002,
  Slug: 0.00405017,
  'Pound-force Square Second/foot': 0.00405017,
  'Pound (troy Or Apothecary)': 0.002057142857,
  Poundal: 0.000871931818,
  'Ton (assay) (US)': 0.000160714286,
  'Ton (assay) (UK)': 0.00018,
  'Kiloton (metric)': 5669.904625,
  'Quintal (metric)': 0.5669904625,
  'Hundredweight (US)': 0.2,
  'Hundredweight (UK)': 0.224,
  'Quarter (US)': 0.05,
  'Quarter (UK)': 0.056,
  'Stone (UK)': 0.112,
  Tonne: 5669.904625,
  Pennyweight: 0.008571428571,
  'Scruple (apothecary)': 0.007142857143,
  Grain: 0.0003571428571,
  Gamma: 5.669904625e-9,
  'Talent (Biblical Hebrew)': 0.1698466331,
  'Mina (Biblical Hebrew)': 0.002830777218,
  'Shekel (Biblical Hebrew)': 6.47034793e-5,
  'Bekan (Biblical Hebrew)': 3.23517396e-5,
  'Gerah (Biblical Hebrew)': 3.23517396e-6,
  'Talent (Biblical Greek)': 0.3396932662,
  'Mina (Biblical Greek)': 0.005669904625,
  'Tetradrachma (Biblical Greek)': 7.92886648e-5,
  'Didrachma (Biblical Greek)': 3.96443324e-5,
  'Drachma (Biblical Greek)': 1.98221662e-5,
  'Denarius (Biblical Roman)': 1.75510204e-5,
  'Assarion (Biblical Roman)': 1.096938775e-6,
  'Quadrans (Biblical Roman)': 2.742346938e-7,
  'Lepton (Biblical Roman)': 1.371173469e-7,
  'Planck Mass': 2.59968e-11,
  'Electron Mass (rest)': 5.1622294e-32,
  'Muon Mass': 8.523076e-29,
  'Proton Mass': 9.598213e-28,
  'Neutron Mass': 9.585856e-28,
  'Deuteron Mass': 1.9196426e-27,
  "Earth's Mass": 3.379936e-24,
  "Sun's Mass": 2.8307772e-30,
};

const convert = (value: number, from: string, to: string): number => {
  const fromInStoneUS = value;
  const toFactor = weightToStoneUS[to];
  if (!toFactor) return 0;
  return fromInStoneUS / toFactor;
};

const toUnits = Object.keys(weightToStoneUS).sort();

const StoneUSToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Stone (US) to All Units Converter"
      lockedFromUnit="Stone (US)"
      units={toUnits}
      convert={convert}
    />
  );
};

export default StoneUSToAllPage;
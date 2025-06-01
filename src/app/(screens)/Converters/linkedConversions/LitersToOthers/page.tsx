'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 liter)
const volumeToLiter: Record<string, number> = {
  'Cubic Meter': 1000,
  'Cubic Kilometer': 1e12,
  'Cubic Centimeter': 0.001,
  'Cubic Millimeter': 1e-6,
  'Milliliter': 0.001,
  'Gallon (US)': 3.785411784,
  'Quart (US)': 0.946352946,
  'Pint (US)': 0.473176473,
  'Cup (US)': 0.2365882365,
  'Tablespoon (US)': 0.0147867648,
  'Teaspoon (US)': 0.0049289216,
  'Cubic Mile': 4.16818183e12,
  'Cubic Yard': 764.554857984,
  'Cubic Foot': 28.316846592,
  'Cubic Inch': 0.016387064,
  'Break': 1,
  'Cubic Decimeter': 1,
  'Exaliter': 1e18,
  'Petaliter': 1e15,
  'Teraliter': 1e12,
  'Gigaliter': 1e9,
  'Megaliter': 1e6,
  'Kiloliter': 1,
  'Hectoliter': 0.1,
  'Dekaliter': 0.01,
  'Deciliter': 0.1,
  'Centiliter': 0.01,
  'Microliter': 1e-6,
  'Nanoliter': 1e-9,
  'Picoliter': 1e-12,
  'Femtoliter': 1e-15,
  'Attoliter': 1e-18,
  'Cc': 0.001,
  'Drop': 0.00005,
  'Barrel (oil)': 158.987294928,
  'Barrel (US)': 119.240471196,
  'Barrel (UK)': 163.65924,
  'Gallon (UK)': 4.54609,
  'Quart (UK)': 1.1365225,
  'Pint (UK)': 0.56826125,
  'Cup (metric)': 0.25,
  'Cup (UK)': 0.284130625,
  'Fluid Ounce (US)': 0.0295735296,
  'Fluid Ounce (UK)': 0.0284130625,
  'Tablespoon (metric)': 0.015,
  'Tablespoon (UK)': 0.017758164,
  'Dessertspoon (US)': 0.0098578432,
  'Dessertspoon (UK)': 0.011838776,
  'Teaspoon (metric)': 0.005,
  'Teaspoon (UK)': 0.005919388,
  'Gill (US)': 0.11829411825,
  'Gill (UK)': 0.1420653125,
  'Minim (US)': 0.00006161152,
  'Minim (UK)': 0.00005919388,
  'Ton Register': 2.8316846592,
  'Ccf': 2.8316846592,
  'Hundred-cubic Foot': 2.8316846592,
  'Acre-foot': 1233.48183754752,
  'Acre-foot (US Survey)': 1233.4892384681,
  'Acre-inch': 102.79015312896,
  'Dekastere': 10,
  'Stere': 1,
  'Decistere': 0.1,
  'Cord': 3.624556363776,
  'Tun': 0.953923769568,
  'Hogshead': 0.238480942392,
  'Board Foot': 0.002359737216,
  'Dram': 0.0036966912,
  'Cor (Biblical)': 0.22,
  'Homer (Biblical)': 0.22,
  'Bath (Biblical)': 0.022,
  'Hin (Biblical)': 0.0036666667,
  'Cab (Biblical)': 0.0009166667,
  'Log (Biblical)': 0.0003055556,
  'Taza (Spanish)': 0.0002365882,
  "Earth's Volume": 1.083e21
};

const convert = (value: number, from: string, to: string): number => {
  const fromInLiters = value;
  const toFactor = volumeToLiter[to];
  if (!toFactor) return 0;
  return fromInLiters / toFactor;
};

const toUnits = Object.keys(volumeToLiter).sort();

const LiterToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Liter to All Units Converter"
      lockedFromUnit="Liter"
      units={toUnits}
      convert={convert}
    />
  );
};

export default LiterToAllPage;
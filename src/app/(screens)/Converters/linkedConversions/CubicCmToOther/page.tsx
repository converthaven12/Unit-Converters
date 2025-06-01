'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 cubic centimeter)
const volumeToCubicCm: Record<string, number> = {
  'Cubic Meter': 1e6,
  'Cubic Kilometer': 1e15,
  'Cubic Millimeter': 0.001,
  'Liter': 1000,
  'Gallon (US)': 3785.411784,
  'Quart (US)': 946.352946,
  'Pint (US)': 473.176473,
  'Cup (US)': 236.5882365,
  'Tablespoon (US)': 14.7867648,
  'Teaspoon (US)': 4.9289216,
  'Cubic Mile': 4.16818183e15,
  'Cubic Yard': 764554.857984,
  'Cubic Foot': 28316.846592,
  'Cubic Inch': 16.387064,
  'Break': 1000,
  'Cubic Decimeter': 1000,
  'Exaliter': 1e21,
  'Petaliter': 1e18,
  'Teraliter': 1e15,
  'Gigaliter': 1e12,
  'Megaliter': 1e9,
  'Kiloliter': 1e6,
  'Hectoliter': 1e5,
  'Dekaliter': 1e4,
  'Deciliter': 100,
  'Centiliter': 10,
  'Milliliter': 1,
  'Microliter': 0.001,
  'Nanoliter': 1e-6,
  'Picoliter': 1e-9,
  'Femtoliter': 1e-12,
  'Attoliter': 1e-15,
  'Cc': 1,
  'Drop': 0.05,
  'Barrel (oil)': 158987.294928,
  'Barrel (US)': 119240.471196,
  'Barrel (UK)': 163659.24,
  'Gallon (UK)': 4546.09,
  'Quart (UK)': 1136.5225,
  'Pint (UK)': 568.26125,
  'Cup (metric)': 250,
  'Cup (UK)': 284.130625,
  'Fluid Ounce (US)': 29.5735296,
  'Fluid Ounce (UK)': 28.4130625,
  'Tablespoon (metric)': 15,
  'Tablespoon (UK)': 17.758164,
  'Dessertspoon (US)': 9.8578432,
  'Dessertspoon (UK)': 11.838776,
  'Teaspoon (metric)': 5,
  'Teaspoon (UK)': 5.919388,
  'Gill (US)': 118.29411825,
  'Gill (UK)': 142.0653125,
  'Minim (US)': 0.06161152,
  'Minim (UK)': 0.05919388,
  'Ton Register': 2831.6846592,
  'Ccf': 2831.6846592,
  'Hundred-cubic Foot': 2831.6846592,
  'Acre-foot': 1.23348184e9,
  'Acre-foot (US Survey)': 1.23348924e9,
  'Acre-inch': 1.02790153e8,
  'Dekastere': 1e7,
  'Stere': 1e6,
  'Decistere': 1e5,
  'Cord': 3.62455636e6,
  'Tun': 953923.769568,
  'Hogshead': 238480.942392,
  'Board Foot': 2359.737216,
  'Dram': 3.6966912,
  'Cor (Biblical)': 220000,
  'Homer (Biblical)': 220000,
  'Bath (Biblical)': 22000,
  'Hin (Biblical)': 3666.6667,
  'Cab (Biblical)': 916.6667,
  'Log (Biblical)': 305.5556,
  'Taza (Spanish)': 236.5882,
  "Earth's Volume": 1.083e24
};

const convert = (value: number, from: string, to: string): number => {
  const fromInCubicCm = value;
  const toFactor = volumeToCubicCm[to];
  if (!toFactor) return 0;
  return fromInCubicCm / toFactor;
};

const toUnits = Object.keys(volumeToCubicCm).sort();

const CubicCmToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Cubic Centimeter to All Units Converter"
      lockedFromUnit="Cubic Centimeter"
      units={toUnits}
      convert={convert}
    />
  );
};

export default CubicCmToAllPage;
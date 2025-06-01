'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 fluid ounce (US))
const volumeToFluidOunce: Record<string, number> = {
  'Cubic Meter': 33814.0227,
  'Cubic Kilometer': 3.38140227e13,
  'Cubic Centimeter': 0.0338140227,
  'Cubic Millimeter': 3.38140227e-5,
  'Liter': 33.8140227,
  'Milliliter': 0.0338140227,
  'Gallon (US)': 128,
  'Quart (US)': 32,
  'Pint (US)': 16,
  'Cup (US)': 8,
  'Tablespoon (US)': 0.5,
  'Teaspoon (US)': 0.1666666667,
  'Cubic Mile': 1.39465244e14,
  'Cubic Yard': 25852.6753247,
  'Cubic Foot': 957.506493506,
  'Cubic Inch': 0.5541125541,
  'Break': 33.8140227,
  'Cubic Decimeter': 33.8140227,
  'Exaliter': 3.38140227e19,
  'Petaliter': 3.38140227e16,
  'Teraliter': 3.38140227e13,
  'Gigaliter': 3.38140227e10,
  'Megaliter': 3.38140227e7,
  'Kiloliter': 33814.0227,
  'Hectoliter': 3381.40227,
  'Dekaliter': 338.140227,
  'Deciliter': 33.8140227,
  'Centiliter': 3.38140227,
  'Microliter': 3.38140227e-5,
  'Nanoliter': 3.38140227e-8,
  'Picoliter': 3.38140227e-11,
  'Femtoliter': 3.38140227e-14,
  'Attoliter': 3.38140227e-17,
  'Cc': 0.0338140227,
  'Drop': 0.0016907011,
  'Barrel (oil)': 5376,
  'Barrel (US)': 4032,
  'Barrel (UK)': 5533.97725672,
  'Gallon (UK)': 153.721590465,
  'Quart (UK)': 38.4303976163,
  'Pint (UK)': 19.2151988081,
  'Cup (metric)': 8,
  'Cup (UK)': 9.607599404,
  'Fluid Ounce (UK)': 0.9607599404,
  'Tablespoon (metric)': 0.563127045,
  'Tablespoon (UK)': 0.60047496275,
  'Dessertspoon (US)': 0.3333333333,
  'Dessertspoon (UK)': 0.4003166418,
  'Teaspoon (metric)': 0.1690701135,
  'Teaspoon (UK)': 0.2001583209,
  'Gill (US)': 8,
  'Gill (UK)': 4.803799702,
  'Minim (US)': 0.0416666667,
  'Minim (UK)': 0.0400316642,
  'Ton Register': 957.506493506,
  'Ccf': 957.506493506,
  'Hundred-cubic Foot': 957.506493506,
  'Acre-foot': 4.1245802e7,
  'Acre-foot (US Survey)': 4.1246995e7,
  'Acre-inch': 3.43715e6,
  'Dekastere': 338140.227,
  'Stere': 33814.0227,
  'Decistere': 3381.40227,
  'Cord': 12256.0831169,
  'Tun': 32256,
  'Hogshead': 8064,
  'Board Foot': 79.7922077922,
  'Dram': 0.25,
  'Cor (Biblical)': 7439.0849304,
  'Homer (Biblical)': 7439.0849304,
  'Bath (Biblical)': 743.90849304,
  'Hin (Biblical)': 123.98474884,
  'Cab (Biblical)': 30.99618721,
  'Log (Biblical)': 10.3320624033,
  'Taza (Spanish)': 8,
  "Earth's Volume": 3.6608e22
};

const convert = (value: number, from: string, to: string): number => {
  const fromInFluidOunces = value;
  const toFactor = volumeToFluidOunce[to];
  if (!toFactor) return 0;
  return fromInFluidOunces / toFactor;
};

const toUnits = Object.keys(volumeToFluidOunce).sort();

const FluidOunceToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Fluid Ounce (US) to All Units Converter"
      lockedFromUnit="Fluid Ounce (US)"
      units={toUnits}
      convert={convert}
    />
  );
};

export default FluidOunceToAllPage;
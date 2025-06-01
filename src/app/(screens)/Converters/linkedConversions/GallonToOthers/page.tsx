'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 gallon (US))
const volumeToGallon: Record<string, number> = {
  'Cubic Meter': 264.172052,
  'Cubic Kilometer': 2.64172052e11,
  'Cubic Centimeter': 0.000264172052,
  'Cubic Millimeter': 2.64172052e-7,
  'Liter': 3.785411784,
  'Quart (US)': 0.25,
  'Pint (US)': 0.125,
  'Cup (US)': 0.0625,
  'Tablespoon (US)': 0.00390625,
  'Teaspoon (US)': 0.0013020833,
  'Cubic Mile': 1.08958222e12,
  'Cubic Yard': 201.974025974,
  'Cubic Foot': 7.4805194805,
  'Cubic Inch': 0.0043290043,
  'Break': 3.785411784,
  'Cubic Decimeter': 3.785411784,
  'Exaliter': 3.78541178e18,
  'Petaliter': 3.78541178e15,
  'Teraliter': 3.78541178e12,
  'Gigaliter': 3.78541178e9,
  'Megaliter': 3.78541178e6,
  'Kiloliter': 3785.411784,
  'Hectoliter': 378.5411784,
  'Dekaliter': 37.85411784,
  'Deciliter': 3.785411784,
  'Centiliter': 0.3785411784,
  'Milliliter': 0.003785411784,
  'Microliter': 3.78541178e-6,
  'Nanoliter': 3.78541178e-9,
  'Picoliter': 3.78541178e-12,
  'Femtoliter': 3.78541178e-15,
  'Attoliter': 3.78541178e-18,
  'Cc': 0.003785411784,
  'Drop': 0.0001892706,
  'Barrel (oil)': 42,
  'Barrel (US)': 31.5,
  'Barrel (UK)': 43.234197318,
  'Gallon (UK)': 1.2009499255,
  'Quart (UK)': 0.300237481375,
  'Pint (UK)': 0.150118740688,
  'Cup (metric)': 0.0625,
  'Cup (UK)': 0.0750593703,
  'Fluid Ounce (US)': 0.0078125,
  'Fluid Ounce (UK)': 0.007505937,
  'Tablespoon (metric)': 0.004399385,
  'Tablespoon (UK)': 0.0046893356,
  'Dessertspoon (US)': 0.0013020833,
  'Dessertspoon (UK)': 0.0031274875,
  'Teaspoon (metric)': 0.0013208601,
  'Teaspoon (UK)': 0.0015637438,
  'Gill (US)': 0.0625,
  'Gill (UK)': 0.0375296852,
  'Minim (US)': 0.0003255208,
  'Minim (UK)': 0.0003127488,
  'Ton Register': 7.4805194805,
  'Ccf': 7.4805194805,
  'Hundred-cubic Foot': 7.4805194805,
  'Acre-foot': 322185.325,
  'Acre-foot (US Survey)': 322242.15,
  'Acre-inch': 26852.1105,
  'Dekastere': 3785.411784,
  'Stere': 378.5411784,
  'Decistere': 37.85411784,
  'Cord': 95.7506493506,
  'Tun': 252,
  'Hogshead': 63,
  'Board Foot': 0.6233766234,
  'Dram': 0.001953125,
  'Cor (Biblical)': 58.1178510188,
  'Homer (Biblical)': 58.1178510188,
  'Bath (Biblical)': 5.8117851019,
  'Hin (Biblical)': 0.9686308545,
  'Cab (Biblical)': 0.2421577136,
  'Log (Biblical)': 0.0807192379,
  'Taza (Spanish)': 0.0625,
  "Earth's Volume": 2.86e20
};

const convert = (value: number, from: string, to: string): number => {
  const fromInGallons = value;
  const toFactor = volumeToGallon[to];
  if (!toFactor) return 0;
  return fromInGallons / toFactor;
};

const toUnits = Object.keys(volumeToGallon).sort();

const GallonToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Gallon (US) to All Units Converter"
      lockedFromUnit="Gallon (US)"
      units={toUnits}
      convert={convert}
    />
  );
};

export default GallonToAllPage;
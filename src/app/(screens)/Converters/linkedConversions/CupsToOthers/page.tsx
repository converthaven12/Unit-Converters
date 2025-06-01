'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 cup (US))
const volumeToCup: Record<string, number> = {
  'Cubic Meter': 4226.75283773,
  'Cubic Kilometer': 4.22675284e12,
  'Cubic Centimeter': 0.2365882365,
  'Cubic Millimeter': 0.0002365882365,
  'Liter': 4.22675283773,
  'Milliliter': 0.00422675283773,
  'Gallon (US)': 16,
  'Quart (US)': 4,
  'Pint (US)': 2,
  'Tablespoon (US)': 0.0625,
  'Teaspoon (US)': 0.0208333333,
  'Cubic Mile': 1.76178743e13,
  'Cubic Yard': 3231.58441558,
  'Cubic Foot': 119.688311688,
  'Cubic Inch': 0.0692640693,
  'Break': 4.22675283773,
  'Cubic Decimeter': 4.22675283773,
  'Exaliter': 4.22675284e18,
  'Petaliter': 4.22675284e15,
  'Teraliter': 4.22675284e12,
  'Gigaliter': 4.22675284e9,
  'Megaliter': 4.22675284e6,
  'Kiloliter': 4226.75283773,
  'Hectoliter': 422.675283773,
  'Dekaliter': 42.2675283773,
  'Deciliter': 4.22675283773,
  'Centiliter': 0.422675283773,
  'Microliter': 4.22675284e-7,
  'Nanoliter': 4.22675284e-10,
  'Picoliter': 4.22675284e-13,
  'Femtoliter': 4.22675284e-16,
  'Attoliter': 4.22675284e-19,
  'Cc': 0.2365882365,
  'Drop': 0.0118294118,
  'Barrel (oil)': 672,
  'Barrel (US)': 504,
  'Barrel (UK)': 691.74715709,
  'Gallon (UK)': 19.2151988081,
  'Quart (UK)': 4.803799702,
  'Pint (UK)': 2.401899851,
  'Cup (metric)': 1,
  'Cup (UK)': 1.2009499255,
  'Fluid Ounce (US)': 0.125,
  'Fluid Ounce (UK)': 0.12009499255,
  'Tablespoon (metric)': 0.0703901595,
  'Tablespoon (UK)': 0.0750593703,
  'Dessertspoon (US)': 0.0416666667,
  'Dessertspoon (UK)': 0.0500395802,
  'Teaspoon (metric)': 0.0211337642,
  'Teaspoon (UK)': 0.0250197901,
  'Gill (US)': 0.5,
  'Gill (UK)': 0.60047496275,
  'Minim (US)': 0.0026041667,
  'Minim (UK)': 0.002501979,
  'Ton Register': 119.688311688,
  'Ccf': 119.688311688,
  'Hundred-cubic Foot': 119.688311688,
  'Acre-foot': 5.2137877e6,
  'Acre-foot (US Survey)': 5.2138746e6,
  'Acre-inch': 434482.308,
  'Dekastere': 42267.5283773,
  'Stere': 4226.75283773,
  'Decistere': 422.675283773,
  'Cord': 1532.01038961,
  'Tun': 4032,
  'Hogshead': 1008,
  'Board Foot': 9.974025974,
  'Dram': 0.015625,
  'Cor (Biblical)': 929.88562037,
  'Homer (Biblical)': 929.88562037,
  'Bath (Biblical)': 92.988562037,
  'Hin (Biblical)': 15.4980936728,
  'Cab (Biblical)': 3.8745234182,
  'Log (Biblical)': 1.2915078061,
  'Taza (Spanish)': 1,
  "Earth's Volume": 4.576e21
};

const convert = (value: number, from: string, to: string): number => {
  const fromInCups = value;
  const toFactor = volumeToCup[to];
  if (!toFactor) return 0;
  return fromInCups / toFactor;
};

const toUnits = Object.keys(volumeToCup).sort();

const CupToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Cup (US) to All Units Converter"
      lockedFromUnit="Cup (US)"
      units={toUnits}
      convert={convert}
    />
  );
};

export default CupToAllPage;
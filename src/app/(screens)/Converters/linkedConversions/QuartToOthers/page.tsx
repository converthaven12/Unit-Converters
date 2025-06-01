'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 quart (US))
const volumeToQuart: Record<string, number> = {
  'Cubic Meter': 1056.68821,
  'Cubic Kilometer': 1.05668821e12,
  'Cubic Centimeter': 0.00105668821,
  'Cubic Millimeter': 1.05668821e-6,
  'Milliliter': 0.00105668821,
  'Gallon (US)': 4,
  'Pint (US)': 2,
  'Cup (US)': 0.5,
  'Tablespoon (US)': 0.03125,
  'Teaspoon (US)': 0.0104166667,
  'Cubic Mile': 4.35828886e12,
  'Cubic Yard': 807.896103896,
  'Cubic Foot': 29.9220779221,
  'Cubic Inch': 0.0173160173,
  'Break': 1.05668821,
  'Cubic Decimeter': 1.05668821,
  'Liter': 1.05668821,
  'Exaliter': 1.05668821e18,
  'Petaliter': 1.05668821e15,
  'Teraliter': 1.05668821e12,
  'Gigaliter': 1.05668821e9,
  'Megaliter': 1.05668821e6,
  'Kiloliter': 1056.68821,
  'Hectoliter': 105.668821,
  'Dekaliter': 10.5668821,
  'Deciliter': 1.05668821,
  'Centiliter': 0.105668821,
  'Microliter': 1.05668821e-6,
  'Nanoliter': 1.05668821e-9,
  'Picoliter': 1.05668821e-12,
  'Femtoliter': 1.05668821e-15,
  'Attoliter': 1.05668821e-18,
  'Cc': 0.00105668821,
  'Drop': 0.0000528344,
  'Barrel (oil)': 168,
  'Barrel (US)': 126,
  'Barrel (UK)': 172.936789272,
  'Gallon (UK)': 4.803799702,
  'Quart (UK)': 1.2009499255,
  'Pint (UK)': 0.60047496275,
  'Cup (metric)': 0.25,
  'Cup (UK)': 0.300237481375,
  'Fluid Ounce (US)': 0.03125,
  'Fluid Ounce (UK)': 0.0300237481375,
  'Tablespoon (metric)': 0.0175975399,
  'Tablespoon (UK)': 0.0187573426,
  'Dessertspoon (US)': 0.0104166667,
  'Dessertspoon (UK)': 0.0125099501,
  'Teaspoon (metric)': 0.005283441,
  'Teaspoon (UK)': 0.006254975,
  'Gill (US)': 0.25,
  'Gill (UK)': 0.150118740688,
  'Minim (US)': 0.0013020833,
  'Minim (UK)': 0.0012509975,
  'Ton Register': 29.9220779221,
  'Ccf': 29.9220779221,
  'Hundred-cubic Foot': 29.9220779221,
  'Acre-foot': 1.2889313e6,
  'Acre-foot (US Survey)': 1.2889686e6,
  'Acre-inch': 107410.938,
  'Dekastere': 10566.8821,
  'Stere': 1056.68821,
  'Decistere': 105.668821,
  'Cord': 383.002597403,
  'Tun': 1008,
  'Hogshead': 252,
  'Board Foot': 2.4935064935,
  'Dram': 0.0078125,
  'Cor (Biblical)': 232.471404075,
  'Homer (Biblical)': 232.471404075,
  'Bath (Biblical)': 23.2471404075,
  'Hin (Biblical)': 3.8745234182,
  'Cab (Biblical)': 0.9686308545,
  'Log (Biblical)': 0.3228769515,
  'Taza (Spanish)': 0.25,
  "Earth's Volume": 1.144e21
};

const convert = (value: number, from: string, to: string): number => {
  const fromInQuarts = value;
  const toFactor = volumeToQuart[to];
  if (!toFactor) return 0;
  return fromInQuarts / toFactor;
};

const toUnits = Object.keys(volumeToQuart).sort();

const QuartToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Quart (US) to All Units Converter"
      lockedFromUnit="Quart (US)"
      units={toUnits}
      convert={convert}
    />
  );
};

export default QuartToAllPage;
'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 pint (US))
const volumeToPint: Record<string, number> = {
  'Cubic Meter': 2113.37642,
  'Cubic Kilometer': 2.11337642e12,
  'Cubic Centimeter': 0.00211337642,
  'Cubic Millimeter': 2.11337642e-6,
  'Liter': 2.11337642,
  'Gallon (US)': 8,
  'Quart (US)': 2,
  'Cup (US)': 0.25,
  'Tablespoon (US)': 0.015625,
  'Teaspoon (US)': 0.0052083333,
  'Cubic Mile': 8.71657772e12,
  'Cubic Yard': 1615.79220779,
  'Cubic Foot': 59.8441558442,
  'Cubic Inch': 0.0346320346,
  'Break': 2.11337642,
  'Cubic Decimeter': 2.11337642,
  'Exaliter': 2.11337642e18,
  'Petaliter': 2.11337642e15,
  'Teraliter': 2.11337642e12,
  'Gigaliter': 2.11337642e9,
  'Megaliter': 2.11337642e6,
  'Kiloliter': 2113.37642,
  'Hectoliter': 211.337642,
  'Dekaliter': 21.1337642,
  'Deciliter': 2.11337642,
  'Centiliter': 0.211337642,
  'Milliliter': 0.00211337642,
  'Microliter': 2.11337642e-6,
  'Nanoliter': 2.11337642e-9,
  'Picoliter': 2.11337642e-12,
  'Femtoliter': 2.11337642e-15,
  'Attoliter': 2.11337642e-18,
  'Cc': 0.00211337642,
  'Drop': 0.0001056688,
  'Barrel (oil)': 336,
  'Barrel (US)': 252,
  'Barrel (UK)': 345.873578545,
  'Gallon (UK)': 9.607599404,
  'Quart (UK)': 2.401899851,
  'Pint (UK)': 1.2009499255,
  'Cup (metric)': 0.5,
  'Cup (UK)': 0.60047496275,
  'Fluid Ounce (US)': 0.0625,
  'Fluid Ounce (UK)': 0.060047496275,
  'Tablespoon (metric)': 0.0351950798,
  'Tablespoon (UK)': 0.0375146853,
  'Dessertspoon (US)': 0.0208333333,
  'Dessertspoon (UK)': 0.0250199002,
  'Teaspoon (metric)': 0.0105668821,
  'Teaspoon (UK)': 0.0125099501,
  'Gill (US)': 0.5,
  'Gill (UK)': 0.300237481375,
  'Minim (US)': 0.0026041667,
  'Minim (UK)': 0.002501995,
  'Ton Register': 59.8441558442,
  'Ccf': 59.8441558442,
  'Hundred-cubic Foot': 59.8441558442,
  'Acre-foot': 2.5778626e6,
  'Acre-foot (US Survey)': 2.5779372e6,
  'Acre-inch': 214821.876,
  'Dekastere': 21133.7642,
  'Stere': 2113.37642,
  'Decistere': 211.337642,
  'Cord': 766.005194805,
  'Tun': 2016,
  'Hogshead': 504,
  'Board Foot': 4.987012987,
  'Dram': 0.015625,
  'Cor (Biblical)': 464.94280815,
  'Homer (Biblical)': 464.94280815,
  'Bath (Biblical)': 46.494280815,
  'Hin (Biblical)': 7.7490468364,
  'Cab (Biblical)': 1.9372617091,
  'Log (Biblical)': 0.645753903,
  'Taza (Spanish)': 0.5,
  "Earth's Volume": 2.288e21
};

const convert = (value: number, from: string, to: string): number => {
  const fromInPints = value;
  const toFactor = volumeToPint[to];
  if (!toFactor) return 0;
  return fromInPints / toFactor;
};

const toUnits = Object.keys(volumeToPint).sort();

const PintToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Pint (US) to All Units Converter"
      lockedFromUnit="Pint (US)"
      units={toUnits}
      convert={convert}
    />
  );
};

export default PintToAllPage;
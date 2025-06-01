'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 cubic inch)
const volumeToCubicInch: Record<string, number> = {
  'Cubic Meter': 61023.7441,
  'Cubic Kilometer': 6.10237441e13,
  'Cubic Centimeter': 0.0610237441,
  'Cubic Millimeter': 6.10237441e-5,
  'Liter': 61.0237441,
  'Milliliter': 0.0610237441,
  'Quart (US)': 57.75,
  'Pint (US)': 28.875,
  'Cup (US)': 14.4375,
  'Tablespoon (US)': 0.90234375,
  'Teaspoon (US)': 0.30078125,
  'Cubic Mile': 2.54358061e14,
  'Cubic Yard': 46656,
  'Cubic Foot': 1728,
  'Break': 61.0237441,
  'Cubic Decimeter': 61.0237441,
  'Exaliter': 6.10237441e19,
  'Petaliter': 6.10237441e16,
  'Teraliter': 6.10237441e13,
  'Gigaliter': 6.10237441e10,
  'Megaliter': 6.10237441e7,
  'Kiloliter': 61023.7441,
  'Hectoliter': 6102.37441,
  'Dekaliter': 610.237441,
  'Deciliter': 61.0237441,
  'Centiliter': 6.10237441,
  'Microliter': 6.10237441e-5,
  'Nanoliter': 6.10237441e-8,
  'Picoliter': 6.10237441e-11,
  'Femtoliter': 6.10237441e-14,
  'Attoliter': 6.10237441e-17,
  'Cc': 0.0610237441,
  'Drop': 0.0030511872,
  'Barrel (oil)': 9702,
  'Barrel (US)': 7276.5,
  'Barrel (UK)': 9976.64770445,
  'Gallon (UK)': 277.419432792,
  'Quart (UK)': 69.354858198,
  'Pint (UK)': 34.677429099,
  'Cup (metric)': 14.4375,
  'Cup (UK)': 17.3387145495,
  'Fluid Ounce (US)': 1.8046875,
  'Fluid Ounce (UK)': 1.73387145495,
  'Tablespoon (metric)': 1.0170624016,
  'Tablespoon (UK)': 1.08366965934,
  'Dessertspoon (US)': 0.6015625,
  'Dessertspoon (UK)': 0.72244643956,
  'Teaspoon (metric)': 0.3051187205,
  'Teaspoon (UK)': 0.36122321978,
  'Gill (US)': 14.4375,
  'Gill (UK)': 8.66935727475,
  'Minim (US)': 0.0751953125,
  'Minim (UK)': 0.07224464396,
  'Ton Register': 1728,
  'Ccf': 1728,
  'Hundred-cubic Foot': 1728,
  'Acre-foot': 7.43891546e7,
  'Acre-foot (US Survey)': 7.43900543e7,
  'Acre-inch': 6.19909621e6,
  'Dekastere': 610237.441,
  'Stere': 61023.7441,
  'Decistere': 6102.37441,
  'Cord': 221184,
  'Tun': 48384,
  'Hogshead': 12096,
  'Board Foot': 144,
  'Dram': 4.51171875,
  'Cor (Biblical)': 1345.42857143,
  'Homer (Biblical)': 1345.42857143,
  'Bath (Biblical)': 134.542857143,
  'Hin (Biblical)': 22.4238095238,
  'Cab (Biblical)': 5.60595238095,
  'Log (Biblical)': 1.86865079365,
  'Taza (Spanish)': 14.4375,
  "Earth's Volume": 6.604e22
};

const convert = (value: number, from: string, to: string): number => {
  const fromInCubicInches = value;
  const toFactor = volumeToCubicInch[to];
  if (!toFactor) return 0;
  return fromInCubicInches / toFactor;
};

const toUnits = Object.keys(volumeToCubicInch).sort();

const CubicInchToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Cubic Inch to All Units Converter"
      lockedFromUnit="Cubic Inch"
      units={toUnits}
      convert={convert}
    />
  );
};

export default CubicInchToAllPage;
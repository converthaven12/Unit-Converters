'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 cubic foot)
const volumeToCubicFoot: Record<string, number> = {
  'Cubic Meter': 35.3146667,
  'Cubic Kilometer': 3.53146667e10,
  'Cubic Centimeter': 3.53146667e-5,
  'Cubic Millimeter': 3.53146667e-8,
  'Liter': 0.0353146667,
  'Milliliter': 3.53146667e-5,
  'Gallon (US)': 0.133680556,
  'Quart (US)': 0.033420139,
  'Pint (US)': 0.016710069,
  'Cup (US)': 0.0083550345,
  'Tablespoon (US)': 0.00052218966,
  'Teaspoon (US)': 0.00017406322,
  'Cubic Mile': 1.47197952e11,
  'Cubic Yard': 27,
  'Cubic Inch': 0.000578703704,
  'Break': 0.0353146667,
  'Cubic Decimeter': 0.0353146667,
  'Exaliter': 3.53146667e16,
  'Petaliter': 3.53146667e13,
  'Teraliter': 3.53146667e10,
  'Gigaliter': 3.53146667e7,
  'Megaliter': 35314.6667,
  'Kiloliter': 35.3146667,
  'Hectoliter': 3.53146667,
  'Dekaliter': 0.353146667,
  'Deciliter': 0.0353146667,
  'Centiliter': 0.00353146667,
  'Microliter': 3.53146667e-8,
  'Nanoliter': 3.53146667e-11,
  'Picoliter': 3.53146667e-14,
  'Femtoliter': 3.53146667e-17,
  'Attoliter': 3.53146667e-20,
  'Cc': 3.53146667e-5,
  'Drop': 1.76573334e-6,
  'Barrel (oil)': 0.0056145833,
  'Barrel (US)': 0.0042109375,
  'Barrel (UK)': 0.0057741008,
  'Gallon (UK)': 0.0160518033,
  'Quart (UK)': 0.0040129508,
  'Pint (UK)': 0.0020064754,
  'Cup (metric)': 0.0083550345,
  'Cup (UK)': 0.0010032377,
  'Fluid Ounce (US)': 0.00104437932,
  'Fluid Ounce (UK)': 0.00010032377,
  'Tablespoon (metric)': 0.00023541911,
  'Tablespoon (UK)': 6.2702356e-5,
  'Dessertspoon (US)': 0.00034812644,
  'Dessertspoon (UK)': 4.7026767e-5,
  'Teaspoon (metric)': 1.76573334e-5,
  'Teaspoon (UK)': 2.3513384e-5,
  'Gill (US)': 0.0083550345,
  'Gill (UK)': 0.0005016189,
  'Minim (US)': 4.3515805e-5,
  'Minim (UK)': 3.9215531e-6,
  'Ton Register': 1,
  'Ccf': 1,
  'Hundred-cubic Foot': 1,
  'Acre-foot': 43.044086,
  'Acre-foot (US Survey)': 43.0443099,
  'Acre-inch': 3.58700717,
  'Dekastere': 3.53146667,
  'Stere': 0.353146667,
  'Decistere': 0.0353146667,
  'Cord': 0.128,
  'Tun': 0.0267594203,
  'Hogshead': 0.00668985507,
  'Board Foot': 0.0833333333,
  'Dram': 0.00026109483,
  'Cor (Biblical)': 0.796084216,
  'Homer (Biblical)': 0.796084216,
  'Bath (Biblical)': 0.0796084216,
  'Hin (Biblical)': 0.0132680703,
  'Cab (Biblical)': 0.00331701757,
  'Log (Biblical)': 0.00110567252,
  'Taza (Spanish)': 0.0083550345,
  "Earth's Volume": 3.82277436e17
};

const convert = (value: number, from: string, to: string): number => {
  const fromInCubicFeet = value;
  const toFactor = volumeToCubicFoot[to];
  if (!toFactor) return 0;
  return fromInCubicFeet / toFactor;
};

const toUnits = Object.keys(volumeToCubicFoot).sort();

const CubicFootToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Cubic Foot to All Units Converter"
      lockedFromUnit="Cubic Foot"
      units={toUnits}
      convert={convert}
    />
  );
};

export default CubicFootToAllPage;
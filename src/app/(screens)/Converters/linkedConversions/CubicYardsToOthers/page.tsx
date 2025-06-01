'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 cubic yard)
const volumeToCubicYard: Record<string, number> = {
  'Cubic Meter': 1.30795062,
  'Cubic Kilometer': 1.30795062e9,
  'Cubic Centimeter': 1.30795062e-6,
  'Cubic Millimeter': 1.30795062e-9,
  'Liter': 0.00130795062,
  'Milliliter': 1.30795062e-6,
  'Gallon (US)': 0.00495113169,
  'Quart (US)': 0.00123778292,
  'Pint (US)': 0.00061889146,
  'Cup (US)': 0.00030944573,
  'Tablespoon (US)': 1.93403581e-5,
  'Teaspoon (US)': 6.44678603e-6,
  'Cubic Mile': 5.45177621e9,
  'Cubic Inch': 0.0000214334705,
  'Cubic Foot': 0.037037037,
  'Break': 0.00130795062,
  'Cubic Decimeter': 0.00130795062,
  'Exaliter': 1.30795062e15,
  'Petaliter': 1.30795062e12,
  'Teraliter': 1.30795062e9,
  'Gigaliter': 1.30795062e6,
  'Megaliter': 1307.95062,
  'Kiloliter': 1.30795062,
  'Hectoliter': 0.130795062,
  'Dekaliter': 0.0130795062,
  'Deciliter': 0.00130795062,
  'Centiliter': 0.000130795062,
  'Microliter': 1.30795062e-9,
  'Nanoliter': 1.30795062e-12,
  'Picoliter': 1.30795062e-15,
  'Femtoliter': 1.30795062e-18,
  'Attoliter': 1.30795062e-21,
  'Cc': 1.30795062e-6,
  'Drop': 6.5397531e-8,
  'Barrel (oil)': 0.000207947531,
  'Barrel (US)': 0.000155960648,
  'Barrel (UK)': 0.000213855584,
  'Gallon (UK)': 0.000594511462,
  'Quart (UK)': 0.000148627866,
  'Pint (UK)': 7.43139328e-5,
  'Cup (metric)': 0.00030944573,
  'Cup (UK)': 3.71569664e-5,
  'Fluid Ounce (US)': 3.87007162e-5,
  'Fluid Ounce (UK)': 3.71569664e-6,
  'Tablespoon (metric)': 8.7196068e-6,
  'Tablespoon (UK)': 2.3223104e-6,
  'Dessertspoon (US)': 1.28935721e-5,
  'Dessertspoon (UK)': 1.74192136e-6,
  'Teaspoon (metric)': 6.5397531e-7,
  'Teaspoon (UK)': 8.7096068e-7,
  'Gill (US)': 0.00030944573,
  'Gill (UK)': 1.85784832e-5,
  'Minim (US)': 1.61169651e-6,
  'Minim (UK)': 1.45243447e-7,
  'Ton Register': 0.037037037,
  'Ccf': 0.037037037,
  'Hundred-cubic Foot': 0.037037037,
  'Acre-foot': 1.59422508,
  'Acre-foot (US Survey)': 1.5942337,
  'Acre-inch': 0.13285209,
  'Dekastere': 0.130795062,
  'Stere': 0.0130795062,
  'Decistere': 0.00130795062,
  'Cord': 0.00473921028,
  'Tun': 0.0009910904,
  'Hogshead': 0.00024777258,
  'Board Foot': 0.00308641975,
  'Dram': 9.67517905e-6,
  'Cor (Biblical)': 0.0294846011,
  'Homer (Biblical)': 0.0294846011,
  'Bath (Biblical)': 0.00294846011,
  'Hin (Biblical)': 0.00049141,
  'Cab (Biblical)': 0.0001228525,
  'Log (Biblical)': 4.09508333e-5,
  'Taza (Spanish)': 0.00030944573,
  "Earth's Volume": 1.41584233e19
};

const convert = (value: number, from: string, to: string): number => {
  const fromInCubicYards = value;
  const toFactor = volumeToCubicYard[to];
  if (!toFactor) return 0;
  return fromInCubicYards / toFactor;
};

const toUnits = Object.keys(volumeToCubicYard).sort();

const CubicYardToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Cubic Yard to All Units Converter"
      lockedFromUnit="Cubic Yard"
      units={toUnits}
      convert={convert}
    />
  );
};

export default CubicYardToAllPage;
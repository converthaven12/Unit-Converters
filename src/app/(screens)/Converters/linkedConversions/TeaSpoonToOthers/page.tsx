'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 teaspoon (US))
const volumeToTeaspoon: Record<string, number> = {
  'Cubic Meter': 202884.136211,
  'Cubic Kilometer': 2.02884136e14,
  'Cubic Centimeter': 0.202884136211,
  'Cubic Millimeter': 0.000202884136211,
  'Liter': 202.884136211,
  'Milliliter': 0.202884136211,
  'Gallon (US)': 768,
  'Quart (US)': 192,
  'Pint (US)': 96,
  'Cup (US)': 48,
  'Tablespoon (US)': 3,
  'Cubic Mile': 8.45657968e14,
  'Cubic Yard': 155116.051965,
  'Cubic Foot': 5745.03896104,
  'Cubic Inch': 3.3246753247,
  'Break': 202.884136211,
  'Cubic Decimeter': 202.884136211,
  'Exaliter': 2.02884136e20,
  'Petaliter': 2.02884136e17,
  'Teraliter': 2.02884136e14,
  'Gigaliter': 2.02884136e11,
  'Megaliter': 2.02884136e8,
  'Kiloliter': 202884.136211,
  'Hectoliter': 20288.4136211,
  'Dekaliter': 2028.84136211,
  'Deciliter': 202.884136211,
  'Centiliter': 20.2884136211,
  'Microliter': 2.02884136e-5,
  'Nanoliter': 2.02884136e-8,
  'Picoliter': 2.02884136e-11,
  'Femtoliter': 2.02884136e-14,
  'Attoliter': 2.02884136e-17,
  'Cc': 0.202884136211,
  'Drop': 0.0101442068,
  'Barrel (oil)': 32256,
  'Barrel (US)': 24192,
  'Barrel (UK)': 33203.8635403,
  'Gallon (UK)': 922.329542787,
  'Quart (UK)': 230.582385697,
  'Pint (UK)': 115.291192848,
  'Cup (metric)': 48,
  'Cup (UK)': 57.6455964242,
  'Fluid Ounce (US)': 6,
  'Fluid Ounce (UK)': 5.76455964242,
  'Tablespoon (metric)': 3.38140227,
  'Tablespoon (UK)': 3.60344977651,
  'Dessertspoon (US)': 2,
  'Dessertspoon (UK)': 2.402299851,
  'Teaspoon (metric)': 1.01442068106,
  'Teaspoon (UK)': 1.2011499255,
  'Gill (US)': 24,
  'Gill (UK)': 28.8227982121,
  'Minim (US)': 0.125,
  'Minim (UK)': 0.12009499255,
  'Ton Register': 5745.03896104,
  'Ccf': 5745.03896104,
  'Hundred-cubic Foot': 5745.03896104,
  'Acre-foot': 2.5026181e8,
  'Acre-foot (US Survey)': 2.5026598e8,
  'Acre-inch': 2.0855151e7,
  'Dekastere': 2028841.36211,
  'Stere': 202884.136211,
  'Decistere': 20288.4136211,
  'Cord': 73536.4987553,
  'Tun': 193536,
  'Hogshead': 48384,
  'Board Foot': 478.753246753,
  'Dram': 0.75,
  'Cor (Biblical)': 44634.5097778,
  'Homer (Biblical)': 44634.5097778,
  'Bath (Biblical)': 4463.45097778,
  'Hin (Biblical)': 743.908496296,
  'Cab (Biblical)': 185.977124074,
  'Log (Biblical)': 61.9923746914,
  'Taza (Spanish)': 48,
  "Earth's Volume": 2.19648e23
};

const convert = (value: number, from: string, to: string): number => {
  const fromInTeaspoons = value;
  const toFactor = volumeToTeaspoon[to];
  if (!toFactor) return 0;
  return fromInTeaspoons / toFactor;
};

const toUnits = Object.keys(volumeToTeaspoon).sort();

const TeaspoonToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Teaspoon (US) to All Units Converter"
      lockedFromUnit="Teaspoon (US)"
      units={toUnits}
      convert={convert}
    />
  );
};

export default TeaspoonToAllPage;
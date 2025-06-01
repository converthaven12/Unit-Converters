'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const yardToYard: Record<string, number> = {
  'Yard': 1,
  'Meter': 0.9144,
  'Kilometer': 0.0009144,
  'Decimeter': 9.144,
  'Centimeter': 91.44,
  'Millimeter': 914.4,
  'Micrometer': 914400,
  'Nanometer': 914400000,
  'Mile': 0.000568182,
  'Inch': 36,
  'Foot': 3,
  'Light Year': 9.66522e-17,
  'Break': 9.144e-13,
  'Exameter': 9.144e-19,
  'Petameter': 9.144e-16,
  'Terameter': 9.144e-13,
  'Gigameter': 9.144e-10,
  'Megameter': 0.0000009144,
  'Hectometer': 0.009144,
  'Dekameter': 0.09144,
  'Micron': 914400,
  'Picometer': 914400000000,
  'Femtometer': 9.144e+14,
  'Attometer': 9.144e+17,
  'Megaparsec': 2.96337e-23,
  'Kiloparsec': 2.96337e-20,
  'Parsec': 2.96337e-17,
  'Astronomical Unit': 6.11239e-12,
  'League': 0.000189394,
  'Nautical League (UK)': 0.000164474,
  'Nautical League (int.)': 0.000164579,
  'League (statute)': 0.000189394,
  'Nautical Mile (UK)': 0.000493421,
  'Nautical Mile (international)': 0.000493737,
  'Mile (statute)': 0.000568182,
  'Mile (US Survey)': 0.000568182,
  'Mile (Roman)': 0.00061792,
  'Kiloyard': 0.001,
  'Furlong': 0.00454545,
  'Furlong (US Survey)': 0.00454545,
  'Chain': 0.0454545,
  'Chain (US Survey)': 0.0454545,
  'Rope': 0.15,
  'Rod': 0.181818,
  'Rod (US Survey)': 0.181818,
  'Perch': 0.181818,
  'Pole': 0.181818,
  'Fathom': 0.5,
  'Fathom (US Survey)': 0.5,
  'Ell': 0.8,
  'Foot (US Survey)': 2.99999,
  'Link': 4.54545,
  'Link (US Survey)': 4.54545,
  'Cubit (UK)': 2,
  'Hand': 9,
  'Span (cloth)': 4,
  'Finger (cloth)': 8,
  'Nail (cloth)': 16,
  'Inch (US Survey)': 36,
  'Barleycorn': 108,
  'Mil': 36000,
  'Microinch': 36000000,
  'Angstrom': 9144000000,
  'A.u. Of Length': 17279654439.6,
  'X-unit': 9125019943.57,
  'Fermi': 9.144e+14,
  'Arpent': 0.015625,
  'Pica': 216,
  'Point': 2592,
  'Twip': 51840,
  'Aln': 1.53997,
  'Famn': 0.513323,
  'Caliber': 3600,
  'Centiinch': 3600,
  'Ken': 0.431655,
  'Russian Archin': 1.28571,
  'Roman Actus': 0.0257732,
  'Vara De Tarea': 0.364963,
  'Vara Conuquera': 0.364963,
  'Vara Castellana': 1.09489,
  'Cubit (Greek)': 1.97585,
  'Long Reed': 0.285714,
  'Reed': 0.333333,
  'Long Cubit': 1.71429,
  'Handbreadth': 12,
  'Fingerbreadth': 48,
  'Planck Length': 5.65824e+34,
  'Electron Radius (classical)': 3.2449227e+14,
  'Bohr Radius': 17279654439.6,
  'Earth\'s Equatorial Radius': 1.43364e-7,
  'Earth\'s Polar Radius': 1.43846e-7,
  'Earth\'s Distance From Sun': 6.11239e-12,
  'Sun\'s Radius': 1.31379e-9
};

const convert = (value: number, from: string, to: string): number => {
  const fromInYards = value;
  const toFactor = yardToYard[to];
  if (!toFactor) return 0;
  return fromInYards / toFactor;
};

const toUnits = Object.keys(yardToYard).sort();

const YardToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Yards to All Units Converter"
      lockedFromUnit="Yard"
      units={toUnits}
      convert={convert}
    />
  );
};

export default YardToAllPage;
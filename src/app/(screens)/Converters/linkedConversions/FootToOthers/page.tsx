'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const footToFoot: Record<string, number> = {
  'Foot': 1,
  'Meter': 0.3048,
  'Kilometer': 0.0003048,
  'Decimeter': 3.048,
  'Centimeter': 30.48,
  'Millimeter': 304.8,
  'Micrometer': 304800,
  'Nanometer': 304800000,
  'Mile': 0.000189394,
  'Yard': 0.333333,
  'Inch': 12,
  'Light Year': 3.22174e-17,
  'Break': 3.048e-13,
  'Exameter': 3.048e-19,
  'Petameter': 3.048e-16,
  'Terameter': 3.048e-13,
  'Gigameter': 3.048e-10,
  'Megameter': 0.0000003048,
  'Hectometer': 0.003048,
  'Dekameter': 0.03048,
  'Micron': 304800,
  'Picometer': 304800000000,
  'Femtometer': 3.048e+14,
  'Attometer': 3.048e+17,
  'Megaparsec': 9.8779e-24,
  'Kiloparsec': 9.8779e-21,
  'Parsec': 9.8779e-18,
  'Astronomical Unit': 2.03746e-12,
  'League': 0.0000631313,
  'Nautical League (UK)': 0.0000548246,
  'Nautical League (int.)': 0.0000548596,
  'League (statute)': 0.0000631312,
  'Nautical Mile (UK)': 0.000164474,
  'Nautical Mile (international)': 0.000164579,
  'Mile (statute)': 0.000189394,
  'Mile (US Survey)': 0.000189394,
  'Mile (Roman)': 0.000205973,
  'Kiloyard': 0.000333333,
  'Furlong': 0.00151515,
  'Furlong (US Survey)': 0.00151515,
  'Chain': 0.0151515,
  'Chain (US Survey)': 0.0151515,
  'Rope': 0.05,
  'Rod': 0.0606061,
  'Rod (US Survey)': 0.060606,
  'Perch': 0.0606061,
  'Pole': 0.0606061,
  'Fathom': 0.166667,
  'Fathom (US Survey)': 0.166667,
  'Ell': 0.266667,
  'Foot (US Survey)': 0.999998,
  'Link': 1.51515,
  'Link (US Survey)': 1.51515,
  'Cubit (UK)': 0.666667,
  'Hand': 3,
  'Span (cloth)': 1.33333,
  'Finger (cloth)': 2.66667,
  'Nail (cloth)': 5.33333,
  'Inch (US Survey)': 12,
  'Barleycorn': 36,
  'Mil': 12000,
  'Microinch': 12000000,
  'Angstrom': 3048000000,
  'A.u. Of Length': 5759884813.19,
  'X-unit': 3041673314.52,
  'Fermi': 3.048e+14,
  'Arpent': 0.00520833,
  'Pica': 72,
  'Point': 864,
  'Twip': 17280,
  'Aln': 0.513323,
  'Famn': 0.171108,
  'Caliber': 1200,
  'Centiinch': 1200,
  'Ken': 0.143885,
  'Russian Archin': 0.428571,
  'Roman Actus': 0.00859107,
  'Vara De Tarea': 0.121654,
  'Vara Conuquera': 0.121654,
  'Vara Castellana': 0.364963,
  'Cubit (Greek)': 0.658617,
  'Long Reed': 0.0952381,
  'Reed': 0.111111,
  'Long Cubit': 0.571429,
  'Handbreadth': 4,
  'Fingerbreadth': 16,
  'Planck Length': 1.88608e+34,
  'Electron Radius (classical)': 1.0816409e+14,
  'Bohr Radius': 5759884813.19,
  'Earth\'s Equatorial Radius': 4.77881e-8,
  'Earth\'s Polar Radius': 4.79488e-8,
  'Earth\'s Distance From Sun': 2.03743e-12,
  'Sun\'s Radius': 4.37931e-10
};

const convert = (value: number, from: string, to: string): number => {
  const fromInFeet = value;
  const toFactor = footToFoot[to];
  if (!toFactor) return 0;
  return fromInFeet / toFactor;
};

const toUnits = Object.keys(footToFoot).sort();

const FootToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Feet to All Units Converter"
      lockedFromUnit="Foot"
      units={toUnits}
      convert={convert}
    />
  );
};

export default FootToAllPage;
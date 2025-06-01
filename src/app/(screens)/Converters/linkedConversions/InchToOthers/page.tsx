'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const inchToInch: Record<string, number> = {
  'Inch': 1,
  'Meter': 0.0254,
  'Kilometer': 0.0000254,
  'Decimeter': 0.254,
  'Centimeter': 2.54,
  'Millimeter': 25.4,
  'Micrometer': 25400,
  'Nanometer': 25400000,
  'Mile': 0.0000157828,
  'Yard': 0.0277778,
  'Foot': 0.0833333,
  'Light Year': 2.68478e-18,
  'Break': 2.54e-14,
  'Exameter': 2.54e-20,
  'Petameter': 2.54e-17,
  'Terameter': 2.54e-14,
  'Gigameter': 2.54e-11,
  'Megameter': 0.0000000254,
  'Hectometer': 0.000254,
  'Dekameter': 0.00254,
  'Micron': 25400,
  'Picometer': 25400000000,
  'Femtometer': 2.54e+13,
  'Attometer': 2.54e+16,
  'Megaparsec': 8.23158e-25,
  'Kiloparsec': 8.23158e-22,
  'Parsec': 8.23158e-19,
  'Astronomical Unit': 1.69789e-13,
  'League': 0.00000526094,
  'Nautical League (UK)': 0.00000456871,
  'Nautical League (International)': 0.00000457163,
  'League (Statute)': 0.00000526093,
  'Nautical Mile (UK)': 0.0000137061,
  'Nautical Mile (International)': 0.0000137149,
  'Mile (Statute)': 0.0000157828,
  'Mile (US Survey)': 0.0000157828,
  'Mile (Roman)': 0.0000171647,
  'Kiloyard': 0.0000277778,
  'Furlong': 0.000126263,
  'Furlong (US Survey)': 0.000126263,
  'Chain': 0.00126263,
  'Chain (US Survey)': 0.00126263,
  'Rope': 0.00416667,
  'Rod': 0.00505051,
  'Rod (US Survey)': 0.0050505,
  'Perch': 0.00505051,
  'Pole': 0.00505051,
  'Fathom': 0.0138889,
  'Fathom (US Survey)': 0.0138889,
  'Ell': 0.0222222,
  'Foot (US Survey)': 0.0833332,
  'Link': 0.126263,
  'Link (US Survey)': 0.126263,
  'Cubit (UK)': 0.0555556,
  'Hand': 0.25,
  'Span (Cloth)': 0.111111,
  'Finger (Cloth)': 0.222222,
  'Nail (Cloth)': 0.444444,
  'Inch (US Survey)': 1,
  'Barleycorn': 3,
  'Mil': 1000,
  'Microinch': 1000000,
  'Angstrom': 254000000,
  'A.u. of Length': 479990401.099,
  'X-unit': 253472776.21,
  'Fermi': 2.54e+13,
  'Arpent': 0.000434028,
  'Pica': 6,
  'Point': 72,
  'Twip': 1440,
  'Aln': 0.042776,
  'Famn': 0.0142587,
  'Caliber': 100,
  'Centiinch': 100,
  'Ken': 0.0119904,
  'Russian Archin': 0.0357143,
  'Roman Actus': 0.000715922,
  'Vara de Tarea': 0.0101369,
  'Vara Conuquera': 0.0101369,
  'Vara Castellana': 0.0304107,
  'Cubit (Greek)': 0.0548674,
  'Long Reed': 0.00793651,
  'Reed': 0.00925926,
  'Long Cubit': 0.047619,
  'Handbreadth': 0.333333,
  'Fingerbreadth': 1.33333,
  'Planck Length': 1.57173e+33,
  'Electron Radius (Classical)': 9013674166.67,
  'Bohr Radius': 479990401.099,
  'Earth\'s Equatorial Radius': 3.98201e-9,
  'Earth\'s Polar Radius': 3.99627e-9,
  'Earth\'s Distance from Sun': 1.69789e-13,
  'Sun\'s Radius': 3.64943e-11
};

const convert = (value: number, from: string, to: string): number => {
  const fromInInches = value;
  const toFactor = inchToInch[to];
  if (!toFactor) return 0;
  return fromInInches / toFactor;
};

const toUnits = Object.keys(inchToInch).sort();

const InchToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Inches to All Units Converter"
      lockedFromUnit="Inch"
      units={toUnits}
      convert={convert}
    />
  );
};

export default InchToAllPage;
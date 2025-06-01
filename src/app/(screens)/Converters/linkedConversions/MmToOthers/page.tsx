'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const mmToMm: Record<string, number> = {
  'Millimeter': 1,
  'Meter': 0.001,
  'Kilometer': 0.000001,
  'Decimeter': 0.01,
  'Centimeter': 0.1,
  'Micrometer': 1000,
  'Nanometer': 1000000,
  'Mile': 6.21371e-7,
  'Yard': 0.00109361,
  'Foot': 0.00328084,
  'Inch': 0.0393701,
  'Light Year': 1.057e-19,
  'Break': 1e-12,
  'Exameter': 1e-21,
  'Petameter': 1e-18,
  'Terameter': 1e-15,
  'Gigameter': 1e-12,
  'Megameter': 1e-9,
  'Hectometer': 0.00001,
  'Dekameter': 0.0001,
  'Micron': 1000,
  'Picometer': 1000000000,
  'Femtometer': 1000000000000,
  'Attometer': 1e+15,
  'Megaparsec': 3.24078e-23,
  'Kiloparsec': 3.24078e-20,
  'Parsec': 3.24078e-17,
  'Astronomical Unit': 6.68459e-15,
  'League': 2.07124e-7,
  'Nautical League (UK)': 1.7987e-7,
  'Nautical League (int.)': 1.79986e-7,
  'League (statute)': 2.07123e-7,
  'Nautical Mile (UK)': 5.39612e-7,
  'Nautical Mile (international)': 5.39957e-7,
  'Mile (statute)': 6.21371e-7,
  'Mile (US Survey)': 6.21371e-7,
  'Mile (Roman)': 6.75765e-7,
  'Kiloyard': 1.09361e-6,
  'Furlong': 4.97097e-6,
  'Furlong (US Survey)': 4.97096e-6,
  'Chain': 0.0000497097,
  'Chain (US Survey)': 0.0000497096,
  'Rope': 0.000164042,
  'Rod': 0.000198839,
  'Rod (US Survey)': 0.000198838,
  'Perch': 0.000198839,
  'Pole': 0.000198839,
  'Fathom': 0.000546807,
  'Fathom (US Survey)': 0.000546806,
  'Ell': 0.000874891,
  'Foot (US Survey)': 0.00328083,
  'Link': 0.00497097,
  'Link (US Survey)': 0.00497096,
  'Cubit (UK)': 0.00218723,
  'Hand': 0.00984252,
  'Span (cloth)': 0.00437445,
  'Finger (cloth)': 0.00874891,
  'Nail (cloth)': 0.0174978,
  'Inch (US Survey)': 0.03937,
  'Barleycorn': 0.11811,
  'Mil': 39.3701,
  'Microinch': 39370.1,
  'Angstrom': 10000000,
  'A.u. Of Length': 18897261.2305,
  'X-unit': 9979243.17406,
  'Fermi': 1e+12,
  'Arpent': 0.0000170877,
  'Pica': 0.23622,
  'Point': 2.83465,
  'Twip': 56.6929,
  'Aln': 0.00168413,
  'Famn': 0.000561377,
  'Caliber': 3.93701,
  'Centiinch': 3.93701,
  'Ken': 0.000472063,
  'Russian Archin': 0.00140607,
  'Roman Actus': 0.0000281859,
  'Vara De Tarea': 0.000399128,
  'Vara Conuquera': 0.000399128,
  'Vara Castellana': 0.00119738,
  'Cubit (Greek)': 0.002160816,
  'Long Reed': 0.000312461,
  'Reed': 0.000364538,
  'Long Cubit': 0.00187477,
  'Handbreadth': 0.0131234,
  'Fingerbreadth': 0.0524934,
  'Planck Length': 6.18793e+31,
  'Electron Radius (classical)': 354869043.884,
  'Bohr Radius': 18897261.2305,
  'Earth\'s Equatorial Radius': 1.56785e-10,
  'Earth\'s Polar Radius': 1.57381e-10,
  'Earth\'s Distance From Sun': 6.68459e-15,
  'Sun\'s Radius': 1.43678e-12
};

const convert = (value: number, from: string, to: string): number => {
  const fromInMm = value;
  const toFactor = mmToMm[to];
  if (!toFactor) return 0;
  return fromInMm / toFactor;
};

const toUnits = Object.keys(mmToMm).sort();

const MmToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Millimeters to All Units Converter"
      lockedFromUnit="Millimeter"
      units={toUnits}
      convert={convert}
    />
  );
};

export default MmToAllPage;
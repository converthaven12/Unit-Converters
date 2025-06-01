'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const mileToMile: Record<string, number> = {
  'Mile': 1,
  'Meter': 1609.34,
  'Kilometer': 1.60934,
  'Decimeter': 16093.4,
  'Centimeter': 160934,
  'Millimeter': 1609340,
  'Micrometer': 1609340000,
  'Nanometer': 1609340000000,
  'Yard': 1760,
  'Foot': 5280,
  'Inch': 63360,
  'Light Year': 1.70108e-13,
  'Break': 1.60934e-9,
  'Exameter': 1.60934e-15,
  'Petameter': 1.60934e-12,
  'Terameter': 1.60934e-9,
  'Gigameter': 0.00160934,
  'Megameter': 1.60934,
  'Hectometer': 16.0934,
  'Dekameter': 160.934,
  'Micron': 1609340000,
  'Picometer': 1.60934e+15,
  'Femtometer': 1.60934e+18,
  'Attometer': 1.60934e+21,
  'Megaparsec': 5.21553e-20,
  'Kiloparsec': 5.21553e-17,
  'Parsec': 5.21553e-14,
  'Astronomical Unit': 1.07578e-8,
  'League': 0.333333,
  'Nautical League (UK)': 0.289474,
  'Nautical League (int.)': 0.289659,
  'League (statute)': 0.333333,
  'Nautical Mile (UK)': 0.868421,
  'Nautical Mile (international)': 0.868976,
  'Mile (statute)': 1,
  'Mile (US Survey)': 1,
  'Mile (Roman)': 1.08754,
  'Kiloyard': 1.76,
  'Furlong': 8,
  'Furlong (US Survey)': 8,
  'Chain': 80,
  'Chain (US Survey)': 80,
  'Rope': 264,
  'Rod': 320,
  'Rod (US Survey)': 320,
  'Perch': 320,
  'Pole': 320,
  'Fathom': 880,
  'Fathom (US Survey)': 880,
  'Ell': 1408,
  'Foot (US Survey)': 5279.99,
  'Link': 8000,
  'Link (US Survey)': 8000,
  'Cubit (UK)': 3520,
  'Hand': 15840,
  'Span (cloth)': 7040,
  'Finger (cloth)': 14080,
  'Nail (cloth)': 28160,
  'Inch (US Survey)': 63360,
  'Barleycorn': 190080,
  'Mil': 63360000,
  'Microinch': 63360000000,
  'Angstrom': 16093400000000,
  'A.u. Of Length': 30412191813635,
  'X-unit': 16059372703412,
  'Fermi': 1.60934e+18,
  'Arpent': 27.5056,
  'Pica': 380160,
  'Point': 4561920,
  'Twip': 91238400,
  'Aln': 2710.35,
  'Famn': 903.449,
  'Caliber': 6336000,
  'Centiinch': 6336000,
  'Ken': 759.827,
  'Russian Archin': 2262.86,
  'Roman Actus': 45.3608,
  'Vara De Tarea': 642.336,
  'Vara Conuquera': 642.336,
  'Vara Castellana': 1927.01,
  'Cubit (Greek)': 3477.49,
  'Long Reed': 502.857,
  'Reed': 586.667,
  'Long Cubit': 3017.14,
  'Handbreadth': 21120,
  'Fingerbreadth': 84480,
  'Planck Length': 9.9585e+37,
  'Electron Radius (classical)': 5.7110635e+17,
  'Bohr Radius': 30412191813635,
  'Earth\'s Equatorial Radius': 0.000252321,
  'Earth\'s Polar Radius': 0.000253356,
  'Earth\'s Distance From Sun': 1.07578e-8,
  'Sun\'s Radius': 0.00231228
};

const convert = (value: number, from: string, to: string): number => {
  const fromInMiles = value;
  const toFactor = mileToMile[to];
  if (!toFactor) return 0;
  return fromInMiles / toFactor;
};

const toUnits = Object.keys(mileToMile).sort();

const MileToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Miles to All Units Converter"
      lockedFromUnit="Mile"
      units={toUnits}
      convert={convert}
    />
  );
};

export default MileToAllPage;
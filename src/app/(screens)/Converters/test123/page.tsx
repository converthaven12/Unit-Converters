'use client';

import React from 'react';
import LockedUnitConverter from '../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 meter)
const lengthToMeter: Record<string, number> = {
  Kilometer: 1000,
  Meter: 1,
  Decimeter: 0.1,
  Millimeter: 0.001,
  Micrometer: 1e-6,
  Nanometer: 1e-9,
  Mile: 1609.344,
  Yard: 0.9144,
  Foot: 0.3048,
  Inch: 0.0254,
  LightYear: 9.4607e15,
  Break: 1.6764,
  Exameter: 1e18,
  Petameter: 1e15,
  Terameter: 1e12,
  Gigameter: 1e9,
  Megameter: 1e6,
  Hectometer: 100,
  Dekameter: 10,
  Micron: 1e-6,
  Picometer: 1e-12,
  Femtometer: 1e-15,
  Attometer: 1e-18,
  Megaparsec: 3.0857e22,
  Kiloparsec: 3.0857e19,
  Parsec: 3.0857e16,
  'Astronomical Unit': 1.496e11,
  League: 4828.032,
  'Nautical League (UK)': 5556,
  'Nautical League (int.)': 5556,
  'League (statute)': 4828.0417,
  'Nautical Mile (UK)': 1853.184,
  'Nautical Mile (international)': 1852,
  'Mile (statute)': 1609.344,
  'Mile (US Survey)': 1609.3472,
  'Mile (Roman)': 1478.5,
  Kiloyard: 914.4,
  Furlong: 201.168,
  'Furlong (US Survey)': 201.1684,
  Chain: 20.1168,
  'Chain (US Survey)': 20.11684,
  Rope: 6.096,
  Rod: 5.0292,
  'Rod (US Survey)': 5.02921,
  Perch: 5.0292,
  Pole: 5.0292,
  Fathom: 1.8288,
  'Fathom (US Survey)': 1.828803,
  Ell: 1.143,
  'Foot (US Survey)': 0.3048006,
  Link: 0.201168,
  'Link (US Survey)': 0.2011684,
  'Cubit (UK)': 0.4572,
  Hand: 0.1016,
  'Span (cloth)': 0.2286,
  'Finger (cloth)': 0.1143,
  'Nail (cloth)': 0.05715,
  'Inch (US Survey)': 0.02540005,
  Barleycorn: 0.0084667,
  Mil: 0.0000254,
  Microinch: 2.54e-8,
  Angstrom: 1e-10,
  'A.u. Of Length': 5.2917721092e-11,
  'X-unit': 1.0021e-13,
  Fermi: 1e-15,
  Arpent: 58.47,
  Pica: 0.0042333,
  Point: 0.000352777778,
  Twip: 0.0000176389,
  Aln: 1.781,
  Famn: 3.563,
  Caliber: 0.000254,
  Centiinch: 0.000254,
  Ken: 1.8181818182,
  'Russian Archin': 0.7112,
  'Roman Actus': 35.47872,
  'Vara De Tarea': 0.8359,
  'Vara Conuquera': 0.8359,
  'Vara Castellana': 0.8359,
  'Cubit (Greek)': 0.462,
  'Long Reed': 3.2,
  Reed: 2.7432,
  'Long Cubit': 0.5334,
  Handbreadth: 0.1016,
  Fingerbreadth: 0.01905,
  'Planck Length': 1.616255e-35,
  'Electron Radius (classical)': 2.8179403227e-15,
  'Bohr Radius': 5.2917721092e-11,
  "Earth's Equatorial Radius": 6.378137e6,
  "Earth's Polar Radius": 6.356752e6,
  "Earth's Distance From Sun": 1.496e11,
  "Sun's Radius": 6.9634e8,
};

// Convert from cm to target
const convert = (value: number, from: string, to: string): number => {
  const fromInMeters = value * 0.01; // Centimeter to meter
  const toFactor = lengthToMeter[to];
  if (!toFactor) return 0;
  return fromInMeters / toFactor;
};

// Prepare all unit keys (excluding 'Centimeter')
const toUnits = Object.keys(lengthToMeter).sort();

const CmToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Centimeter to All Units Converter"
      lockedFromUnit="Centimeter"
      units={toUnits}
      convert={convert}
    />
  );
};

export default CmToAllPage;

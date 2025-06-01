'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 psi)
const pressureToPsi: Record<string, number> = {
  'Pascal': 0.000145038,
  'kPa': 0.145038,
  'Ksi': 0.001,
  'Standard Atmosphere': 14.6959,
  'Bar': 14.5038,
  'Exapascal': 1.45038e-17,
  'Petapascal': 1.45038e-14,
  'Terapascal': 1.45038e-11,
  'Gigapascal': 1.45038e-8,
  'Megapascal': 0.0000145038,
  'Hectopascal': 0.0145038,
  'Dekapascal': 1.45038,
  'Decipascal': 1450.38,
  'Centipascal': 14503.8,
  'Millipascal': 145038,
  'Micropascal': 1.45038e8,
  'Nanopascal': 1.45038e11,
  'Picopascal': 1.45038e14,
  'Femtopascal': 1.45038e17,
  'Attopascal': 1.45038e20,
  'Newton/square Meter': 0.000145038,
  'Newton/square Centimeter': 0.0145038,
  'Newton/square Millimeter': 1.45038e-6,
  'Kilonewton/square Meter': 0.145038,
  'Millibar': 14.5038,
  'Microbar': 14503.8,
  'Dyne/square Centimeter': 14503.8,
  'Kilogram-force/square Meter': 0.070307,
  'Kilogram-force/square Centimeter': 0.00070307,
  'Kilogram-force/square Millimeter': 7.0307e-7,
  'Gram-force/square Centimeter': 0.70307,
  'Ton-force (short)/square Foot': 0.0005,
  'Ton-force (short)/square Inch': 0.0005,
  'Ton-force (long)/square Foot': 0.000446429,
  'Ton-force (long)/square Inch': 0.000446429,
  'Kip-force/square Inch': 0.001,
  'Pound-force/square Foot': 0.00694444,
  'Pound-force/square Inch': 1,
  'Poundal/square Foot': 0.031081,
  'Torr': 0.0193368,
  'Centimeter Mercury (0°C)': 0.0193368,
  'Millimeter Mercury (0°C)': 0.193368,
  'Inch Mercury (32°F)': 0.0075186,
  'Inch Mercury (60°F)': 0.0075189,
  'Centimeter Water (4°C)': 0.0703089,
  'Millimeter Water (4°C)': 0.703089,
  'Inch Water (4°C)': 0.0276806,
  'Foot Water (4°C)': 0.00230672,
  'Inch Water (60°F)': 0.0277076,
  'Foot Water (60°F)': 0.00230897,
  'Atmosphere Technical': 0.00070307
};

const convert = (value: number, from: string, to: string): number => {
  const fromInPsis = value;
  const toFactor = pressureToPsi[to];
  if (!toFactor) return 0;
  return fromInPsis / toFactor;
};

const toUnits = Object.keys(pressureToPsi).sort();

const PsiToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Psi to All Units Converter"
      lockedFromUnit="Psi"
      units={toUnits}
      convert={convert}
    />
  );
};

export default PsiToAllPage;
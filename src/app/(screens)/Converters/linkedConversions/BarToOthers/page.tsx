'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 bar)
const pressureToBar: Record<string, number> = {
  'Psi': 0.0689476,
  'Pascal': 1e-5,
  'Kilopascal': 0.01,
  'Ksi': 0.0000689476,
  'Standard Atmosphere': 0.986923,
  'Break': 1,
  'Exapascal': 1e-19,
  'Petapascal': 1e-16,
  'Terapascal': 1e-13,
  'Gigapascal': 1e-10,
  'Megapascal': 1e-7,
  'Hectopascal': 0.001,
  'Dekapascal': 0.01,
  'Decipascal': 1000,
  'Centipascal': 10000,
  'Millipascal': 1e5,
  'Micropascal': 1e8,
  'Nanopascal': 1e11,
  'Picopascal': 1e14,
  'Femtopascal': 1e17,
  'Attopascal': 1e20,
  'Newton/square Meter': 1e-5,
  'Newton/square Centimeter': 0.001,
  'Newton/square Millimeter': 1e-7,
  'Kilonewton/square Meter': 0.01,
  'Millibar': 1,
  'Microbar': 1000,
  'Dyne/square Centimeter': 1000,
  'Kilogram-force/square Meter': 0.0101972,
  'Kilogram-force/sq. Cm': 0.000101972,
  'Kilogram-force/sq. Millimeter': 1.01972e-7,
  'Gram-force/sq. Centimeter': 0.101972,
  'Ton-force (short)/sq. Foot': 0.000104427,
  'Ton-force (short)/sq. Inch': 7.25189e-7,
  'Ton-force (long)/square Foot': 0.000093239,
  'Ton-force (long)/square Inch': 6.4749e-7,
  'Kip-force/square Inch': 6.89476e-6,
  'Pound-force/square Foot': 0.000478803,
  'Pound-force/square Inch': 0.0000689476,
  'Poundal/square Foot': 0.00231694,
  'Torr': 0.00133322,
  'Centimeter Mercury (0°C)': 0.00133322,
  'Millimeter Mercury (0°C)': 0.0133322,
  'Inch Mercury (32°F)': 0.000518613,
  'Inch Mercury (60°F)': 0.000518528,
  'Centimeter Water (4°C)': 0.0101974,
  'Millimeter Water (4°C)': 0.101974,
  'Inch Water (4°C)': 0.00401474,
  'Foot Water (4°C)': 0.000334562,
  'Inch Water (60°F)': 0.00401865,
  'Foot Water (60°F)': 0.000334888,
  'Atmosphere Technical': 0.000980665
};

const convert = (value: number, from: string, to: string): number => {
  const fromInBars = value;
  const toFactor = pressureToBar[to];
  if (!toFactor) return 0;
  return fromInBars / toFactor;
};

const toUnits = Object.keys(pressureToBar).sort();

const BarToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Bar to All Units Converter"
      lockedFromUnit="Bar"
      units={toUnits}
      convert={convert}
    />
  );
};

export default BarToAllPage;
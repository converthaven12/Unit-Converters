'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 kilopascal)
const pressureToKPa: Record<string, number> = {
  'Psi': 6.89476,
  'Pascal': 0.001,
  'Bar': 100,
  'Ksi': 0.00689476,
  'Standard Atmosphere': 101.325,
  'Break': 1,
  'Exapascal': 1e-18,
  'Petapascal': 1e-15,
  'Terapascal': 1e-12,
  'Gigapascal': 1e-9,
  'Megapascal': 0.001,
  'Hectopascal': 0.1,
  'Dekapascal': 1,
  'Decipascal': 100,
  'Centipascal': 1000,
  'Millipascal': 1e4,
  'Micropascal': 1e7,
  'Nanopascal': 1e10,
  'Picopascal': 1e13,
  'Femtopascal': 1e16,
  'Attopascal': 1e19,
  'Newton/square Meter': 0.001,
  'Newton/square Centimeter': 0.1,
  'Newton/square Millimeter': 1e-4,
  'Kilonewton/square Meter': 1,
  'Millibar': 100,
  'Microbar': 1e5,
  'Dyne/square Centimeter': 1e5,
  'Kilogram-force/square Meter': 0.101972,
  'Kilogram-force/sq. Cm': 0.00101972,
  'Kilogram-force/sq. Millimeter': 1.01972e-6,
  'Gram-force/sq. Centimeter': 1.01972,
  'Ton-force (short)/sq. Foot': 0.0104427,
  'Ton-force (short)/sq. Inch': 0.0000725189,
  'Ton-force (long)/square Foot': 0.0093239,
  'Ton-force (long)/square Inch': 0.000064749,
  'Kip-force/square Inch': 0.0000689476,
  'Pound-force/square Foot': 0.00478803,
  'Pound-force/square Inch': 0.00689476,
  'Poundal/square Foot': 0.0231694,
  'Torr': 0.133322,
  'Centimeter Mercury (0°C)': 0.133322,
  'Millimeter Mercury (0°C)': 1.33322,
  'Inch Mercury (32°F)': 0.00518613,
  'Inch Mercury (60°F)': 0.00518528,
  'Centimeter Water (4°C)': 0.101974,
  'Millimeter Water (4°C)': 1.01974,
  'Inch Water (4°C)': 0.0401474,
  'Foot Water (4°C)': 0.00334562,
  'Inch Water (60°F)': 0.0401865,
  'Foot Water (60°F)': 0.00334888,
  'Atmosphere Technical': 0.000980665
};

const convert = (value: number, from: string, to: string): number => {
  const fromInKPa = value;
  const toFactor = pressureToKPa[to];
  if (!toFactor) return 0;
  return fromInKPa / toFactor;
};

const toUnits = Object.keys(pressureToKPa).sort();

const KPaToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Kilopascal to All Units Converter"
      lockedFromUnit="Kilopascal"
      units={toUnits}
      convert={convert}
    />
  );
};

export default KPaToAllPage;
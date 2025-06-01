'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const kgfToKgf: Record<string, number> = {
  'Newton': 9.80665,
  'Kilogram-force': 1,
  'Kilonewton': 0.00980665,
  'Gram-force': 1000,
  'Ton-force (metric)': 0.001,
  'Break': 9.80665e-21,
  'Exanewton': 9.80665e-18,
  'Petanewton': 9.80665e-15,
  'Teranewton': 9.80665e-12,
  'Giganewton': 9.80665e-9,
  'Meganewton': 9.80665e-6,
  'Hectonewton': 0.0980665,
  'Dekanewton': 0.980665,
  'Decinewton': 98.0665,
  'Centinewton': 980.665,
  'Millinewton': 9806.65,
  'Micronewton': 9.80665e6,
  'Nanonewton': 9.80665e9,
  'Piconewton': 9.80665e12,
  'Femtonewton': 9.80665e15,
  'Attonewton': 9.80665e18,
  'Dyne': 980665,
  'Joule/meter': 9.80665,
  'Joule/centimeter': 980.665,
  'Ton-force (short)': 0.0011023113,
  'Ton-force (long)': 0.0009842065,
  'Kip-force': 0.0022046226,
  'Kilopound-force': 0.0022046226,
  'Pound-force': 2.20462262,
  'Ounce-force': 35.2739619,
  'Poundal': 70.931635284,
  'Pound Foot/square Second': 70.931635284,
  'Pond': 1000,
  'Kilopond': 1
};

const convert = (value: number, from: string, to: string): number => {
  const fromInKgf = value;
  const toFactor = kgfToKgf[to];
  if (!toFactor) return 0;
  return fromInKgf / toFactor;
};

const toUnits = Object.keys(kgfToKgf).sort();

const KgToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Kilogram-force to All Units Converter"
      lockedFromUnit="Kilogram-force"
      units={toUnits}
      convert={convert}
    />
  );
};

export default KgToAllPage;
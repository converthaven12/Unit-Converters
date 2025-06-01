'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const lbfToLbf: Record<string, number> = {
  'Newton': 4.4482216153,
  'Kilonewton': 0.0044482216,
  'Gram-force': 453.59237,
  'Kilogram-force': 0.45359237,
  'Ton-force (metric)': 0.0004535924,
  'Break': 4.4482216153e-21,
  'Exanewton': 4.4482216153e-18,
  'Petanewton': 4.4482216153e-15,
  'Teranewton': 4.4482216153e-12,
  'Giganewton': 4.4482216153e-9,
  'Meganewton': 4.4482216153e-6,
  'Hectonewton': 0.0444822162,
  'Dekanewton': 0.4448221615,
  'Decinewton': 44.482216153,
  'Centinewton': 444.82216153,
  'Millinewton': 4448.2216153,
  'Micronewton': 4.4482216153e6,
  'Nanonewton': 4.4482216153e9,
  'Piconewton': 4.4482216153e12,
  'Femtonewton': 4.4482216153e15,
  'Attonewton': 4.4482216153e18,
  'Dyne': 444822.16153,
  'Joule/meter': 4.4482216153,
  'Joule/centimeter': 444.82216153,
  'Ton-force (short)': 0.0005,
  'Ton-force (long)': 0.0004464286,
  'Kip-force': 0.001,
  'Kilopound-force': 0.001,
  'Pound-force': 1,
  'Ounce-force': 16,
  'Poundal': 32.174048556,
  'Pound Foot/square Second': 32.174048556,
  'Pond': 453.59237,
  'Kilopond': 0.45359237
};

const convert = (value: number, from: string, to: string): number => {
  const fromInLbf = value;
  const toFactor = lbfToLbf[to];
  if (!toFactor) return 0;
  return fromInLbf / toFactor;
};

const toUnits = Object.keys(lbfToLbf).sort();

const LbfToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Pound-force to All Units Converter"
      lockedFromUnit="Pound-force"
      units={toUnits}
      convert={convert}
    />
  );
};

export default LbfToAllPage;
'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const newtonToNewton: Record<string, number> = {
  'Newton': 1,
  'Kilogram-force': 0.101971621,
  'Kilonewton': 0.001,
  'Gram-force': 101.971621,
  'Ton-force (metric)': 0.0001019716,
  'Break': 1e-21,
  'Exanewton': 1e-18,
  'Petanewton': 1e-15,
  'Teranewton': 1e-12,
  'Giganewton': 1e-9,
  'Meganewton': 1e-6,
  'Hectonewton': 0.01,
  'Dekanewton': 0.1,
  'Decinewton': 10,
  'Centinewton': 100,
  'Millinewton': 1000,
  'Micronewton': 1e6,
  'Nanonewton': 1e9,
  'Piconewton': 1e12,
  'Femtonewton': 1e15,
  'Attonewton': 1e18,
  'Dyne': 1e5,
  'Joule/meter': 1,
  'Joule/centimeter': 100,
  'Ton-force (short)': 0.0001124045,
  'Ton-force (long)': 0.0001003611,
  'Kip-force': 0.0002248089,
  'Kilopound-force': 0.0002248089,
  'Pound-force': 0.224808943,
  'Ounce-force': 3.59694309,
  'Poundal': 7.233013851,
  'Pound Foot/square Second': 7.233013851,
  'Pond': 101.971621,
  'Kilopond': 0.101971621
};

const convert = (value: number, from: string, to: string): number => {
  const fromInNewtons = value;
  const toFactor = newtonToNewton[to];
  if (!toFactor) return 0;
  return fromInNewtons / toFactor;
};

const toUnits = Object.keys(newtonToNewton).sort();

const NewtonToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Newton to All Units Converter"
      lockedFromUnit="Newton"
      units={toUnits}
      convert={convert}
    />
  );
};

export default NewtonToAllPage;
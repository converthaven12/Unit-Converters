'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 kilocalorie (th))
const energyToKCal: Record<string, number> = {
  'Calorie': 1000,
  'Joule': 0.000239006,
  'kJ': 0.239006,
  'Kilowatt-hour': 860.421,
  'Watt-hour': 860.421,
  'Calorie (nutritional)': 1000,
  'Horsepower (metric) Hour': 632.496,
  'Btu (IT)': 252.164,
  'Btu (th)': 251.996,
  'Break': 1,
  'Gigajoule': 2.39006e5,
  'Megajoule': 239.006,
  'Millijoule': 2.39006e-4,
  'Microjoule': 2.39006e-7,
  'Nanojoule': 2.39006e-10,
  'Attojoule': 2.39006e-19,
  'Megaelectron-volt': 3.82929e-17,
  'Kiloelectron-volt': 3.82929e-20,
  'Electron-volt': 3.82929e-23,
  'Erg': 2.39006e-11,
  'Gigawatt-hour': 8.60421e5,
  'Megawatt-hour': 860.421,
  'Kilowatt-second': 0.239006,
  'Watt-second': 0.000239006,
  'Newton Meter': 0.000239006,
  'Horsepower Hour': 0.641616,
  'Calorie (IT)': 0.001,
  'Mega Btu (IT)': 252164,
  'Ton-hour (refrigeration)': 3025.97,
  'Fuel Oil Equivalent @kiloliter': 1.0e7,
  'Fuel Oil Equivalent @barrel (US)': 1.6e6,
  'Gigaton': 1.0e12,
  'Megaton': 1.0e9,
  'Kiloton': 1.0e6,
  'Ton (explosives)': 1000,
  'Dyne Centimeter': 2.39006e-11,
  'Gram-force Meter': 2.34385e-8,
  'Gram-force Centimeter': 2.34385e-10,
  'Kilogram-force Centimeter': 2.34385e-7,
  'Kilogram-force Meter': 2.34385e-5,
  'Kilopond Meter': 2.34385e-5,
  'Pound-force Foot': 0.000324048,
  'Pound-force Inch': 2.7004e-5,
  'Ounce-force Inch': 1.68775e-6,
  'Inch-pound': 2.7004e-5,
  'Inch-ounce': 1.68775e-6,
  'Poundal Foot': 1.0071e-5,
  'Therm': 25216.4,
  'Therm (EC)': 25216.4,
  'Therm (US)': 25208,
  'Hartree Energy': 1.042e-21,
  'Rydberg Constant': 5.21e-22
};

const convert = (value: number, from: string, to: string): number => {
  const fromInKCals = value;
  const toFactor = energyToKCal[to];
  if (!toFactor) return 0;
  return fromInKCals / toFactor;
};

const toUnits = Object.keys(energyToKCal).sort();

const KilocalorieToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Kilocalorie (th) to All Units Converter"
      lockedFromUnit="Kilocalorie (th)"
      units={toUnits}
      convert={convert}
    />
  );
};

export default KilocalorieToAllPage;
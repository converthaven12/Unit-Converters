'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 calorie (th))
const energyToCal: Record<string, number> = {
  'Joule': 0.239006,
  'Kilojoule': 239.006,
  'Kilowatt-hour': 8.6e5,
  'Watt-hour': 860.421,
  'Calorie (nutritional)': 1000,
  'Horsepower (metric) Hour': 6.32496e5,
  'Btu (IT)': 252.164,
  'Btu (th)': 251.996,
  'Break': 1,
  'Gigajoule': 2.39006e8,
  'Megajoule': 239006,
  'Millijoule': 0.239006,
  'Microjoule': 2.39006e-4,
  'Nanojoule': 2.39006e-7,
  'Attojoule': 2.39006e-16,
  'Megaelectron-volt': 3.82929e-14,
  'Kiloelectron-volt': 3.82929e-17,
  'Electron-volt': 3.82929e-20,
  'Erg': 2.39006e-8,
  'Gigawatt-hour': 8.60421e8,
  'Megawatt-hour': 860421,
  'Kilowatt-second': 239.006,
  'Watt-second': 0.239006,
  'Newton Meter': 0.239006,
  'Horsepower Hour': 641.616,
  'Kilocalorie (IT)': 1000,
  'Kilocalorie (th)': 1000,
  'Calorie (IT)': 1,
  'Mega Btu (IT)': 2.52164e8,
  'Ton-hour (refrigeration)': 3.02597e6,
  'Fuel Oil Equivalent @kiloliter': 1.0e10,
  'Fuel Oil Equivalent @barrel (US)': 1.6e9,
  'Gigaton': 1.0e15,
  'Megaton': 1.0e12,
  'Kiloton': 1.0e9,
  'Ton (explosives)': 1.0e6,
  'Dyne Centimeter': 2.39006e-8,
  'Gram-force Meter': 2.34385e-5,
  'Gram-force Centimeter': 2.34385e-7,
  'Kilogram-force Centimeter': 2.34385e-4,
  'Kilogram-force Meter': 0.0234385,
  'Kilopond Meter': 0.0234385,
  'Pound-force Foot': 0.324048,
  'Pound-force Inch': 0.027004,
  'Ounce-force Inch': 0.00168775,
  'Foot-pound': 0.324048,
  'Inch-pound': 0.027004,
  'Inch-ounce': 0.00168775,
  'Poundal Foot': 0.010071,
  'Therm': 2.52164e7,
  'Therm (EC)': 2.52164e7,
  'Therm (US)': 2.5208e7,
  'Hartree Energy': 1.042e-18,
  'Rydberg Constant': 5.21e-19
};

const convert = (value: number, from: string, to: string): number => {
  const fromInCals = value;
  const toFactor = energyToCal[to];
  if (!toFactor) return 0;
  return fromInCals / toFactor;
};

const toUnits = Object.keys(energyToCal).sort();

const CalorieToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Calorie (th) to All Units Converter"
      lockedFromUnit="Calorie (th)"
      units={toUnits}
      convert={convert}
    />
  );
};

export default CalorieToAllPage;
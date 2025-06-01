'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 foot-pound)
const energyToFtLb: Record<string, number> = {
  'Newton Meter': 0.737562,
  'Joule': 0.737562,
  'Kilojoule': 737.562,
  'Kilowatt-hour': 2.65522e6,
  'Watt-hour': 2655.22,
  'Calorie (nutritional)': 3088.03,
  'Horsepower (metric) Hour': 1.95291e6,
  'Btu (IT)': 778.169,
  'Btu (th)': 777.649,
  'Break': 1,
  'Gigajoule': 7.37562e8,
  'Megajoule': 737562,
  'Millijoule': 0.737562,
  'Microjoule': 7.37562e-4,
  'Nanojoule': 7.37562e-7,
  'Attojoule': 7.37562e-16,
  'Megaelectron-volt': 1.18171e-13,
  'Kiloelectron-volt': 1.18171e-16,
  'Electron-volt': 1.18171e-19,
  'Erg': 7.37562e-8,
  'Gigawatt-hour': 2.65522e9,
  'Megawatt-hour': 2.65522e6,
  'Kilowatt-second': 737.562,
  'Watt-second': 0.737562,
  'Horsepower Hour': 1.98137,
  'Kilocalorie (IT)': 3088.03,
  'Kilocalorie (th)': 3085.96,
  'Calorie (IT)': 3.08803,
  'Calorie (th)': 3.08596,
  'Mega Btu (IT)': 7.78169e8,
  'Ton-hour (refrigeration)': 9.33803e6,
  'Fuel Oil Equivalent @kiloliter': 3.1e10,
  'Fuel Oil Equivalent @barrel (US)': 4.9e9,
  'Gigaton': 3.1e15,
  'Megaton': 3.1e12,
  'Kiloton': 3.1e9,
  'Ton (explosives)': 3.1e6,
  'Dyne Centimeter': 7.37562e-8,
  'Gram-force Meter': 7.23301e-5,
  'Gram-force Centimeter': 7.23301e-7,
  'Kilogram-force Centimeter': 7.23301e-4,
  'Kilogram-force Meter': 0.0723301,
  'Kilopond Meter': 0.0723301,
  'Pound-force Foot': 1,
  'Pound-force Inch': 0.0833333,
  'Ounce-force Inch': 0.00520833,
  'Inch-pound': 0.0833333,
  'Inch-ounce': 0.00520833,
  'Poundal Foot': 0.031081,
  'Therm': 7.78169e7,
  'Therm (EC)': 7.78169e7,
  'Therm (US)': 7.7804e7,
  'Hartree Energy': 3.21558e-18,
  'Rydberg Constant': 1.60779e-18
};

const convert = (value: number, from: string, to: string): number => {
  const fromInFtLbs = value;
  const toFactor = energyToFtLb[to];
  if (!toFactor) return 0;
  return fromInFtLbs / toFactor;
};

const toUnits = Object.keys(energyToFtLb).sort();

const FootPoundToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Foot-pound to All Units Converter"
      lockedFromUnit="Foot-pound"
      units={toUnits}
      convert={convert}
    />
  );
};

export default FootPoundToAllPage;
'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 joule)
const energyToJoule: Record<string, number> = {
  'Kilojoule': 1000,
  'Kilowatt-hour': 3.6e6,
  'Watt-hour': 3600,
  'Calorie (nutritional)': 4186.8,
  'Horsepower (metric) Hour': 2.6478e6,
  'Btu (IT)': 1055.06,
  'Btu (th)': 1054.35,
  'Break': 1,
  'Gigajoule': 1e9,
  'Megajoule': 1e6,
  'Millijoule': 0.001,
  'Microjoule': 1e-6,
  'Nanojoule': 1e-9,
  'Attojoule': 1e-18,
  'Megaelectron-volt': 1.60218e-13,
  'Kiloelectron-volt': 1.60218e-16,
  'Electron-volt': 1.60218e-19,
  'Erg': 1e-7,
  'Gigawatt-hour': 3.6e12,
  'Megawatt-hour': 3.6e9,
  'Kilowatt-second': 1000,
  'Watt-second': 1,
  'Newton Meter': 1,
  'Horsepower Hour': 2.6845e6,
  'Kilocalorie (IT)': 4186.8,
  'Kilocalorie (th)': 4184,
  'Calorie (IT)': 4.1868,
  'cal': 4.184,
  'Mega Btu (IT)': 1.05506e9,
  'Ton-hour (refrigeration)': 1.26607e7,
  'Fuel Oil Equivalent @kiloliter': 4.2e10,
  'Fuel Oil Equivalent @barrel (US)': 6.6e9,
  'Gigaton': 4.184e18,
  'Megaton': 4.184e15,
  'Kiloton': 4.184e12,
  'Ton (explosives)': 4.184e9,
  'Dyne Centimeter': 1e-7,
  'Gram-force Meter': 0.00980665,
  'Gram-force Centimeter': 9.80665e-5,
  'Kilogram-force Centimeter': 0.0980665,
  'Kilogram-force Meter': 9.80665,
  'Kilopond Meter': 9.80665,
  'Pound-force Foot': 1.35582,
  'Pound-force Inch': 0.112985,
  'Ounce-force Inch': 0.00706155,
  'Foot-pound': 1.35582,
  'Inch-pound': 0.112985,
  'Inch-ounce': 0.00706155,
  'Poundal Foot': 0.0421401,
  'Therm': 1.05506e8,
  'Therm (EC)': 1.05506e8,
  'Therm (US)': 1.0548e8,
  'Hartree Energy': 4.35974e-18,
  'Rydberg Constant': 2.17987e-18
};

const convert = (value: number, from: string, to: string): number => {
  const fromInJoules = value;
  const toFactor = energyToJoule[to];
  if (!toFactor) return 0;
  return fromInJoules / toFactor;
};

const toUnits = Object.keys(energyToJoule).sort();

const JouleToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Joule to All Units Converter"
      lockedFromUnit="Joule"
      units={toUnits}
      convert={convert}
    />
  );
};

export default JouleToAllPage;
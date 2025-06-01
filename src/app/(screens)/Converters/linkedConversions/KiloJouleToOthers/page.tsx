'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 kilojoule)
const energyToKJ: Record<string, number> = {
  'Kilocalorie': 4.184,
  'Joule': 0.001,
  'Kilowatt-hour': 3600,
  'Watt-hour': 3600,
  'Calorie (nutritional)': 4186.8,
  'Horsepower (metric) Hour': 2.6478e6,
  'Btu (IT)': 1055.06,
  'Btu (th)': 1054.35,
  'Break': 1,
  'Gigajoule': 1e6,
  'Megajoule': 1000,
  'Millijoule': 1e-6,
  'Microjoule': 1e-9,
  'Nanojoule': 1e-12,
  'Attojoule': 1e-21,
  'Megaelectron-volt': 1.60218e-16,
  'Kiloelectron-volt': 1.60218e-19,
  'Electron-volt': 1.60218e-22,
  'Erg': 1e-10,
  'Gigawatt-hour': 3.6e9,
  'Megawatt-hour': 3.6e6,
  'Kilowatt-second': 1,
  'Watt-second': 0.001,
  'Newton Meter': 0.001,
  'Horsepower Hour': 2.6845e6,
  'Calorie (IT)': 0.0041868,
  'Calorie (th)': 0.004184,
  'Mega Btu (IT)': 1.05506e6,
  'Ton-hour (refrigeration)': 1.26607e4,
  'Fuel Oil Equivalent @kiloliter': 4.2e7,
  'Fuel Oil Equivalent @barrel (US)': 6.6e6,
  'Gigaton': 4.184e15,
  'Megaton': 4.184e12,
  'Kiloton': 4.184e9,
  'Ton (explosives)': 4.184e6,
  'Dyne Centimeter': 1e-10,
  'Gram-force Meter': 9.80665e-6,
  'Gram-force Centimeter': 9.80665e-8,
  'Kilogram-force Centimeter': 9.80665e-5,
  'Kilogram-force Meter': 0.00980665,
  'Kilopond Meter': 0.00980665,
  'Pound-force Foot': 0.00135582,
  'Pound-force Inch': 0.000112985,
  'Ounce-force Inch': 7.06155e-6,
  'Inch-pound': 0.000112985,
  'Inch-ounce': 7.06155e-6,
  'Poundal Foot': 0.0000421401,
  'Therm': 1.05506e5,
  'Therm (EC)': 1.05506e5,
  'Therm (US)': 1.0548e5,
  'Hartree Energy': 4.35974e-21,
  'Rydberg Constant': 2.17987e-21
};

const convert = (value: number, from: string, to: string): number => {
  const fromInKJs = value;
  const toFactor = energyToKJ[to];
  if (!toFactor) return 0;
  return fromInKJs / toFactor;
};

const toUnits = Object.keys(energyToKJ).sort();

const KilojouleToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Kilojoule to All Units Converter"
      lockedFromUnit="Kilojoule"
      units={toUnits}
      convert={convert}
    />
  );
};

export default KilojouleToAllPage;
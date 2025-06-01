'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 Watt)
const wattToWatt: Record<string, number> = {
  'Watt': 1,
  'Exawatt': 1e-18,
  'Petawatt': 1e-15,
  'Terawatt': 1e-12,
  'Gigawatt': 1e-9,
  'Megawatt': 1e-6,
  'Kilowatt': 0.001,
  'Hectowatt': 0.01,
  'Dekawatt': 0.1,
  'Deciwatt': 10,
  'Centiwatt': 100,
  'Milliwatt': 1000,
  'Microwatt': 1e6,
  'Nanowatt': 1e9,
  'Picowatt': 1e12,
  'Femtowatt': 1e15,
  'Attowatt': 1e18,
  'Horsepower': 0.00134102,
  'Horsepower (550 Ft*lbf/s)': 0.00135962,
  'Horsepower (boiler)': 0.000101942,
  'Horsepower (electric)': 0.00134048,
  'Horsepower (water)': 0.00134041,
  'Pferdestarke (ps)': 0.00135962,
  'Btu (IT)/hour': 3.41214,
  'Btu (IT)/minute': 0.056869,
  'Btu (IT)/second': 0.000947817,
  'Btu (th)/hour': 3.41443,
  'Btu (th)/minute': 0.056907,
  'Btu (th)/second': 0.000948452,
  'MBtu (IT)/hour': 0.00341214,
  'MBH': 0.00341214,
  'Ton (refrigeration)': 0.000284345,
  'Kilocalorie (IT)/hour': 0.859845,
  'Kilocalorie (IT)/minute': 0.0143308,
  'Kilocalorie (IT)/second': 0.000238846,
  'Kilocalorie (th)/hour': 0.860421,
  'Kilocalorie (th)/minute': 0.0143403,
  'Kilocalorie (th)/second': 0.000239006,
  'Calorie (IT)/hour': 859.845,
  'Calorie (IT)/minute': 14.3308,
  'Calorie (IT)/second': 0.238846,
  'Calorie (th)/hour': 860.421,
  'Calorie (th)/minute': 14.3403,
  'Calorie (th)/second': 0.239006,
  'Foot Pound-force/hour': 2655.22,
  'Foot Pound-force/minute': 44.2537,
  'Foot Pound-force/second': 0.737562,
  'Pound-foot/hour': 2655.22,
  'Pound-foot/minute': 44.2537,
  'Pound-foot/second': 0.737562,
  'Erg/second': 1e7,
  'Kilovolt Ampere': 0.001,
  'Volt Ampere': 1,
  'Newton Meter/second': 1,
  'Joule/second': 1,
  'Exajoule/second': 1e-18,
  'Petajoule/second': 1e-15,
  'Terajoule/second': 1e-12,
  'Gigajoule/second': 1e-9,
  'Megajoule/second': 1e-6,
  'Kilojoule/second': 0.001,
  'Hectojoule/second': 0.01,
  'Dekajoule/second': 0.1,
  'Decijoule/second': 10,
  'Centijoule/second': 100,
  'Millijoule/second': 1000,
  'Microjoule/second': 1e6,
  'Nanojoule/second': 1e9,
  'Picojoule/second': 1e12,
  'Femtojoule/second': 1e15,
  'Attojoule/second': 1e18,
  'Joule/hour': 3600,
  'Joule/minute': 60,
  'Kilojoule/hour': 3.6,
  'Kilojoule/minute': 0.06
};

const convert = (value: number, from: string, to: string): number => {
  const fromInWatts = value;
  const toFactor = wattToWatt[to];
  if (!toFactor) return 0;
  return fromInWatts / toFactor;
};

const toUnits = Object.keys(wattToWatt).sort();

const WattToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Watt to All Units Converter"
      lockedFromUnit="Watt"
      units={toUnits}
      convert={convert}
    />
  );
};

export default WattToAllPage;
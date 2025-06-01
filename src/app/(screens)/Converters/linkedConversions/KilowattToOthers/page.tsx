'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 kilowatt)
const powerToKilowatt: Record<string, number> = {
  'Watt': 0.001,
  'Exawatt': 1e18,
  'Petawatt': 1e15,
  'Terawatt': 1e12,
  'Gigawatt': 1e9,
  'Megawatt': 1e6,
  'Hectowatt': 10,
  'Dekawatt': 100,
  'Deciwatt': 10000,
  'Centiwatt': 100000,
  'Milliwatt': 1e6,
  'Microwatt': 1e9,
  'Nanowatt': 1e12,
  'Picowatt': 1e15,
  'Femtowatt': 1e18,
  'Attowatt': 1e21,
  'Horsepower': 0.7457,
  'Horsepower (550 Ft*lbf/s)': 0.735499,
  'Horsepower (boiler)': 0.101942,
  'Horsepower (electric)': 0.746043,
  'Horsepower (water)': 0.746116,
  'Pferdestarke (ps)': 0.735499,
  'Btu (IT)/hour': 0.293071,
  'Btu (IT)/minute': 0.00488484,
  'Btu (IT)/second': 0.000081414,
  'Btu (th)/hour': 0.293268,
  'Btu (th)/minute': 0.0048878,
  'Btu (th)/second': 0.0000814634,
  'MBtu (IT)/hour': 0.000293071,
  'MBH': 0.000293071,
  'Ton (refrigeration)': 0.0244226,
  'Kilocalorie (IT)/hour': 0.0738987,
  'Kilocalorie (IT)/minute': 0.00123165,
  'Kilocalorie (IT)/second': 0.0000205275,
  'Kilocalorie (th)/hour': 0.0739486,
  'Kilocalorie (th)/minute': 0.00123248,
  'Kilocalorie (th)/second': 0.0000205413,
  'Calorie (IT)/hour': 73.8987,
  'Calorie (IT)/minute': 1.23165,
  'Calorie (IT)/second': 0.0205275,
  'Calorie (th)/hour': 73.9486,
  'Calorie (th)/minute': 1.23248,
  'Calorie (th)/second': 0.0205413,
  'Foot Pound-force/hour': 0.000280624,
  'Foot Pound-force/minute': 0.00467707,
  'Foot Pound-force/second': 0.0000779511,
  'Pound-foot/hour': 0.000280624,
  'Pound-foot/minute': 0.00467707,
  'Pound-foot/second': 0.0000779511,
  'Erg/second': 1e10,
  'Kilovolt Ampere': 1,
  'Volt Ampere': 1000,
  'Newton Meter/second': 1000,
  'Joule/second': 1000,
  'Exajoule/second': 1e15,
  'Petajoule/second': 1e12,
  'Terajoule/second': 1e9,
  'Gigajoule/second': 1e6,
  'Megajoule/second': 1000,
  'Kilojoule/second': 1,
  'Hectojoule/second': 10,
  'Dekajoule/second': 100,
  'Decijoule/second': 10000,
  'Centijoule/second': 100000,
  'Millijoule/second': 1e6,
  'Microjoule/second': 1e9,
  'Nanojoule/second': 1e12,
  'Picojoule/second': 1e15,
  'Femtojoule/second': 1e18,
  'Attojoule/second': 1e21,
  'Joule/hour': 0.000277778,
  'Joule/minute': 0.00466667,
  'Kilojoule/hour': 0.277778,
  'Kilojoule/minute': 4.66667
};

const convert = (value: number, from: string, to: string): number => {
  const fromInKilowatts = value;
  const toFactor = powerToKilowatt[to];
  if (!toFactor) return 0;
  return fromInKilowatts / toFactor;
};

const toUnits = Object.keys(powerToKilowatt).sort();

const KilowattToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Kilowatt to All Units Converter"
      lockedFromUnit="Kilowatt"
      units={toUnits}
      convert={convert}
    />
  );
};

export default KilowattToAllPage;
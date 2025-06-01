'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 Btu (IT)/hour)
const btuToBtu: Record<string, number> = {
  'Ton (refrigeration)': 0.0000833333,
  'Watt': 0.293071,
  'Exawatt': 2.93071e-19,
  'Petawatt': 2.93071e-16,
  'Terawatt': 2.93071e-13,
  'Gigawatt': 2.93071e-10,
  'Megawatt': 2.93071e-7,
  'Kilowatt': 0.000293071,
  'Hectowatt': 0.00293071,
  'Dekawatt': 0.0293071,
  'Deciwatt': 2.93071,
  'Centiwatt': 29.3071,
  'Milliwatt': 293.071,
  'Microwatt': 293071,
  'Nanowatt': 2.93071e8,
  'Picowatt': 2.93071e11,
  'Femtowatt': 2.93071e14,
  'Attowatt': 2.93071e17,
  'Horsepower': 0.000393015,
  'Horsepower (550 Ft*lbf/s)': 0.000398466,
  'Horsepower (metric)': 0.000398466,
  'Horsepower (boiler)': 2.98733e-5,
  'Horsepower (electric)': 0.000392857,
  'Horsepower (water)': 0.000392782,
  'Pferdestarke (ps)': 0.000398466,
  'Btu (IT)/hour': 1,
  'Btu (IT)/minute': 0.0166667,
  'Btu (IT)/second': 0.000277778,
  'Btu (th)/hour': 1.00067,
  'Btu (th)/minute': 0.0166778,
  'Btu (th)/second': 0.000277963,
  'MBtu (IT)/hour': 0.001,
  'MBH': 0.001,
  'Kilocalorie (IT)/hour': 0.251996,
  'Kilocalorie (IT)/minute': 0.00419993,
  'Kilocalorie (IT)/second': 6.99988e-5,
  'Kilocalorie (th)/hour': 0.252164,
  'Kilocalorie (th)/minute': 0.00420273,
  'Kilocalorie (th)/second': 7.00455e-5,
  'Calorie (IT)/hour': 251.996,
  'Calorie (IT)/minute': 4.19993,
  'Calorie (IT)/second': 0.0699988,
  'Calorie (th)/hour': 252.164,
  'Calorie (th)/minute': 4.20273,
  'Calorie (th)/second': 0.0700455,
  'Foot Pound-force/hour': 778.169,
  'Foot Pound-force/minute': 12.9695,
  'Foot Pound-force/second': 0.216158,
  'Pound-foot/hour': 778.169,
  'Pound-foot/minute': 12.9695,
  'Pound-foot/second': 0.216158,
  'Erg/second': 2930710,
  'Kilovolt Ampere': 0.000293071,
  'Volt Ampere': 0.293071,
  'Newton Meter/second': 0.293071,
  'Joule/second': 0.293071,
  'Exajoule/second': 2.93071e-19,
  'Petajoule/second': 2.93071e-16,
  'Terajoule/second': 2.93071e-13,
  'Gigajoule/second': 2.93071e-10,
  'Megajoule/second': 2.93071e-7,
  'Kilojoule/second': 0.000293071,
  'Hectojoule/second': 0.00293071,
  'Dekajoule/second': 0.0293071,
  'Decijoule/second': 2.93071,
  'Centijoule/second': 29.3071,
  'Millijoule/second': 293.071,
  'Microjoule/second': 293071,
  'Nanojoule/second': 2.93071e8,
  'Picojoule/second': 2.93071e11,
  'Femtojoule/second': 2.93071e14,
  'Attojoule/second': 2.93071e17,
  'Joule/hour': 1055.06,
  'Joule/minute': 17.5843,
  'Kilojoule/hour': 1.05506,
  'Kilojoule/minute': 0.0175843
};

const convert = (value: number, from: string, to: string): number => {
  const fromInBtu = value;
  const toFactor = btuToBtu[to];
  if (!toFactor) return 0;
  return fromInBtu / toFactor;
};

const toUnits = Object.keys(btuToBtu).sort();

const BtuToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Btu (IT)/hour to All Units Converter"
      lockedFromUnit="Btu (IT)/hour"
      units={toUnits}
      convert={convert}
    />
  );
};

export default BtuToAllPage;
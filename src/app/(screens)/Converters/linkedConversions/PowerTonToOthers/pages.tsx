'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 Ton of refrigeration)
const tonToTon: Record<string, number> = {
  'Watt': 3516.85284207,
  'Exawatt': 3.51685284207e-15,
  'Petawatt': 3.51685284207e-12,
  'Terawatt': 3.51685284207e-9,
  'Gigawatt': 0.00000351685,
  'Megawatt': 0.00351685,
  'Kilowatt': 3.51685,
  'Hectowatt': 35.1685,
  'Dekawatt': 351.685,
  'Deciwatt': 35168.5,
  'Centiwatt': 351685,
  'Milliwatt': 3516852.84,
  'Microwatt': 3516852842.07,
  'Nanowatt': 3.51685284207e12,
  'Picowatt': 3.51685284207e15,
  'Femtowatt': 3.51685284207e18,
  'Attowatt': 3.51685284207e21,
  'Horsepower': 4.71618,
  'Horsepower (550 Ft*lbf/s)': 4.71428,
  'Horsepower (metric)': 4.78159,
  'Horsepower (boiler)': 0.358514,
  'Horsepower (electric)': 4.71464,
  'Horsepower (water)': 4.71428,
  'Pferdestarke (ps)': 4.78159,
  'Btu (IT)/minute': 200,
  'Btu (IT)/second': 3.33333,
  'Btu (IT)/hour': 12000,
  'Btu (th)/hour': 12008.03,
  'Btu (th)/minute': 200.134,
  'Btu (th)/second': 3.33556,
  'MBtu (IT)/hour': 12,
  'MBH': 12,
  'Ton (refrigeration)': 1,
  'Kilocalorie (IT)/hour': 3023.95,
  'Kilocalorie (IT)/minute': 50.3992,
  'Kilocalorie (IT)/second': 0.839986,
  'Kilocalorie (th)/hour': 3025.97,
  'Kilocalorie (th)/minute': 50.4329,
  'Kilocalorie (th)/second': 0.840548,
  'Calorie (IT)/hour': 3023950,
  'Calorie (IT)/minute': 50399.2,
  'Calorie (IT)/second': 839.986,
  'Calorie (th)/hour': 3025970,
  'Calorie (th)/minute': 50432.9,
  'Calorie (th)/second': 840.548,
  'Foot Pound-force/hour': 9338031.19,
  'Foot Pound-force/minute': 155633.853,
  'Foot Pound-force/second': 2593.9,
  'Pound-foot/hour': 9338031.19,
  'Pound-foot/minute': 155633.853,
  'Pound-foot/second': 2593.9,
  'Erg/second': 35168528420.7,
  'Kilovolt Ampere': 3.51685,
  'Volt Ampere': 3516.85,
  'Newton Meter/second': 3516.85,
  'Joule/second': 3516.85,
  'Exajoule/second': 3.51685284207e-15,
  'Petajoule/second': 3.51685284207e-12,
  'Terajoule/second': 3.51685284207e-9,
  'Gigajoule/second': 0.00000351685,
  'Megajoule/second': 0.00351685,
  'Kilojoule/second': 3.51685,
  'Hectojoule/second': 35.1685,
  'Dekajoule/second': 351.685,
  'Decijoule/second': 35168.5,
  'Centijoule/second': 351685,
  'Millijoule/second': 3516852.84,
  'Microjoule/second': 3516852842.07,
  'Nanojoule/second': 3.51685284207e12,
  'Picojoule/second': 3.51685284207e15,
  'Femtojoule/second': 3.51685284207e18,
  'Attojoule/second': 3.51685284207e21,
  'Joule/hour': 12660670.23,
  'Joule/minute': 211011.17,
  'Kilojoule/hour': 12660.67,
  'Kilojoule/minute': 211.011
};

const convert = (value: number, from: string, to: string): number => {
  const fromInTons = value;
  const toFactor = tonToTon[to];
  if (!toFactor) return 0;
  return fromInTons / toFactor;
};

const toUnits = Object.keys(tonToTon).sort();

const TonToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Ton (refrigeration) to All Units Converter"
      lockedFromUnit="Ton (refrigeration)"
      units={toUnits}
      convert={convert}
    />
  );
};

export default TonToAllPage;
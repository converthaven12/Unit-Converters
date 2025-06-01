'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 horsepower (metric))
const powerToHorsepowerMetric: Record<string, number> = {
  'Watt': 0.00135962,
  'Kilowatt': 1.35962,
  'Exawatt': 1.35962e18,
  'Petawatt': 1.35962e15,
  'Terawatt': 1.35962e12,
  'Gigawatt': 1.35962e9,
  'Megawatt': 1.35962e6,
  'Hectowatt': 13.5962,
  'Dekawatt': 135.962,
  'Deciwatt': 13596.2,
  'Centiwatt': 135962,
  'Milliwatt': 1.35962e6,
  'Microwatt': 1.35962e9,
  'Nanowatt': 1.35962e12,
  'Picowatt': 1.35962e15,
  'Femtowatt': 1.35962e18,
  'Attowatt': 1.35962e21,
  'Horsepower': 1.01387,
  'Horsepower (550 Ft*lbf/s)': 1,
  'Horsepower (boiler)': 0.138595,
  'Horsepower (electric)': 1.01428,
  'Horsepower (water)': 1.01434,
  'Pferdestarke (ps)': 1,
  'Btu (IT)/hour': 0.393014,
  'Btu (IT)/minute': 0.00655023,
  'Btu (IT)/second': 0.00010917,
  'Btu (th)/hour': 0.393277,
  'Btu (th)/minute': 0.00655462,
  'Btu (th)/second': 0.000109244,
  'MBtu (IT)/hour': 0.000393014,
  'MBH': 0.000393014,
  'Ton (refrigeration)': 0.0327512,
  'Kilocalorie (IT)/hour': 0.099108,
  'Kilocalorie (IT)/minute': 0.0016518,
  'Kilocalorie (IT)/second': 0.00002753,
  'Kilocalorie (th)/hour': 0.0991743,
  'Kilocalorie (th)/minute': 0.00165291,
  'Kilocalorie (th)/second': 0.0000275485,
  'Calorie (IT)/hour': 99.108,
  'Calorie (IT)/minute': 1.6518,
  'Calorie (IT)/second': 0.02753,
  'Calorie (th)/hour': 99.1743,
  'Calorie (th)/minute': 1.65291,
  'Calorie (th)/second': 0.0275485,
  'Foot Pound-force/hour': 0.000376616,
  'Foot Pound-force/minute': 0.00627693,
  'Foot Pound-force/second': 0.000104616,
  'Pound-foot/hour': 0.000376616,
  'Pound-foot/minute': 0.00627693,
  'Pound-foot/second': 0.000104616,
  'Erg/second': 1.35962e7,
  'Kilovolt Ampere': 1.35962,
  'Volt Ampere': 1359.62,
  'Newton Meter/second': 1359.62,
  'Joule/second': 1359.62,
  'Exajoule/second': 1.35962e15,
  'Petajoule/second': 1.35962e12,
  'Terajoule/second': 1.35962e9,
  'Gigajoule/second': 1.35962e6,
  'Megajoule/second': 1359.62,
  'Kilojoule/second': 1.35962,
  'Hectojoule/second': 13.5962,
  'Dekajoule/second': 135.962,
  'Decijoule/second': 13596.2,
  'Centijoule/second': 135962,
  'Millijoule/second': 1.35962e6,
  'Microjoule/second': 1.35962e9,
  'Nanojoule/second': 1.35962e12,
  'Picojoule/second': 1.35962e15,
  'Femtojoule/second': 1.35962e18,
  'Attojoule/second': 1.35962e21,
  'Joule/hour': 0.000377673,
  'Joule/minute': 0.00626119,
  'Kilojoule/hour': 0.377673,
  'Kilojoule/minute': 6.26119
};

const convert = (value: number, from: string, to: string): number => {
  const fromInHorsepowerMetric = value;
  const toFactor = powerToHorsepowerMetric[to];
  if (!toFactor) return 0;
  return fromInHorsepowerMetric / toFactor;
};

const toUnits = Object.keys(powerToHorsepowerMetric).sort();

const HorsepowerMetricToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Horsepower (metric) to All Units Converter"
      lockedFromUnit="Horsepower (metric)"
      units={toUnits}
      convert={convert}
    />
  );
};

export default HorsepowerMetricToAllPage;
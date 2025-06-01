'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const convertKelvin = (value: number, to: string): number => {
  switch (to) {
    case 'Celsius':
      return value - 273.15;
    case 'Fahrenheit':
      return (value - 273.15) * 9/5 + 32;
    case 'Rankine':
      return value * 1.8;
    case 'Reaumur':
      return (value - 273.15) * 4/5;
    case 'Triple Point Of Water':
      return value / 273.16;
    default:
      return 0;
  }
};

const toUnits = ['Celsius', 'Fahrenheit', 'Rankine', 'Reaumur', 'Triple Point Of Water'].sort();

const KelvinToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Kelvin to All Units Converter"
      lockedFromUnit="Kelvin"
      units={toUnits}
      convert={(value, from, to) => convertKelvin(value, to)}
    />
  );
};

export default KelvinToAllPage;
'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const convertFahrenheit = (value: number, to: string): number => {
  switch (to) {
    case 'Celsius':
      return (value - 32) * 5/9;
    case 'Kelvin':
      return (value - 32) * 5/9 + 273.15;
    case 'Rankine':
      return value + 459.67;
    case 'Reaumur':
      return (value - 32) * 4/9;
    case 'Triple Point Of Water':
      return ((value - 32) * 5/9 + 273.15) / 273.16;
    default:
      return 0;
  }
};

const toUnits = ['Celsius', 'Kelvin', 'Rankine', 'Reaumur', 'Triple Point Of Water'].sort();

const FahrenheitToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Fahrenheit to All Units Converter"
      lockedFromUnit="Fahrenheit"
      units={toUnits}
      convert={(value, from, to) => convertFahrenheit(value, to)}
    />
  );
};

export default FahrenheitToAllPage;
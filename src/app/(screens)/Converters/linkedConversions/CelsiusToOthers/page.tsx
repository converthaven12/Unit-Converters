'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

const convertCelsius = (value: number, to: string): number => {
  switch (to) {
    case 'Kelvin':
      return value + 273.15;
    case 'Fahrenheit':
      return value * 9/5 + 32;
    case 'Rankine':
      return (value + 273.15) * 1.8;
    case 'Reaumur':
      return value * 4/5;
    case 'Triple Point Of Water':
      return (value + 273.15) / 273.16;
    default:
      return 0;
  }
};

const toUnits = ['Kelvin', 'Fahrenheit', 'Rankine', 'Reaumur', 'Triple Point Of Water'].sort();

const CelsiusToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Celsius to All Units Converter"
      lockedFromUnit="Celsius"
      units={toUnits}
      convert={(value, from, to) => convertCelsius(value, to)}
    />
  );
};

export default CelsiusToAllPage;
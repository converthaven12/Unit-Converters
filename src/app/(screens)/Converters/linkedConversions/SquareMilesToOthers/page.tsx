'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 square mile)
const areaToSqMile: Record<string, number> = {
  'Acres': 640,
  'Square Meter': 0.000000386102,
  'Square Kilometer': 0.386102,
  'Square Centimeter': 3.86102e-11,
  'Square Millimeter': 3.86102e-13,
  'Square Micrometer': 3.86102e-19,
  'Hectare': 258.999,
  'Square Yard': 0.000000322831,
  'Square Foot': 0.00000003587,
  'Square Inch': 2.78784e-12,
  'Break': 1,
  'Square Hectometer': 0.258999,
  'Square Dekameter': 2.58999,
  'Square Decimeter': 2589988.11,
  'Square Nanometer': 3.86102e-25,
  'Are': 258.999,
  'Barn': 3.86102e+34,
  'Square Mile (US Survey)': 1.000004,
  'Square Foot (US Survey)': 0.00000003587,
  'Circular Inch': 1.97353e-8,
  'Township': 0.000976562,
  'Section': 1,
  'Acre (US Survey)': 640.00256,
  'Rood': 2560,
  'Square Chain': 6400,
  'Square Rod': 102400,
  'Square Rod (US Survey)': 102400.41,
  'Square Perch': 102400,
  'Square Pole': 102400,
  'Square Mil': 2.78784e-18,
  'Circular Mil': 1.97353e-12,
  'Homestead': 4,
  'Sabin': 27878400,
  'Arpent': 0.088736,
  'Cuerda': 0.162316,
  'Plaza': 0.00015625,
  'Varas Castellanas Cuad': 37066.7,
  'Varas Conuqueras Cuad': 4118.52,
  'Electron Cross Section': 3.86102e+34
};

const convert = (value: number, from: string, to: string): number => {
  const fromInSqMiles = value;
  const toFactor = areaToSqMile[to];
  if (!toFactor) return 0;
  return fromInSqMiles / toFactor;
};

const toUnits = Object.keys(areaToSqMile).sort();

const SquareMileToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Square Mile to All Units Converter"
      lockedFromUnit="Square Mile"
      units={toUnits}
      convert={convert}
    />
  );
};

export default SquareMileToAllPage;
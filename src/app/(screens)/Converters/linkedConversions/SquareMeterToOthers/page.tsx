'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 square meter)
const areaToSqM: Record<string, number> = {
  'Square Feet': 10.7639,
  'Square Kilometer': 1e6,
  'Square Centimeter': 0.0001,
  'Square Millimeter': 1e-6,
  'Square Micrometer': 1e-12,
  'Hectare': 10000,
  'Acre': 4046.86,
  'Square Mile': 2.59e6,
  'Square Yard': 1.19599,
  'Square Inch': 1550,
  'Break': 1,
  'Square Hectometer': 100,
  'Square Dekameter': 1,
  'Square Decimeter': 100,
  'Square Nanometer': 1e-18,
  'Are': 1,
  'Barn': 1e+28,
  'Square Mile (US Survey)': 2.59e6,
  'Square Foot (US Survey)': 10.7639,
  'Circular Inch': 0.000005067,
  'Township': 0.000000003861,
  'Section': 0.000003861,
  'Acre (US Survey)': 4046.87261,
  'Rood': 1011.71,
  'Square Chain': 404.686,
  'Square Rod': 25.2929,
  'Square Rod (US Survey)': 25.2935,
  'Square Perch': 25.2929,
  'Square Pole': 25.2929,
  'Square Mil': 1.55e-9,
  'Circular Mil': 5.067e-7,
  'Homestead': 0.000000001562,
  'Sabin': 10.7639,
  'Arpent': 0.000341874,
  'Cuerda': 0.000628316,
  'Plaza': 0.000625,
  'Varas Castellanas Cuad': 1.43115,
  'Varas Conuqueras Cuad': 0.159017,
  'Electron Cross Section': 1.503202e+28
};

const convert = (value: number, from: string, to: string): number => {
  const fromInSqM = value;
  const toFactor = areaToSqM[to];
  if (!toFactor) return 0;
  return fromInSqM / toFactor;
};

const toUnits = Object.keys(areaToSqM).sort();

const SquareMeterToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Square Meter to All Units Converter"
      lockedFromUnit="Square Meter"
      units={toUnits}
      convert={convert}
    />
  );
};

export default SquareMeterToAllPage;
'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 square foot)
const areaToSqFt: Record<string, number> = {
  'Square Yard': 0.111111,
  'Square Meter': 0.092903,
  'Square Kilometer': 92903,
  'Square Centimeter': 9.2903e-6,
  'Square Millimeter': 9.2903e-8,
  'Square Micrometer': 9.2903e-14,
  'Hectare': 929.03,
  'Acre': 43560,
  'Square Mile': 27878400,
  'Square Inch': 144,
  'Break': 1,
  'Square Hectometer': 9290.3,
  'Square Dekameter': 929.03,
  'Square Decimeter': 9290.3,
  'Square Nanometer': 9.2903e-20,
  'Are': 929.03,
  'Barn': 9.2903e+32,
  'Square Mile (US Survey)': 27879000,
  'Square Foot (US Survey)': 1.000004,
  'Circular Inch': 0.000054783,
  'Township': 0.00000003587,
  'Section': 0.00003587,
  'Acre (US Survey)': 43560.17424,
  'Rood': 10890,
  'Square Chain': 4356,
  'Square Rod': 272.25,
  'Square Rod (US Survey)': 272.252,
  'Square Perch': 272.25,
  'Square Pole': 272.25,
  'Square Mil': 0.000000144,
  'Circular Mil': 0.000054783,
  'Homestead': 0.00000002296,
  'Sabin': 1,
  'Arpent': 0.000007971,
  'Cuerda': 0.000014599,
  'Plaza': 0.000006944,
  'Varas Castellanas Cuad': 0.143208,
  'Varas Conuqueras Cuad': 0.015912,
  'Electron Cross Section': 1.396522e+30
};

const convert = (value: number, from: string, to: string): number => {
  const fromInSqFt = value;
  const toFactor = areaToSqFt[to];
  if (!toFactor) return 0;
  return fromInSqFt / toFactor;
};

const toUnits = Object.keys(areaToSqFt).sort();

const SquareFootToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Square Foot to All Units Converter"
      lockedFromUnit="Square Foot"
      units={toUnits}
      convert={convert}
    />
  );
};

export default SquareFootToAllPage;
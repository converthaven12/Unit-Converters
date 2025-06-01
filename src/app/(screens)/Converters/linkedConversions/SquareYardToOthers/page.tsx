'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 square yard)
const areaToSqYd: Record<string, number> = {
  'Square Feet': 9,
  'Square Meter': 0.836127,
  'Square Kilometer': 836127,
  'Square Centimeter': 8.36127e-6,
  'Square Millimeter': 8.36127e-8,
  'Square Micrometer': 8.36127e-14,
  'Hectare': 8361.27,
  'Acre': 4840,
  'Square Mile': 3097600,
  'Square Inch': 1296,
  'Break': 1,
  'Square Hectometer': 8361.27,
  'Square Dekameter': 836.127,
  'Square Decimeter': 83612.7,
  'Square Nanometer': 8.36127e-20,
  'Are': 836.127,
  'Barn': 8.36127e+32,
  'Square Mile (US Survey)': 3097600,
  'Square Foot (US Survey)': 9.000036,
  'Circular Inch': 0.000493,
  'Township': 0.000000322831,
  'Section': 0.000322831,
  'Acre (US Survey)': 4840.0084,
  'Rood': 1210,
  'Square Chain': 4840,
  'Square Rod': 302.5,
  'Square Rod (US Survey)': 302.501,
  'Square Perch': 302.5,
  'Square Pole': 302.5,
  'Square Mil': 1.296e-9,
  'Circular Mil': 4.93e-7,
  'Homestead': 0.000000206612,
  'Sabin': 9,
  'Arpent': 0.00007174,
  'Cuerda': 0.000131415,
  'Plaza': 0.0000625,
  'Varas Castellanas Cuad': 1.28888,
  'Varas Conuqueras Cuad': 0.143208,
  'Electron Cross Section': 1.25687e+30
};

const convert = (value: number, from: string, to: string): number => {
  const fromInSqYd = value;
  const toFactor = areaToSqYd[to];
  if (!toFactor) return 0;
  return fromInSqYd / toFactor;
};

const toUnits = Object.keys(areaToSqYd).sort();

const SquareYardToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Square Yard to All Units Converter"
      lockedFromUnit="Square Yard"
      units={toUnits}
      convert={convert}
    />
  );
};

export default SquareYardToAllPage;
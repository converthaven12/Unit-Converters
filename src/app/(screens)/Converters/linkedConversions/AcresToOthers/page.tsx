'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 acre)
const areaToAcre: Record<string, number> = {
  'Square Feet': 0.0000229568,
  'Square Meter': 0.000247105,
  'Square Kilometer': 247.105,
  'Square Centimeter': 2.47105e-8,
  'Square Millimeter': 2.47105e-11,
  'Square Micrometer': 2.47105e-17,
  'Hectare': 2.47105,
  'Square Miles': 640,
  'Square Yard': 0.000206612,
  'Square Inch': 1.59423e-10,
  'Break': 1,
  'Square Hectometer': 0.0247105,
  'Square Dekameter': 0.247105,
  'Square Decimeter': 2471.05,
  'Square Nanometer': 2.47105e-23,
  'Are': 0.247105,
  'Barn': 2.47105e+34,
  'Square Mile (US Survey)': 640.00256,
  'Square Foot (US Survey)': 0.0000229567,
  'Circular Inch': 5.06708e-7,
  'Township': 0.000976562,
  'Section': 1,
  'Acre (US Survey)': 1.000002,
  'Rood': 4,
  'Square Chain': 10,
  'Square Rod': 160,
  'Square Rod (US Survey)': 160.00064,
  'Square Perch': 160,
  'Square Pole': 160,
  'Square Mil': 1.59423e-16,
  'Circular Mil': 5.06708e-13,
  'Homestead': 0.0025,
  'Sabin': 43560,
  'Arpent': 0.343164,
  'Cuerda': 0.629371,
  'Plaza': 0.15625,
  'Varas Castellanas Cuad': 3537.94,
  'Varas Conuqueras Cuad': 393.105,
  'Electron Cross Section': 3.726563e+31
};

const convert = (value: number, from: string, to: string): number => {
  const fromInAcres = value;
  const toFactor = areaToAcre[to];
  if (!toFactor) return 0;
  return fromInAcres / toFactor;
};

const toUnits = Object.keys(areaToAcre).sort();

const AcreToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Acre to All Units Converter"
      lockedFromUnit="Acre"
      units={toUnits}
      convert={convert}
    />
  );
};

export default AcreToAllPage;
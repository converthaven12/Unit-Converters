'use client';

import React from 'react';
import LockedUnitConverter from '../../../../utils/components/LockedConverter/LockedConverter';

// Conversion factors (relative to 1 hectare)
const areaToHectare: Record<string, number> = {
  'Acres': 0.404686,
  'Square Meter': 0.0001,
  'Square Kilometer': 100,
  'Square Centimeter': 1e-8,
  'Square Millimeter': 1e-10,
  'Square Micrometer': 1e-16,
  'Square Mile': 258.999,
  'Square Yard': 0.0000836127,
  'Square Foot': 0.0000092903,
  'Square Inch': 6.4516e-11,
  'Break': 1,
  'Square Hectometer': 1,
  'Square Dekameter': 0.01,
  'Square Decimeter': 100,
  'Square Nanometer': 1e-20,
  'Are': 1,
  'Barn': 1e+32,
  'Square Mile (US Survey)': 258.999847,
  'Square Foot (US Survey)': 0.0000092903,
  'Circular Inch': 2.05053e-7,
  'Township': 0.000395369,
  'Section': 0.00386102,
  'Acre (US Survey)': 0.404687,
  'Rood': 0.161874,
  'Square Chain': 0.0247105,
  'Square Rod': 0.0395369,
  'Square Rod (US Survey)': 0.0395367,
  'Square Perch': 0.0395369,
  'Square Pole': 0.0395369,
  'Square Mil': 6.4516e-14,
  'Circular Mil': 2.05053e-10,
  'Homestead': 0.0000101171,
  'Sabin': 1076.39,
  'Arpent': 0.138863,
  'Cuerda': 0.254427,
  'Plaza': 0.0625,
  'Varas Castellanas Cuad': 1431.42,
  'Varas Conuqueras Cuad': 159.035,
  'Electron Cross Section': 1.507557e+31
};

const convert = (value: number, from: string, to: string): number => {
  const fromInHectares = value;
  const toFactor = areaToHectare[to];
  if (!toFactor) return 0;
  return fromInHectares / toFactor;
};

const toUnits = Object.keys(areaToHectare).sort();

const HectareToAllPage = () => {
  return (
    <LockedUnitConverter
      heading="Hectare to All Units Converter"
      lockedFromUnit="Hectare"
      units={toUnits}
      convert={convert}
    />
  );
};

export default HectareToAllPage;
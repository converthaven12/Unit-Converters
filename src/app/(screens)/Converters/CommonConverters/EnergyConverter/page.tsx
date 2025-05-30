'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const energyUnits: Record<string, number> = {
  Joule: 1,
  Kilojoule: 1e3,
  Megajoule: 1e6,
  Gigajoule: 1e9,
  Calorie: 4.184,
  Kilocalorie: 4184,
  WattHour: 3600,
  KilowattHour: 3.6e6,
  Electronvolt: 1.60218e-19,
  BritishThermalUnit: 1055.06,
  Therm: 1.055e8,
  FootPound: 1.35582,
  Erg: 1e-7,
  "Horsepower-hour": 2.6845e6,
  TonTNT: 4.184e9,
  Rydberg: 2.17987e-18,
};

const EnergyConverterPage: React.FC = () => {
  const convertEnergy = (value: number, from: string, to: string): number => {
    const fromFactor = energyUnits[from];
    const toFactor = energyUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Energy Converter"
      units={Object.keys(energyUnits)}
      convert={convertEnergy}
    />
  );
};

export default EnergyConverterPage;

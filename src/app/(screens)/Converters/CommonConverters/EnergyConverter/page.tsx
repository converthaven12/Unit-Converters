'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const energyUnits: Record<string, number> = {
  Joule: 1,                       // base unit: J
  Kilojoule: 1e3,                // kJ
  Megajoule: 1e6,                // MJ
  Gigajoule: 1e9,                // GJ
  Calorie: 4.184,                // cal (thermochemical calorie)
  Kilocalorie: 4184,             // kcal (nutritional Calorie)
  WattHour: 3600,                // Wh (1 Wh = 3600 J)
  KilowattHour: 3.6e6,           // kWh
  Electronvolt: 1.60218e-19,     // eV
  Kiloelectronvolt: 1.60218e-16, // keV (1 keV = 1000 eV)
  Megaelectronvolt: 1.60218e-13, // MeV (1 MeV = 1,000,000 eV)
  BritishThermalUnit: 1055.06,   // BTU (international)
  Therm: 1.055e8,                // therm (US)
  FootPound: 1.35582,            // ft·lbf
  Erg: 1e-7,                     // erg (CGS)
  "Horsepower-hour": 2.6845e6,   // hp·h (metric)
  TonTNT: 4.184e9,               // ton of TNT (1 ton TNT = 4.184 GJ)
  Rydberg: 2.17987e-18,          // Rydberg energy (atomic physics)
  
  // Additional useful units (optional)
  Millijoule: 1e-3,
  Microjoule: 1e-6,
  Nanojoule: 1e-9,
  Attojoule: 1e-18,
  GigawattHour: 3.6e12,
  MegawattHour: 3.6e9,
  KilowattSecond: 1e3,
  WattSecond: 1,
  NewtonMeter: 1,                // Nm = Joule
  ThermEC: 1.055e8,              // therm (EC)
  ThermUS: 1.055e8,              // therm (US, approx same as above)
  HartreeEnergy: 4.35974e-18,
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

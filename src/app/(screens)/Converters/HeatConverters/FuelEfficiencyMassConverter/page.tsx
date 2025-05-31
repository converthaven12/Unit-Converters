'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const fuelEfficiencyMassUnits: Record<string, number> = {
  "joule/kilogram [J/kg]": 1,                         // base unit
  "kilojoule/kilogram [kJ/kg]": 1e3,                  // 1 kJ/kg = 1000 J/kg
  "calorie (IT)/gram [cal/g]": 4186.8,                // 1 cal (IT)/g = 4186.8 J/kg
  "calorie (th)/gram [cal (th)/g]": 4184,             // 1 cal (th)/g = 4184 J/kg
  "Btu (IT)/pound [Btu/lb]": 2326,                    // 1 Btu (IT)/lb = 2326 J/kg
  "Btu (th)/pound [Btu (th)/lb]": 2315,               // 1 Btu (th)/lb = 2315 J/kg
  "kilogram/joule [kg/J]": 1e-3,                       // 1 kg/J = 0.001 J/kg inverted = 1/1000
  "kilogram/kilojoule [kg/kJ]": 1,                     // 1 kg/kJ = 1 J/kg inverted
  "gram/calorie (IT) [g/cal]": 0.000239006,            // inverse of cal/g (IT), 1 cal/g = 4186.8 J/kg
  "gram/calorie (th) [g/cal (th)]": 0.000239006,       // same as above for thermochemical calorie
  "pound/Btu (IT) [lb/Btu]": 0.000429922,              // inverse of Btu/lb
  "pound/Btu (th) [lb/Btu (th)]": 0.000431,            // inverse of Btu/lb (th)
  "pound/horsepower/hour": 1.0137e-3,                   // 1 hp·h = 2.6855 MJ, so conversion ~1.0137e-3 J/kg (approx)
  "gram/horsepower (metric)/hour": 1.0137e-6,           // gram instead of pound, divide by 1000
  "gram/kilowatt/hour": 3.6e-6,                         // 1 kW·h = 3.6 MJ, so 1 gram/kW·h = 3.6e-6 J/kg
};


const FuelEfficiencyMassConverterPage: React.FC = () => {
  const convert = (value: number, from: string, to: string): number => {
    const fromFactor = fuelEfficiencyMassUnits[from];
    const toFactor = fuelEfficiencyMassUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    // Note: since units are distances per mass, invert for conversion
    return value * (toFactor / fromFactor);
  };

  return (
    <ReusableConverter
      heading="Fuel Efficiency - Mass Converter"
      units={Object.keys(fuelEfficiencyMassUnits)}
      convert={convert}
    />
  );
};

export default FuelEfficiencyMassConverterPage;

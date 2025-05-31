'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const thermalConductivityUnits: Record<string, number> = {
  "watt/meter/K [W/(m*K)]": 1,
  "watt/centimeter/°C": 100,
  "kilowatt/meter/K [kW/(m*K)]": 1000,
  "calorie (IT)/second/cm/°C": 41.840,
  "calorie (th)/second/cm/°C": 41.840,
  "kilocalorie (IT)/hour/meter/°C": 1.162,
  "kilocalorie (th)/hour/meter/°C": 1.162,
  "Btu (IT) inch/second/sq. foot/°F": 0.1449,
  "Btu (th) inch/second/sq. foot/°F": 0.1440,
  "Btu (IT) foot/hour/sq. foot/°F": 0.01207,
  "Btu (th) foot/hour/sq. foot/°F": 0.01196,
  "Btu (IT) inch/hour/sq. foot/°F": 0.001006,
  "Btu (th) inch/hour/sq. foot/°F": 0.000996,
};


const ThermalConductivityConverterPage: React.FC = () => {
  const convert = (value: number, from: string, to: string): number => {
    const fromFactor = thermalConductivityUnits[from];
    const toFactor = thermalConductivityUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return value * (fromFactor / toFactor);
  };

  return (
    <ReusableConverter
      heading="Thermal Conductivity Converter"
      units={Object.keys(thermalConductivityUnits)}
      convert={convert}
    />
  );
};

export default ThermalConductivityConverterPage;

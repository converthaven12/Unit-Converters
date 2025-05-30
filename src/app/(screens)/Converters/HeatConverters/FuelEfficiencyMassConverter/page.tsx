'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const fuelEfficiencyMassUnits: Record<string, number> = {
  "Miles per pound (mi/lb)": 1,
  "Kilometers per kilogram (km/kg)": 0.621371,
  "Miles per kilogram (mi/kg)": 0.453592,
  "Kilometers per pound (km/lb)": 1.60934,
  "Meters per gram (m/g)": 1609.34,
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

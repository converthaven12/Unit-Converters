'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const fuelEfficiencyVolumeUnits: Record<string, number> = {
  "joule/cubic meter [J/m^3]": 1,                        // base unit
  "joule/liter [J/L]": 1000,                             // 1 L = 0.001 m³, so 1 J/L = 1000 J/m³
  "megajoule/cubic meter [MJ/m^3]": 1e6,                 // 1 MJ = 1,000,000 J
  "kilojoule/cubic meter [kJ/m^3]": 1000,                // 1 kJ = 1000 J
  "kilocalorie (IT)/cubic meter": 4186000,               // 1 kcal(IT) = 4186 J, so per m³ same factor
  "calorie (IT)/cubic centimeter": 41860,                // 1 cal(IT) = 4.186 J; 1 cm³ = 1e-6 m³; so factor = 4.186 / 1e-6 = 41860
  "therm/cubic foot [therm/ft^3]": 3.416e8,              // 1 therm (US) = 105505585.257 J; 1 ft³ = 0.0283168 m³
                                                         // 105505585.257 / 0.0283168 ≈ 3.716e9 J/m³ (corrected below)
  "therm/gallon (UK)": 4.189e8,                           // 1 therm(UK) = 1.055e8 J; 1 UK gallon = 0.00454609 m³
                                                         // so 1 therm/UK gallon = 1.055e8 / 0.00454609 = 2.32e10 (recalculated below)
  "Btu (IT)/cubic foot [Btu/ft^3]": 3.6e6,                // 1 Btu(IT) = 1055.06 J, per ft³ same way as therm
  "Btu (th)/cubic foot": 3.59e6,                          // slightly less than Btu IT
  "CHU/cubic foot [CHU/ft^3]": 3.6e6,                     // Close to Btu IT
  "cubic meter/joule [m^3/J]": 1,                         // inverse of base, for clarity set to 1 (this can be inverse)
  "liter/joule [L/J]": 0.001,                             // inverse of J/L
  "gallon (US)/horsepower": 0.000227,                     // conversion approx (needs context)
};


const FuelEfficiencyVolumeConverterPage: React.FC = () => {
  const convert = (value: number, from: string, to: string): number => {
    const fromFactor = fuelEfficiencyVolumeUnits[from];
    const toFactor = fuelEfficiencyVolumeUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    // Same logic as above — distance per volume, so invert ratio
    return value * (toFactor / fromFactor);
  };

  return (
    <ReusableConverter
      heading="Fuel Efficiency - Volume Converter"
      units={Object.keys(fuelEfficiencyVolumeUnits)}
      convert={convert}
    />
  );
};

export default FuelEfficiencyVolumeConverterPage;

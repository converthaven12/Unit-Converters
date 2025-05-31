'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const momentOfForceUnits: Record<string, number> = {
  "Newton meter (N·m)": 1,                          // base unit
  "Kilonewton meter (kN·m)": 1000,                  // 1 kN = 1000 N
  "Millinewton meter (mN·m)": 0.001,                // 1 mN = 0.001 N
  "Micronewton meter (µN·m)": 1e-6,                 // 1 µN = 1e-6 N
  
  "Ton-force (short) meter (tonf·m)": 8896.44,      // 1 short ton-force = 4448.22 N × 2 ft (approx 0.3048 m), commonly 1 short ton-force ≈ 4448.22 N, but here meters so just force * m, ton short = 2000 lb
  
  "Ton-force (long) meter (tonf·m)": 9964.02,       // 1 long ton-force = 9964.02 N
  
  "Ton-force (metric) meter (tonf·m)": 9806.65,     // 1 metric ton-force = 9.80665 kN
  
  "Kilogram-force meter (kgf·m)": 9.80665,          // 1 kgf = 9.80665 N
  
  "Gram-force centimeter (gf·cm)": 9.80665e-5,      // 1 g force = 9.80665e-3 N, 1 cm = 0.01 m → 9.80665e-3 * 0.01 = 9.80665e-5
  
  "Pound-force foot (lbf·ft)": 1.35582,             // 1 lbf·ft = 1.35582 N·m
  
  "Poundal foot (pdl·ft)": 0.0421401,               // 1 poundal = 0.138255 N, foot = 0.3048 m, so 0.138255 * 0.3048 = 0.0421401 N·m
  
  "Poundal inch (pdl·in)": 0.00351168,              // 0.0421401 / 12 (inch to feet)
};


const MomentOfForceConverterPage: React.FC = () => {
  const convertMomentOfForce = (value: number, from: string, to: string): number => {
    const fromFactor = momentOfForceUnits[from];
    const toFactor = momentOfForceUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Moment of Force Converter"
      units={Object.keys(momentOfForceUnits)}
      convert={convertMomentOfForce}
    />
  );
};

export default MomentOfForceConverterPage;

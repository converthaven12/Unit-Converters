'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const forceUnits: Record<string, number> = {
  Newton: 1,
  Kilonewton: 1e3,
  Meganewton: 1e6,
  Giganewton: 1e9,
  Teranewton: 1e12,
  Petanewton: 1e15,
  Exanewton: 1e18,
  
  Hectonewton: 100,
  Dekanewton: 10,
  Decinewton: 0.1,
  Centinewton: 0.01,
  Millinewton: 0.001,
  Micronewton: 1e-6,
  Nanonewton: 1e-9,
  Piconewton: 1e-12,
  Femtonewton: 1e-15,
  Attonewton: 1e-18,
  
  Dyne: 1e-5, // 1 dyne = 1e-5 N
  
  "Gram-force": 0.00980665,   // 1 gf = 9.80665 mN = 0.00980665 N
  "Kilogram-force": 9.80665,  // 1 kgf = 9.80665 N
  "Ton-force (metric)": 9806.65, // 1 metric ton-force = 1000 kgf = 9806.65 N
  
  "Ton-force (short)": 8896.44, // 1 short ton-force ≈ 8896.44 N
  "Ton-force (long)": 9964.02,  // 1 long ton-force ≈ 9964.02 N (UK ton)
  
  Kipforce: 4448.22,          // 1 kip-force = 1000 lbf = 4448.22 N
  "Kilopound-force": 4448.22, // same as kip
  
  "Pound-force": 4.44822,     // 1 lbf = 4.44822 N
  "Ounce-force": 0.2780139,   // 1 ozf = 0.2780139 N
  Poundal: 0.138255,          // 1 poundal = 0.138255 N
  
  "Pound foot/square second": 0.138255, // same as poundal, sometimes used interchangeably
  
  Pond: 9.80665,              // pond = kilogram-force = 9.80665 N
  Kilopond: 9806.65,          // kilopond = kilogram-force = 9.80665 N * 1000
};


const ForceConverterPage: React.FC = () => {
  const convertForce = (value: number, from: string, to: string): number => {
    const fromFactor = forceUnits[from];
    const toFactor = forceUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Force Converter"
      units={Object.keys(forceUnits)}
      convert={convertForce}
    />
  );
};

export default ForceConverterPage;

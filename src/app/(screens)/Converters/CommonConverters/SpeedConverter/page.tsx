'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const speedUnits: Record<string, number> = {
  "Meters per second": 1,
  "Kilometers per hour": 0.277778,
  "Miles per hour": 0.44704,
  "Feet per second": 0.3048,
  "Knots": 0.514444,
  "Mach (sea level)": 340.29,
  "Speed of light": 299792458,
  "Centimeters per second": 0.01,
  "Millimeters per second": 0.001,

  // Additional units
  "Meter per hour": 1 / 3600,            // 1 m/h = 1/3600 m/s
  "Meter per minute": 1 / 60,            // 1 m/min = 1/60 m/s
  "Kilometer per minute": 1000 / 60,    // 1000 m / 60 s
  "Kilometer per second": 1000,          // 1000 m/s

  "Centimeter per hour": 0.01 / 3600,
  "Centimeter per minute": 0.01 / 60,
  "Millimeter per hour": 0.001 / 3600,
  "Millimeter per minute": 0.001 / 60,

  "Foot per hour": 0.3048 / 3600,
  "Foot per minute": 0.3048 / 60,
  "Yard per hour": 0.9144 / 3600,
  "Yard per minute": 0.9144 / 60,
  "Yard per second": 0.9144,

  "Mile per minute": 1609.344 / 60,
  "Mile per second": 1609.344,

  "Knot (UK)": 0.514777,                  // slightly different from standard knot

  // Special velocities
  "Velocity of light in vacuum": 299792458,
  "Cosmic velocity - first": 7.91e3,      // low Earth orbit, ~7.9 km/s
  "Cosmic velocity - second": 1.58e4,     // escape velocity, ~15.8 km/s
  "Cosmic velocity - third": 4.2e4,       // solar system escape velocity, ~42 km/s
  "Earth's velocity": 2.978e4,             // Earth's orbital velocity around sun ~29.78 km/s
  "Velocity of sound in pure water": 1481, // m/s at 20°C
  "Velocity of sound in sea water (20°C, 10 m deep)": 1507,
  "Mach (20°C, 1 atm)": 343,
  "Mach (SI standard)": 340.29,
};

const SpeedConverterPage: React.FC = () => {
  const convertSpeed = (value: number, from: string, to: string): number => {
    const fromFactor = speedUnits[from];
    const toFactor = speedUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Speed Converter"
      units={Object.keys(speedUnits)}
      convert={convertSpeed}
    />
  );
};

export default SpeedConverterPage;

'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const powerUnits: Record<string, number> = {
  watt: 1,
  exawatt: 1e18,
  petawatt: 1e15,
  terawatt: 1e12,
  gigawatt: 1e9,
  megawatt: 1e6,
  kilowatt: 1e3,
  hectowatt: 100,
  dekawatt: 10,
  deciwatt: 0.1,
  centiwatt: 0.01,
  milliwatt: 0.001,
  microwatt: 1e-6,
  nanowatt: 1e-9,
  picowatt: 1e-12,
  femtowatt: 1e-15,
  attowatt: 1e-18,

  horsepower: 745.7,                   // Imperial/US
  "horsepower (550 ftlbf/s)": 745.7,  // same as above (mechanical hp)
  "horsepower (metric)": 735.5,
  "horsepower (boiler)": 9809.5,
  "horsepower (electric)": 746,
  "horsepower (water)": 745.7,
  pferdestarke: 735.5,                 // German PS, metric hp

  "Btu (IT)/hour": 0.29307107,
  "Btu (IT)/minute": 17.584264,
  "Btu (IT)/second": 1055.05585,
  "Btu (th)/hour": 0.29307107,
  "Btu (th)/minute": 17.584264,
  "Btu (th)/second": 1055.05585,
  "MBtu (IT)/hour": 293.07107,
  MBH: 293.07107, // same as MBtu/hr

  "ton (refrigeration)": 3516.85, // refrigeration ton in watts

  "kilocalorie (IT)/hour": 1.163,
  "kilocalorie (IT)/minute": 69.78,
  "kilocalorie (IT)/second": 4184,
  "kilocalorie (th)/hour": 1.163,
  "kilocalorie (th)/minute": 69.78,
  "kilocalorie (th)/second": 4184,

  "calorie (IT)/hour": 0.001163,
  "calorie (IT)/minute": 0.06978,
  "calorie (IT)/second": 4.184,
  "calorie (th)/hour": 0.001163,
  "calorie (th)/minute": 0.06978,
  "calorie (th)/second": 4.184,

  "foot pound-force/hour": 0.000376616,
  "foot pound-force/minute": 0.022596,
  "foot pound-force/second": 1.355818,

  "pound-foot/hour": 0.000376616,
  "pound-foot/minute": 0.022596,
  "pound-foot/second": 1.355818,

  "erg/second": 1e-7,

  "kilovolt ampere": 1000,
  "volt ampere": 1,

  "newton meter/second": 1,
  "joule/second": 1,
  "exajoule/second": 1e18,
  "petajoule/second": 1e15,
  "terajoule/second": 1e12,
  "gigajoule/second": 1e9,
  "megajoule/second": 1e6,
  "kilojoule/second": 1e3,
  "hectojoule/second": 100,
  "dekajoule/second": 10,
  "decijoule/second": 0.1,
  "centijoule/second": 0.01,
  "millijoule/second": 0.001,
  "microjoule/second": 1e-6,
  "nanojoule/second": 1e-9,
  "picojoule/second": 1e-12,
  "femtojoule/second": 1e-15,
  "attojoule/second": 1e-18,

  "joule/hour": 0.000277778,
  "joule/minute": 0.0166667,
  "kilojoule/hour": 0.277778,
  "kilojoule/minute": 16.6667,
};


const PowerConverterPage: React.FC = () => {
  const convertPower = (value: number, from: string, to: string): number => {
    const fromFactor = powerUnits[from];
    const toFactor = powerUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Power Converter"
      units={Object.keys(powerUnits)}
      convert={convertPower}
    />
  );
};

export default PowerConverterPage;

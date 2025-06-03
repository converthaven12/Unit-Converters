"use client";

import React from "react";
import ReusableNumbersConverter from "../../../../utils/components/ReusableCoverterNumber/ReusableConverterNumber";

const numeralSystems = [
  { label: "Binary", base: 2 },
  { label: "Ternary", base: 3 },
  { label: "Quaternary", base: 4 },
  { label: "Quinary", base: 5 },
  { label: "Senary", base: 6 },
  { label: "Septenary", base: 7 },
  { label: "Octal", base: 8 },
  { label: "Nonary", base: 9 },
  { label: "Decimal", base: 10 },
  { label: "Undecimal", base: 11 },
  { label: "Duodecimal", base: 12 },
  { label: "Tridecimal", base: 13 },
  { label: "Tetradecimal", base: 14 },
  { label: "Pentadecimal", base: 15 },
  { label: "Hexadecimal", base: 16 },
  { label: "Base-17", base: 17 },
  { label: "Base-18", base: 18 },
  { label: "Base-19", base: 19 },
  { label: "Base-20", base: 20 },
  { label: "Base-21", base: 21 },
  { label: "Base-22", base: 22 },
  { label: "Base-23", base: 23 },
  { label: "Base-24", base: 24 },
  { label: "Base-25", base: 25 },
  { label: "Base-26", base: 26 },
  { label: "Base-27", base: 27 },
  { label: "Base-28", base: 28 },
  { label: "Base-29", base: 29 },
  { label: "Base-30", base: 30 },
  { label: "Base-31", base: 31 },
  { label: "Base-32", base: 32 },
  { label: "Base-33", base: 33 },
  { label: "Base-34", base: 34 },
  { label: "Base-35", base: 35 },
  { label: "Base-36", base: 36 },
];

const parseInput = (value: string, base: number): number | null => {
  const clean = value.trim().toUpperCase();
  if (!clean) return null;
  const validChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, base);
  for (const ch of clean) {
    if (!validChars.includes(ch)) return null;
  }
  const parsed = parseInt(clean, base);
  return isNaN(parsed) ? null : parsed;
};

const formatOutput = (value: number, base: number): string => {
  return value.toString(base).toUpperCase();
};

const NumbersConverterPage = () => {
  return (
    <ReusableNumbersConverter
      heading="Numbers Converter"
      systems={numeralSystems}
      parseInput={parseInput}
      formatOutput={formatOutput}
    />
  );
};

export default NumbersConverterPage;

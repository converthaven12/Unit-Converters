'use client';

import React, { useState } from "react";

// Support bases 2 through 36 with friendly labels for common ones:
const numeralSystems: { label: string; base: number }[] = [
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
  // Remove whitespace and toUpperCase for uniformity
  const sanitized = value.trim().toUpperCase();
  if (sanitized === "") return null;
  
  // Validate input: check if all chars are valid for the base
  const validChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, base);
  for (const ch of sanitized) {
    if (!validChars.includes(ch)) return null;
  }

  const parsed = parseInt(sanitized, base);
  return isNaN(parsed) ? null : parsed;
};

const formatOutput = (value: number, base: number): string => {
  return value.toString(base).toUpperCase();
};

const NumbersConverterPage: React.FC = () => {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(2);

  const parsedNumber = parseInput(input, fromBase);
  const output = parsedNumber !== null ? formatOutput(parsedNumber, toBase) : "";

  return (
    <div className="p-4 font-sans max-w-md ">
      <h1 className="font-bold text-3xl text-[#006633] mb-4 text-center">Numbers Converter</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded mb-4 text-sm"
        placeholder={`Enter number in base ${fromBase}`}
        spellCheck={false}
        autoComplete="off"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm">From:</label>
          <select
            value={fromBase}
            onChange={(e) => setFromBase(Number(e.target.value))}
            className="w-full p-2 border rounded text-sm"
          >
            {numeralSystems.map(({ label, base }) => (
              <option key={base} value={base}>
                {label} (base {base})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm">To:</label>
          <select
            value={toBase}
            onChange={(e) => setToBase(Number(e.target.value))}
            className="w-full p-2 border rounded text-sm"
          >
            {numeralSystems.map(({ label, base }) => (
              <option key={base} value={base}>
                {label} (base {base})
              </option>
            ))}
          </select>
        </div>
      </div>

      <textarea
        readOnly
        rows={4}
        className="w-full p-2 border rounded bg-gray-100 text-sm"
        value={output}
        placeholder="Converted number"
      />

      {input && !output && (
        <p className="text-red-600 font-medium text-sm mt-2">Invalid input for base {fromBase}</p>
      )}

      {input && output && (
        <p className="text-blue-600 font-medium text-sm mt-2">
          Result: {input.toUpperCase()} (base {fromBase}) = {output} (base {toBase})
        </p>
      )}
    </div>
  );
};

export default NumbersConverterPage;

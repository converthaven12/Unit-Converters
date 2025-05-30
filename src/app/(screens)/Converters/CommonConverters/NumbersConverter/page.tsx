'use client';

import React, { useState } from "react";

const numeralSystems = ["Binary", "Octal", "Decimal", "Hexadecimal"];

const parseInput = (value: string, base: number): number | null => {
  const parsed = parseInt(value, base);
  return isNaN(parsed) ? null : parsed;
};

const formatOutput = (value: number, base: number): string => {
  return value.toString(base);
};

const NumbersConverterPage: React.FC = () => {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState("Decimal");
  const [toBase, setToBase] = useState("Binary");

  const baseMap: Record<string, number> = {
    Binary: 2,
    Octal: 8,
    Decimal: 10,
    Hexadecimal: 16,
  };

  const fromBaseNum = baseMap[fromBase];
  const toBaseNum = baseMap[toBase];
  const parsedNumber = parseInput(input, fromBaseNum);
  const output = parsedNumber !== null ? formatOutput(parsedNumber, toBaseNum) : "";

  return (
    <div className="p-4 font-sans max-w-md mx-auto">
      <h1 className="font-bold text-3xl text-[#006633] mb-4 text-center">Numbers Converter</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value.trim())}
        className="w-full p-2 border rounded mb-4 text-sm"
        placeholder={`Enter number in ${fromBase}`}
      />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm">From:</label>
          <select
            value={fromBase}
            onChange={(e) => setFromBase(e.target.value)}
            className="w-full p-2 border rounded text-sm"
          >
            {numeralSystems.map((sys) => (
              <option key={sys} value={sys}>{sys}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 text-sm">To:</label>
          <select
            value={toBase}
            onChange={(e) => setToBase(e.target.value)}
            className="w-full p-2 border rounded text-sm"
          >
            {numeralSystems.map((sys) => (
              <option key={sys} value={sys}>{sys}</option>
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
      {input && output && (
        <p className="text-blue-600 font-medium text-sm">
          Result: {input} ({fromBase}) = {output} ({toBase})
        </p>
      )}
    </div>
  );
};

export default NumbersConverterPage;

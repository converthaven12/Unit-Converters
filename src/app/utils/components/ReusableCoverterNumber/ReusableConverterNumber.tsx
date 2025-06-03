'use client';

import React, { useState } from 'react';
import CategoryLinksList from '../CategoryList/CategoryLinksList';

interface NumbersConverterProps {
  heading: string;
  systems: { label: string; base: number }[];
  parseInput: (value: string, base: number) => number | null;
  formatOutput: (value: number, base: number) => string;
}

const ReusableNumbersConverter: React.FC<NumbersConverterProps> = ({
  heading,
  systems,
  parseInput,
  formatOutput,
}) => {
  const [input, setInput] = useState('');
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(2);

  const parsedNumber = parseInput(input, fromBase);
  const output = parsedNumber !== null ? formatOutput(parsedNumber, toBase) : '';

  return (
    <>
      <div className="p-6 font-sans w-full bg-white rounded-lg shadow-sm">
        <h1 className="font-bold text-3xl sm:text-4xl text-[#006633] mb-6 text-center">
          {heading}
        </h1>

        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-[#006633]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">From:</label>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full p-3 border border-[#138a55] rounded-lg outline-none transition text-sm"
                placeholder={`Enter number in base ${fromBase}`}
                spellCheck={false}
                autoComplete="off"
              />
              <select
                value={fromBase}
                onChange={(e) => setFromBase(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none bg-white text-sm"
              >
                {systems.map(({ label, base }) => (
                  <option key={base} value={base}>
                    {label} (base {base})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">To:</label>
              <input
                type="text"
                readOnly
                value={input && output ? output : ''}
                className="w-full p-3 border border-[#138a55] rounded-lg outline-none bg-gray-50 text-sm"
              />
              <select
                value={toBase}
                onChange={(e) => setToBase(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none bg-white text-sm"
              >
                {systems.map(({ label, base }) => (
                  <option key={base} value={base}>
                    {label} (base {base})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {input && !output && (
            <p className="text-red-600 font-medium text-sm text-center">
              Invalid input for base {fromBase}
            </p>
          )}

          {input && output && (
            <div className="mt-4 p-3 bg-[#006633]/5 rounded-lg border border-[#006633]/10">
              <p className="text-[#006633] font-medium text-center">
                {input.toUpperCase()} (base {fromBase}) ={' '}
                <span className="font-bold">{output}</span> (base {toBase})
              </p>
            </div>
          )}
        </div>
      </div>

      <CategoryLinksList />
    </>
  );
};

export default ReusableNumbersConverter;

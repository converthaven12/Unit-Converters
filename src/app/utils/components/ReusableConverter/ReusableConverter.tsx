'use client';

import React, { useState } from 'react';

interface UnitConverterProps {
  heading: string;
  units: string[];
  convert: (value: number, from: string, to: string) => number;
}

const ReusableConverter: React.FC<UnitConverterProps> = ({ heading, units, convert }) => {
  const [fromValue, setFromValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>(units[0]);
  const [toUnit, setToUnit] = useState<string>(units[1] || units[0]);

  const numericValue = parseFloat(fromValue) || 0;
  const result = convert(numericValue, fromUnit, toUnit);

  return (
    <div className="p-4 font-sans w-full max-w-md sm:max-w-xl lg:max-w-[40%] ">
      <h1 className="font-bold text-3xl sm:text-4xl text-[#006633] mb-4 text-center sm:text-left">
        {heading}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm">From:</label>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            className="w-full p-2 border rounded no-spinners text-sm"
            placeholder="Enter value"
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full p-2 mt-2 border rounded text-sm"
          >
            {units.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm">To:</label>
          <input
            type="text"
            readOnly
            value={fromValue ? result.toFixed(6) : ''}
            className="w-full p-2 border rounded bg-gray-100 text-sm"
          />
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full p-2 mt-2 border rounded text-sm"
          >
            {units.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>

      {fromValue && (
        <p className="text-blue-600 font-medium text-sm sm:text-base">
          Result: {numericValue} {fromUnit} = {result.toFixed(6)} {toUnit}
        </p>
      )}

      <style jsx>{`
        input.no-spinners::-webkit-inner-spin-button,
        input.no-spinners::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input.no-spinners[type='number'] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export default ReusableConverter;

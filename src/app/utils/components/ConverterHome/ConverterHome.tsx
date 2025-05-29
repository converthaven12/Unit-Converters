'use client';

import React, { useState } from 'react';
import unitMaps from '../../../../../Helper/Units';
import LinkDisplay from '../LinkDisplay/LinkDisplay';


// Special category for temperature
const temperatureUnits = ['Celsius', 'Fahrenheit', 'Kelvin'];

const ConverterHome: React.FC = () => {
  const [category, setCategory] = useState<string>('Length');
  const [fromValue, setFromValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('Meter');
  const [toUnit, setToUnit] = useState<string>('Kilometer');

  const categories = Object.keys(unitMaps).concat('Temperature');

  const getUnits = () => {
    return category === 'Temperature' ? temperatureUnits : Object.keys(unitMaps[category]);
  };

  const convert = (value: number, from: string, to: string): number => {
    if (category === 'Temperature') {
      if (from === to) return value;

      let celsius: number;
      if (from === 'Celsius') celsius = value;
      else if (from === 'Fahrenheit') celsius = (value - 32) * (5 / 9);
      else if (from === 'Kelvin') celsius = value - 273.15;
      else return value;

      if (to === 'Celsius') return celsius;
      else if (to === 'Fahrenheit') return celsius * 9 / 5 + 32;
      else if (to === 'Kelvin') return celsius + 273.15;
      else return value;
    }

    const currentMap = unitMaps[category] as Record<string, number>;
    const baseValue = value * currentMap[from];
    return baseValue / currentMap[to];
  };

  const units = getUnits();
  const numericValue = parseFloat(fromValue) || 0;
  const result = convert(numericValue, fromUnit, toUnit);

  return (
    <div className="p-4 font-sans max-w-[40%] mx-auto">
      <h2 className="text-xl font-bold mb-4">Universal Unit Converter</h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-3 py-1 rounded border ${
              category === cat ? 'bg-blue-600 text-white' : 'bg-white'
            }`}
            onClick={() => {
              setCategory(cat);
              const units = cat === 'Temperature' ? temperatureUnits : Object.keys(unitMaps[cat]);
              setFromUnit(units[0]);
              setToUnit(units[1] || units[0]);
              setFromValue('');
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">From:</label>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            className="w-full p-2 border rounded no-spinners"
            placeholder="Enter value"
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full p-2 mt-2 border rounded"
          >
            {units.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">To:</label>
          <input
            type="text"
            readOnly
            value={fromValue ? result.toFixed(6) : ''}
            className="w-full p-2 border rounded bg-gray-100"
          />
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full p-2 mt-2 border rounded"
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
        <p className="text-blue-600 font-medium">
          Result: {numericValue} {fromUnit} = {result.toFixed(6)} {toUnit}
        </p>
      )}

      {/* Hide spinners in number inputs */}
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
      <LinkDisplay/>
    </div>
  );
};

export default ConverterHome;

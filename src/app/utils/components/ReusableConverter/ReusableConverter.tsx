"use client";

import React, { useState } from "react";

export type ReusableConverterProps = {
  heading: string;
  units: string[];
  convert: (value: number, from: string, to: string) => number;
};

const ReusableConverter: React.FC<ReusableConverterProps> = ({
  heading,
  units,
  convert,
}) => {
  const [fromValue, setFromValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>(units[0]);
  const [toUnit, setToUnit] = useState<string>(units[1] || units[0]);

  const numericValue = parseFloat(fromValue) || 0;
  const result = convert(numericValue, fromUnit, toUnit);

  return (
    <div className="p-6 bg-white rounded-lg shadow mb-6">
      <h2 className="text-2xl font-semibold text-[#006633] mb-4">{heading}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">From</label>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full p-2 border rounded mt-2"
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">To</label>
          <input
            type="text"
            readOnly
            value={fromValue ? result.toFixed(6) : ""}
            className="w-full p-2 border rounded bg-gray-50"
          />
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full p-2 border rounded mt-2"
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </div>

      {fromValue && (
        <p className="text-center font-medium">
          {numericValue} {fromUnit} ={" "}
          <span className="font-bold">{result.toFixed(6)}</span> {toUnit}
        </p>
      )}
    </div>
  );
};

export default ReusableConverter;

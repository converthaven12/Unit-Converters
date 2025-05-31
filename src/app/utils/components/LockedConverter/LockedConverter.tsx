"use client";

import React, { useState } from "react";
import CategoryLinksList from "../CategoryList/CategoryLinksList";

interface LockedUnitConverterProps {
  heading: string;
  lockedFromUnit: string;
  units: string[]; // List of TO units
  convert: (value: number, from: string, to: string) => number;
}

const LockedUnitConverter: React.FC<LockedUnitConverterProps> = ({
  heading,
  lockedFromUnit,
  units,
  convert,
}) => {
  const [fromValue, setFromValue] = useState<string>("");
  const [toUnit, setToUnit] = useState<string>(units[0]);

  const numericValue = parseFloat(fromValue) || 0;
  const result = convert(numericValue, lockedFromUnit, toUnit);

  return (
    <div className="p-4 font-sans w-full max-w-md sm:max-w-xl lg:max-w-full">
      <h1 className="font-bold text-3xl sm:text-4xl text-[#006633] mb-4 text-center sm:text-left">
        {heading}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* From Section (Locked) */}
        <div>
          <label className="block mb-1 text-sm">From:</label>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            className="w-full p-2 border rounded no-spinners text-sm"
            placeholder="Enter value"
          />
          <input
            type="text"
            readOnly
            value={lockedFromUnit}
            className="w-full p-2 mt-2 border rounded bg-gray-100 text-sm"
          />
        </div>

        {/* To Section */}
        <div>
          <label className="block mb-1 text-sm">To:</label>
          <input
            type="text"
            readOnly
            value={fromValue ? result.toFixed(6) : ""}
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
          Result: {numericValue} {lockedFromUnit} = {result.toFixed(6)} {toUnit}
        </p>
      )}

      {/* Disable number input arrows */}
      <style jsx>{`
        input.no-spinners::-webkit-inner-spin-button,
        input.no-spinners::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input.no-spinners[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>

      {/* Related Links */}
      <CategoryLinksList />
    </div>
  );
};

export default LockedUnitConverter;

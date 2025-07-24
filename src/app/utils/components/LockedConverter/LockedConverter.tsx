"use client";

import React, { useState } from "react";
import CategoryLinkBtn from "@/components/LinkToOthers/CategoryLinkBtn";

interface LockedUnitConverterProps {
  heading: string;
  lockedFromUnit: string;
  units: string[];
  convert: (value: number, fromUnit: string, toUnit: string) => number;
}

const LockedUnitConverter: React.FC<LockedUnitConverterProps> = ({
  heading,
  lockedFromUnit,
  units,
  convert,
}) => {
  const [fromValue, setFromValue] = useState<string>("");
  const [toUnit, setToUnit] = useState<string>(units[0] || "");
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const numericValue = parseFloat(fromValue) || 0;
    const result = convert(numericValue, lockedFromUnit, toUnit);
    setResult(result);
  };

  return (
    <div className="converter">
      <h1 className="text-2xl font-bold mb-4">{heading}</h1>
      <div className="flex gap-4 mb-4">
        <input
          type="number"
          className="border p-2 rounded w-full"
          placeholder={`Enter value in ${lockedFromUnit}`}
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <button
          onClick={handleConvert}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Convert
        </button>
      </div>

      {result !== null && (
        <div className="text-lg font-medium">
          Result: {result} {toUnit}
        </div>
      )}

      <div className="mt-8">
        <CategoryLinkBtn />
      </div>
    </div>
  );
};

export default LockedUnitConverter;


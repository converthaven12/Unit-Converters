"use client";

import React, { useState } from "react";
import OutputBox from "../OutputBox/OutputBox";

type LockedUnitConverterProps = {
  heading?: string;
  lockedFromUnit: string;
  units: string[];
  convert: (value: number, from: string, to: string) => number;
};

const LockedUnitConverter: React.FC<LockedUnitConverterProps> = ({
  heading,
  lockedFromUnit,
  units,
  convert,
}) => {
  const [inputValue, setInputValue] = useState<number>(1);

  if (!lockedFromUnit || !units || units.length === 0 || !convert) {
    return (
      <div className="text-red-500 text-center mt-8">
        ⚠️ Error: Conversion data missing or invalid.
      </div>
    );
  }

  return (
    <div className="converter-wrapper">
      {heading && (
        <h1 className="text-2xl font-bold mb-4 text-center">{heading}</h1>
      )}

      <div className="flex justify-center mb-6">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          className="border p-2 rounded w-48"
          min="0"
        />
        <span className="ml-2 self-center font-semibold">{lockedFromUnit}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {units.map((unit) => (
          <OutputBox
            key={unit}
            value={convert(inputValue, lockedFromUnit, unit).toString()}
            unit={unit}
          />
        ))}
      </div>
    </div>
  );
};

export default LockedUnitConverter;

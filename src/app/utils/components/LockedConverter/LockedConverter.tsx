"use client";

import React from "react";

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
  return (
    <div className="converter-wrapper">
      {heading && (
        <h1 className="text-2xl font-bold mb-4 text-center">{heading}</h1>
      )}

      {/* Add your actual converter UI here (example below is placeholder) */}
      <div className="text-gray-700">
        <p>From unit: <strong>{lockedFromUnit}</strong></p>
        <p>Available conversions:</p>
        <ul className="list-disc ml-6">
          {units.map((unit) => (
            <li key={unit}>{unit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LockedUnitConverter;


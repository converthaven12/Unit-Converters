"use client";

import React, { useState } from "react";
import CategoryLinkBtn from "@/app/components/LinkToOthers/CategoryLinkBtn";

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
  const [fromValue, setFromValue] = useState("");
  const [toUnit, setToUnit] = useState(units[1] || "");
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const numericValue = parseFloat(fromValue) || 0;
    const result = convert(numericValue, lockedFromUnit, toUnit);
    setResult(result);
  };

  return (
    <div className="converter-container">
      <h2>{heading}</h2>
      <div className="input-section">
        <input
          type="number"
          placeholder={`Enter value in ${lockedFromUnit}`}
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
        />
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {units.map((unit) =>
            unit !== lockedFromUnit ? (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ) : null
          )}
        </select>
        <button onClick={handleConvert}>Convert</button>
      </div>
      {result !== null && (
        <p>
          {fromValue} {lockedFromUnit} = {result} {toUnit}
        </p>
      )}
      <CategoryLinkBtn />
    </div>
  );
};

export default LockedUnitConverter;



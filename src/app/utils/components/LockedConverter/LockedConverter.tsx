"use client";

import React, { useState } from "react";
import CategoryLinkBtn from "../LinkToOthers/CategoryLinkBtn"; // ✅ UPDATED PATH

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
    const value = parseFloat(fromValue);
    if (!isNaN(value)) {
      const conversionResult = convert(value, lockedFromUnit, toUnit);
      setResult(conversionResult);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="converter-container">
      <h2>{heading}</h2>
      <div className="input-group">
        <input
          type="number"
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
          placeholder={`Enter ${lockedFromUnit} value`}
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
      <CategoryLinkBtn unitCategory={heading} />
    </div>
  );
};

export default LockedUnitConverter;




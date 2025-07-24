"use client";

import React, { useState } from "react";
import CategoryLinkBtn from "../../LinkToOthers/CategoryLinkBtn";

interface LockedUnitConverterProps {
  heading: string;
  lockedFromUnit: string;
  units: string[];
  convert: (value: number, fromUnit: string, toUnit: string) => number;
}

const LockedConverter: React.FC<LockedUnitConverterProps> = ({
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
      const converted = convert(value, lockedFromUnit, toUnit);
      setResult(converted);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="converter-container">
      <h2>{heading}</h2>

      <div className="converter-inputs">
        <div>
          <label>From ({lockedFromUnit}):</label>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
          />
        </div>

        <div>
          <label>To:</label>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            {units
              .filter((unit) => unit !== lockedFromUnit)
              .map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
          </select>
        </div>
      </div>

      <button onClick={handleConvert}>Convert</button>

      {result !== null && (
        <div className="converter-result">
          <p>
            {fromValue} {lockedFromUnit} = {result} {toUnit}
          </p>
        </div>
      )}

      <CategoryLinkBtn />
    </div>
  );
};

export default LockedConverter;


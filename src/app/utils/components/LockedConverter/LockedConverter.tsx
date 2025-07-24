"use client";

import React, { useState } from "react";
import CategoryLinkBtn from "../LinkToOthers/CategoryLinkBtn";

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
    const parsedValue = parseFloat(fromValue);
    if (!isNaN(parsedValue)) {
      const conversionResult = convert(parsedValue, lockedFromUnit, toUnit);
      setResult(conversionResult);
    }
  };

  return (
    <div className="locked-converter">
      <h2>{heading}</h2>

      <div>
        <input
          type="number"
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
          placeholder={`Enter value in ${lockedFromUnit}`}
        />
        <span>{lockedFromUnit}</span>
      </div>

      <div>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {units.map((unit, index) => (
            <option key={index} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleConvert}>Convert</button>

      {result !== null && (
        <p>
          Result: {fromValue} {lockedFromUnit} = {result} {toUnit}
        </p>
      )}

      <CategoryLinkBtn />
    </div>
  );
};

export default LockedUnitConverter;



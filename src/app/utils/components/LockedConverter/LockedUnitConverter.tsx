"use client";

import React from "react";
import HeadingTag from "../HeadingTag/HeadingTag";
import InputTag from "../InputTag/InputTag";
import OutputBox from "../OutputBox/OutputBox"; // ✅ Ensure correct import path
import GreenBtn from "../GreenBtn/GreenBtn";

type LockedUnitConverterProps = {
  heading: string;
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
  const [inputValue, setInputValue] = React.useState<number>(0);
  const [toUnit, setToUnit] = React.useState<string>(units[1] || "");
  const [outputValue, setOutputValue] = React.useState<number>(() =>
    convert(0, lockedFromUnit, units[1] || "")
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setInputValue(isNaN(newValue) ? 0 : newValue);
  };

  const handleConvert = () => {
    const result = convert(inputValue, lockedFromUnit, toUnit);
    setOutputValue(result);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <HeadingTag heading={heading} />
      <div className="my-4">
        <InputTag
          label={`From (${lockedFromUnit})`}
          value={inputValue.toString()}
          onChange={handleInputChange}
        />
      </div>
      <div className="my-4">
        <select
          className="w-full p-2 border rounded"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          {units.map((unit) =>
            unit !== lockedFromUnit ? (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ) : null
          )}
        </select>
      </div>
      <div className="my-4">
        <GreenBtn onClick={handleConvert} label="Convert" />
      </div>
      <div className="my-4">
        <OutputBox value={outputValue.toString()} unit={toUnit} />
      </div>
    </div>
  );
};

export default LockedUnitConverter;


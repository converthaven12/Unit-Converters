"use client";

import React, { useState } from "react";
import conversionFactors from "../../../../helper/conversionFactors";
import LinkDisplay from "../LinkDisplay/LinkDisplay";

const temperatureUnits = ["Celsius", "Fahrenheit", "Kelvin"];

const ConverterHome: React.FC = () => {
  const [category, setCategory] = useState<string>("Length");
  const [fromValue, setFromValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>("Meter");
  const [toUnit, setToUnit] = useState<string>("Kilometer");

  // categories come from flat conversionFactors keys
  const numericUnits = Object.keys(conversionFactors);
  const categories = ["TemperatureUnits", ...numericUnits];

  const getUnits = (): string[] => {
    return category === "TemperatureUnits"
      ? temperatureUnits
      : numericUnits;
  };

  const convert = (value: number, from: string, to: string): number => {
    if (category === "TemperatureUnits") {
      if (from === to) return value;
      let c: number;
      if (from === "Celsius") c = value;
      else if (from === "Fahrenheit") c = (value - 32) * 5 / 9;
      else c = value - 273.15;
      if (to === "Celsius") return c;
      if (to === "Fahrenheit") return (c * 9) / 5 + 32;
      return c + 273.15;
    }

    const factorFrom = conversionFactors[from] ?? 1;
    const factorTo = conversionFactors[to] ?? 1;
    const base = value * factorFrom;
    return base / factorTo;
  };

  const units = getUnits();
  const numericValue = parseFloat(fromValue) || 0;
  const result = convert(numericValue, fromUnit, toUnit);

  return (
    <>
      <div className="p-6 font-sans w-full bg-white rounded-lg shadow-sm">
        <h1 className="font-bold text-3xl sm:text-4xl text-[#006633] mb-6 text-center">
          Universal Unit Converter
        </h1>
        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-[#006633]/10">
          <div className="flex flex-wrap gap-2 sm:gap-3 px-2 overflow-x-auto mb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm transition-all whitespace-nowrap ${
                  category === cat
                    ? "bg-[#006633] text-white font-medium shadow-md"
                    : "bg-white text-gray-700 border border-[#006633]/20 hover:border-[#006633]/40"
                }`}
                onClick={() => {
                  setCategory(cat);
                  const newUnits =
                    cat === "TemperatureUnits" ? temperatureUnits : numericUnits;
                  setFromUnit(newUnits[0]);
                  setToUnit(newUnits[1] || newUnits[0]);
                  setFromValue("");
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                From:
              </label>
              <input
                type="number"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
                className="w-full p-3 border border-[#138a55] rounded-lg outline-none transition"
                placeholder="Enter value"
              />
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none bg-white transition mt-2"
              >
                {units.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                To:
              </label>
              <input
                type="text"
                readOnly
                value={fromValue ? result.toFixed(6) : ""}
                className="w-full p-3 border border-[#138a55] rounded-lg bg-gray-50"
              />
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none bg-white transition mt-2"
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
            <p className="text-center text-[#006633] font-medium">
              {numericValue} {fromUnit} ={" "}
              <span className="font-bold">{result.toFixed(6)}</span> {toUnit}
            </p>
          )}
        </div>
      </div>
      <LinkDisplay />
    </>
  );
};

export default ConverterHome;

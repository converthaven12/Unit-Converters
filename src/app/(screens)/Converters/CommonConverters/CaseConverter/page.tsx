'use client';

import React, { useState } from "react";

const cases = ["Uppercase", "Lowercase", "Title Case", "Sentence case"];

const applyCaseConversion = (text: string, caseType: string): string => {
  switch (caseType) {
    case "Uppercase":
      return text.toUpperCase();
    case "Lowercase":
      return text.toLowerCase();
    case "Title Case":
      return text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    case "Sentence case":
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    default:
      return text;
  }
};

const CaseConverterPage: React.FC = () => {
  const [input, setInput] = useState("");
  const [fromCase, setFromCase] = useState(cases[0]);
  const [toCase, setToCase] = useState(cases[1]);

  const converted = applyCaseConversion(input, toCase);

  return (
    <div className="p-4 font-sans max-w-md mx-auto">
      <h1 className="font-bold text-3xl text-[#006633] mb-4 text-center">Case Converter</h1>
      <textarea
        rows={4}
        className="w-full p-2 border rounded mb-4 text-sm"
        placeholder="Enter text here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm">From:</label>
          <select
            value={fromCase}
            onChange={(e) => setFromCase(e.target.value)}
            className="w-full p-2 border rounded text-sm"
          >
            {cases.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 text-sm">To:</label>
          <select
            value={toCase}
            onChange={(e) => setToCase(e.target.value)}
            className="w-full p-2 border rounded text-sm"
          >
            {cases.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>
      <textarea
        rows={4}
        readOnly
        className="w-full p-2 border rounded bg-gray-100 text-sm"
        value={converted}
      />
      {input && <p className="text-blue-600 font-medium text-sm">Result: {converted}</p>}
    </div>
  );
};

export default CaseConverterPage;

"use client";

import React from "react";

type OutputBoxProps = {
  value: string;
  unit?: string; // Allow unit as optional prop
};

const OutputBox: React.FC<OutputBoxProps> = ({ value, unit }) => {
  return (
    <div className="flex items-center justify-center border border-gray-300 rounded-md px-4 py-2 bg-white shadow-sm text-lg font-semibold text-gray-800">
      {value}
      {unit && <span className="ml-1">{unit}</span>}
    </div>
  );
};

export default OutputBox;

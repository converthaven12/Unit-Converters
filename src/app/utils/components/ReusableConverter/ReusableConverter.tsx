"use client";

import React from "react";
// Go up four levels from ReusableConverter → into src/helper
import { conversionFactors } from "../../../../helper/conversionFactors";

type ReusableConverterProps = {
  unitKey: string;
  value: number;
};

const ReusableConverter: React.FC<ReusableConverterProps> = ({
  unitKey,
  value,
}) => {
  const factor = conversionFactors[unitKey] ?? 1;
  const converted = value * factor;

  return (
    <div className="p-4 bg-gray-50 rounded-md mb-4">
      <p className="text-gray-700">
        {value} → {converted}
      </p>
    </div>
  );
};

export default ReusableConverter;

'use client';

import React from 'react';
import ConversionCard from '@/app/components/ConversionCard';
import { convert } from '@/app/utils/conversionHelpers';
import { UnitCategory } from '@/app/utils/types';

type Props = {
  category: UnitCategory;
  fromUnit: string;
  toUnit: string;
  inputValue: number;
};

const LockedConverter = ({ category, fromUnit, toUnit, inputValue }: Props) => {
  const result = convert(category, fromUnit, toUnit, inputValue);

  return (
    <div className="flex flex-col items-center justify-center">
      <ConversionCard
        category={category}
        fromUnit={fromUnit}
        toUnit={toUnit}
        inputValue={inputValue}
        result={result}
        isLocked={true}
      />
    </div>
  );
};

export default LockedConverter;



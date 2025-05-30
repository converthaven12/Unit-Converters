'use client';

import React from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const timeUnits: Record<string, number> = {
  Second: 1,
  Millisecond: 1e-3,
  Microsecond: 1e-6,
  Nanosecond: 1e-9,
  Minute: 60,
  Hour: 3600,
  Day: 86400,
  Week: 604800,
  Month: 2.63e6,      // Average month (30.44 days)
  Year: 3.154e7,      // Average year (365.25 days)
  Decade: 3.154e8,
  Century: 3.154e9,
  Millennium: 3.154e10,
};

const TimeConverterPage: React.FC = () => {
  const convertTime = (value: number, from: string, to: string): number => {
    const fromFactor = timeUnits[from];
    const toFactor = timeUnits[to];
    if (fromFactor === undefined || toFactor === undefined) return NaN;
    return (value * fromFactor) / toFactor;
  };

  return (
    <ReusableConverter
      heading="Time Converter"
      units={Object.keys(timeUnits)}
      convert={convertTime}
    />
  );
};

export default TimeConverterPage;

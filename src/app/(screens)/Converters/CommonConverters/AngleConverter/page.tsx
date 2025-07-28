"use client";

import React from "react";
import ReusableConverter, {
  ReusableConverterProps,
} from "@/app/utils/components/ReusableConverter/ReusableConverter";
import angleUnits from "../../../../../helper/Units"; // your helper file

// conversion logic for angles
const convertAngle = (value: number, from: string, to: string): number => {
  const map = angleUnits as Record<string, number>;
  const base = value * map[from];
  return base / map[to];
};

const AngleConverterPage: React.FC = () => {
  const units = Object.keys(angleUnits);

  const props: ReusableConverterProps = {
    heading: "Angle Converter",
    units,
    convert: convertAngle,
  };

  return <ReusableConverter {...props} />;
};

export default AngleConverterPage;

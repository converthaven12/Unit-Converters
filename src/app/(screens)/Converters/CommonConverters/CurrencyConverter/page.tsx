'use client';

import React, { useState, useEffect } from "react";
import ReusableConverter from "../../../../utils/components/ReusableConverter/ReusableConverter";

const currencyUnits = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "INR",
  "RUB",
  "BRL",
  "ZAR",
];

const staticRates: Record<string, number> = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.81,
  JPY: 132.5,
  AUD: 1.46,
  CAD: 1.35,
  CHF: 0.91,
  CNY: 7.0,
  INR: 82.0,
  RUB: 75.0,
  BRL: 5.0,
  ZAR: 18.0,
};

const CurrencyConverterPage: React.FC = () => {
  // Normally, you'd fetch live rates here.
  const convertCurrency = (value: number, from: string, to: string): number => {
    const fromRate = staticRates[from];
    const toRate = staticRates[to];
    if (fromRate === undefined || toRate === undefined) return NaN;
    return (value / fromRate) * toRate;
  };

  return (
    <ReusableConverter
      heading="Currency Converter"
      units={currencyUnits}
      convert={convertCurrency}
    />
  );
};

export default CurrencyConverterPage;

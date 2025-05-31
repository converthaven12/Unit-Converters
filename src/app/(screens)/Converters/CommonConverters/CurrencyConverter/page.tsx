'use client';

import React, { useEffect, useState } from 'react';

const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR'];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || !amount || !from || !to) return;
    setLoading(true);

    fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`)
      .then(res => res.json())
      .then(data => {
        setResult(data.result);
        setLoading(false);
      })
      .catch(() => {
        setResult(null);
        setLoading(false);
      });
  }, [amount, from, to, hasMounted]);

  if (!hasMounted) return null; // 👈 skip rendering until on client

  return (
    <div className="max-w-md mx-auto p-4 rounded-xl shadow-md bg-white space-y-4">
      <h2 className="text-xl font-bold">Currency Converter</h2>

      <div className="flex gap-2">
        <input
          type="number"
          className="w-1/2 border p-2 rounded"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <select
          className="w-1/2 border p-2 rounded"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          {currencies.map(code => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <span className="w-1/2 text-center">→</span>
        <select
          className="w-1/2 border p-2 rounded"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          {currencies.map(code => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>

      <div className="text-lg font-semibold mt-2">
        {loading ? 'Loading...' : result !== null ? `${amount} ${from} = ${result.toFixed(2)} ${to}` : 'Conversion failed.'}
      </div>
    </div>
  );
}

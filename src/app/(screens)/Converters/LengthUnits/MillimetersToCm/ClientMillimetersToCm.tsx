// src/app/(screens)/Converters/LengthUnits/MillimetersToCm/ClientMillimetersToCm.tsx
'use client';

import React, { useMemo, useState } from "react";

/** Base factors relative to millimeter (mm) */
const UNITS: Record<string, number> = {
  "millimeters [mm]": 1,
  "centimeters [cm]": 0.1, // 1 mm = 0.1 cm
  "meters [m]": 0.001
};

export default function ClientMillimetersToCm() {
  const unitList = useMemo(() => Object.keys(UNITS), []);
  const [from, setFrom] = useState(unitList[0]);      // mm
  const [to, setTo] = useState(unitList[1]);          // cm
  const [value, setValue] = useState<string>("10");

  const result = useMemo(() => {
    const v = Number(value);
    const ff = UNITS[from];
    const tf = UNITS[to];
    if (!isFinite(v) || ff == null || tf == null) return "";
    return ((v * ff) / tf).toString();
  }, [value, from, to]);

  return (
    <div className="grid gap-4 rounded-2xl border p-4 shadow-sm">
      <div className="grid gap-2">
        <label className="text-sm font-medium">Value</label>
        <input
          inputMode="decimal"
          className="w-full rounded-md border px-3 py-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a number"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-medium">From</label>
          <select
            className="w-full rounded-md border px-3 py-2"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            {unitList.map((u) => <option key={u}>{u}</option>)}
          </select>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium">To</label>
          <select
            className="w-full rounded-md border px-3 py-2"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            {unitList.map((u) => <option key={u}>{u}</option>)}
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Result</label>
        <output className="w-full rounded-md border bg-white px-3 py-2">
          {result || "—"}
        </output>
      </div>
    </div>
  );
}

'use client';

import InputTag from "@/app/utils/components/InputTag/InputTag";
import GreenBtn from "@/app/utils/components/GreenBtn/GreenBtn";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ClientCmToInches() {
  const router = useRouter();
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const convert = () => {
    const value = parseFloat(fromValue);
    if (!isNaN(value)) {
      const inches = value * 0.3937007874;
      setToValue(inches.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };

  return (
    <div className="w-full max-w-xl mt-6 px-4 py-6 bg-white rounded-lg shadow-md">
      {/* Only ONE page H1 lives here */}
      <h1 className="font-bold text-4xl text-[#006633]">Convert cm to inches</h1>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4 mt-6">
        <div className="space-y-4 w-full">
          <div className="flex items-center">
            <label className="w-16 font-semibold text-gray-700">From:</label>
            <div className="flex-1 max-w-xs">
              <InputTag
                value={fromValue}
                setter={(n, v) => setFromValue(v)}
                name="cm"
              />
            </div>
            <span className="ml-2 font-bold text-[#006633]">centimeter</span>
          </div>

          <div className="flex items-center">
            <label className="w-16 font-semibold text-gray-700">To:</label>
            <div className="flex-1 max-w-xs">
              <InputTag
                value={toValue}
                setter={() => {}}
                disabled={true}
                name="inch"
              />
            </div>
            <span className="ml-2 font-bold text-[#006633]">inch</span>
          </div>
        </div>

        <div className="self-center sm:self-start">
          <span
            className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
            onClick={() =>
              router.push("/Converters/CommonConversions/InchesToCm")
            }
            title="Swap to Inches → Cm"
          >
            ↕
          </span>
        </div>
      </div>

      <div className="flex space-x-4 mt-6">
        <GreenBtn text="Convert" clickEvent={convert} />
        <GreenBtn text="Clear" clickEvent={clear} />
      </div>
    </div>
  );
}

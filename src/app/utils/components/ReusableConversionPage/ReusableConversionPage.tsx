"use client";

import React, { useState } from "react";
import InputTag from "@/app/utils/components/InputTag/InputTag";
import GreenBtn from "@/app/utils/components/GreenBtn/GreenBtn";
import { useRouter } from "next/navigation";

interface ConversionPageProps {
  title: string;
  fromUnit: string;
  toUnit: string;
  definitions: { heading: string; content: string[] }[];
  tableComponent: React.ReactNode;
  conversionExample: React.ReactNode;

  convertFunction: (value: any) => any;
  reversePath?: string;
}

const ReusableConversionPage: React.FC<ConversionPageProps> = ({
  title,
  fromUnit,
  toUnit,
  definitions,
  tableComponent,
  conversionExample,
  convertFunction,
  reversePath,
}) => {
  const router = useRouter();
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const convert = () => {
    const value = parseFloat(fromValue);
    if (!isNaN(value)) {
      const result = convertFunction(value);
      setToValue(result.toString());
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };

  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">{title}</h1>

      {/* Input Section */}
      <div className="w-full max-w-md mt-10 px-2 py-4 bg-gray-100 rounded shadow">
        <div className="flex justify-between items-center sm:gap-0 -gap-x-1">
          <div>
            <div className="flex items-center mb-4">
              <label className="w-16 font-semibold">From:</label>
              <div className="w-48">
                <InputTag
                  value={fromValue}
                  setter={(n, v) => setFromValue(v)}
                  name={fromUnit}
                />
              </div>
              <span className="ml-2 font-bold">{fromUnit}</span>
            </div>

            <div className="flex items-center mb-4">
              <label className="w-16 font-semibold">To:</label>
              <div className="w-48">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name={toUnit}
                />
              </div>
              <span className="ml-2 font-bold">{toUnit}</span>
            </div>
          </div>

          {reversePath && (
            <div className="cursor-pointer">
              <span
                className="text-green-700 text-xl"
                onClick={() => router.push(reversePath)}
              >
                ↕
              </span>
            </div>
          )}
        </div>

        <div className="flex space-x-4">
          <GreenBtn text="Convert" clickEvent={convert} />
          <GreenBtn text="Clear" clickEvent={clear} />
        </div>
      </div>

      {/* Definitions */}
      {definitions.map((section, index) => (
        <section key={index} className="mt-10 space-y-3 text-justify">
          <h1 className="text-xl text-[#006633] font-semibold">
            {section.heading}
          </h1>
          {section.content.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </section>
      ))}

      {/* Table */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        {title} Conversion Table
      </h1>
      {tableComponent}

      {/* Conversion Example */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert {fromUnit} to {toUnit}
      </h1>
      <p>{conversionExample}</p>
    </div>
  );
};

export default ReusableConversionPage;

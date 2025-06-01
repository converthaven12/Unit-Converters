"use client";
import InputTag from "@/app/utils/components/InputTag/InputTag";
import GreenBtn from "@/app/utils/components/GreenBtn/GreenBtn";
import React, { useState } from "react";
import ConversionTable from "./ConversionTable";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const convert = () => {
    const value = parseFloat(fromValue);
    if (!isNaN(value)) {
      const gallons = value * 0.264172;
      setToValue(gallons.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">
        Convert liters to gallons
      </h1>
      <div className="w-full max-w-md mt-10 px-2 py-4 bg-white rounded shadow">
        <div className="flex justify-between items-center sm:gap-0 -gap-x-1">
          <div>
            <div className="flex items-center mb-4">
              <label className="w-16 font-semibold">From:</label>
              <div className="w-48">
                <InputTag
                  value={fromValue}
                  setter={(n, v) => setFromValue(v)}
                  name="kg"
                />
              </div>
              <span className="ml-2 font-bold">liter</span>
            </div>

            <div className="flex items-center mb-4">
              <label className="w-16 font-semibold">To:</label>
              <div className="w-48">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="gram"
                />
              </div>
              <span className="ml-2 font-bold">gallon (US)</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/CommonConversions/GallonsToLiters")
              }
            >
              ↕
            </span>
          </div>
        </div>

        <div className="flex space-x-4">
          <GreenBtn text="Convert" clickEvent={convert} />
          <GreenBtn text="Clear" clickEvent={clear} />
        </div>
      </div>
      {/* Section 1 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">Liter</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A liter (symbol: L) is a unit of volume
          in the metric system. One liter is equal to 1,000 cubic centimeters
          (cm³) or 1 cubic decimeter (dm³). It is commonly used to measure
          liquids and is equivalent to 0.001 cubic meters (m³).
        </p>
        <p>
          <strong>History/origin:</strong> The liter originated in France in
          1795 as part of the metric system and was originally defined as the
          volume of one kilogram of water at 4°C. This definition has changed
          slightly over time with refinements in measurement standards. The
          modern definition is based on the cubic decimeter.
        </p>
        <p>
          <strong>Current use:</strong> The liter is widely used around the
          world, especially in countries that follow the metric system. It is
          the standard unit for measuring beverages, fuel, and household liquid
          products. In scientific contexts, milliliters (mL) and liters (L) are
          preferred units for accuracy and ease of use.
        </p>
      </section>

      {/* Section 2 */}

      <h1 className="text-xl text-[#006633] font-semibold mt-10">Gallon</h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> A gallon is a unit of volume used in the
          imperial and U.S. customary systems of measurement. The U.S. liquid
          gallon (symbol: gal) is defined as 231 cubic inches, which is
          approximately 3.785 liters. The UK (imperial) gallon is larger, equal
          to approximately 4.546 liters.
        </p>
        <p>
          <strong>History/origin:</strong> The term "gallon" originates from the
          Latin word "gallēta" or "galleta," a container or pail. Gallons were
          used historically in England to measure wine and ale, and different
          sizes were used for different liquids. The imperial gallon was
          standardized in 1824 in the UK, while the U.S. adopted its own version
          based on the Queen Anne wine gallon.
        </p>
        <p>
          <strong>Current use:</strong> In the United States, the gallon is
          commonly used to measure gasoline, milk, and other liquids. The UK and
          some of its former territories continue to use the imperial gallon for
          certain applications. However, most countries around the world have
          adopted the liter as the standard unit for liquid volume measurement.
        </p>
      </section>

      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Liter to Gallon (US) Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Liter to Gallon (US)
      </h1>
      <p>
        1 L, l = 0.2641720524 gal (US)
        <br />1 gal (US) = 3.785411784 L, l
      </p>
      <p>
        <strong>Example: </strong>convert 15 L, l to gal (US) :
        <br />
        15 L, l = 15 × 0.2641720524 gal (US) = 3.9625807854 gal (US)
      </p>
    </div>
  );
};

export default page;

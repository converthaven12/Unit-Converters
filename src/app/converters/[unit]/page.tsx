import React from "react";
import KgToGram from "./WeightAndMass/KgToGram/page";
import ConverterHome from "@/app/utils/components/ConverterHome/ConverterHome";
// 3 levels up: [unit] → converters → app, then into helper
import { conversionFactors } from "../../../helper/conversionFactors";

const Page: React.FC = () => {
  // Example: you can now use conversionFactors here if needed
  return (
    <div>
      <ConverterHome />
      {/* If you need direct conversions, use conversionFactors */}
    </div>
  );
};

export default Page;

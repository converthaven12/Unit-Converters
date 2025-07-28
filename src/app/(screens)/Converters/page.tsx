import React from "react";
import KgToGram from "./WeightAndMass/KgToGram/page";
import ConverterHome from "@/app/utils/components/ConverterHome/ConverterHome";

const page: React.FC = () => {
  return (
    <div>
      <ConverterHome />
      <KgToGram />   {/* if you need to mount this conversion too */}
    </div>
  );
};

export default page;

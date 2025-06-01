"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for Acres to Hectares

const definitions = [
  {
    heading: "Acre",
    content: [
      "Definition: An acre is a unit of area commonly used in the imperial and US customary systems. It is defined as exactly 43,560 square feet or about 4,047 square meters.",
      "History/origin: The acre originated in medieval England as a measure of land that could be plowed by one man with a team of oxen in one day. Its size was standardized over time to the current definition.",
      "Current use: Acres are widely used today in the United States, the United Kingdom, and other countries that follow the imperial measurement system. It is frequently used in agriculture, land planning, and real estate.",
    ],
  },
  {
    heading: "Hectare",
    content: [
      "Definition: A hectare is a metric unit of area defined as 10,000 square meters (about 2.471 acres). It is commonly used worldwide for measuring large areas of land such as agricultural fields and forests.",
      "History/origin: The hectare was introduced as part of the metric system in the late 18th century and has been widely adopted internationally as a standard land measurement unit.",
      "Current use: Hectares are the preferred unit of area measurement in most countries except the United States, the United Kingdom, and a few others. It is commonly used in land management, agriculture, and environmental planning.",
    ],
  },
];

const AcresToHectarePage = () => {
  return (
    <ReusableConversionPage
      title="Convert Acres to Hectares"
      fromUnit="Acres"
      toUnit="Hectares"
      convertFunction={(val) => val * 0.404685642} // 1 acre = 0.404685642 hectares
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 acre = 0.404685642 hectares
          <br />
          1 hectare = 2.47105381 acres
          <br />
          <strong>Example:</strong> convert 15 acres to hectares:
          <br />
          15 × 0.404685642 = 6.07028463 hectares
        </>
      }
      reversePath="/Converters/AreaUnit/HectareToAcres"
    />
  );
};

export default AcresToHectarePage;

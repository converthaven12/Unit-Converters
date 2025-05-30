"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for miles to yards

const definitions = [
  {
    heading: "Mile",
    content: [
      "Definition: A mile is a unit of length in the imperial and US customary systems, equal to 5,280 feet or 1,760 yards.",
      "History/origin: The mile originated from Roman times and was standardized in England during the 16th century.",
      "Current use: Miles are commonly used in the US and UK for measuring distances, especially in transportation and road signs.",
    ],
  },
  {
    heading: "Yard",
    content: [
      "Definition: A yard is a unit of length in the imperial and US customary systems, equal to 3 feet or 36 inches.",
      "History/origin: The yard originated from various English measurement systems and was standardized internationally in the 20th century.",
      "Current use: Yards are used in the US and UK for measuring distances in fields such as sports, construction, and textiles.",
    ],
  },
];

const MilesToYardsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Miles to Yards"
      fromUnit="Miles"
      toUnit="Yards"
      convertFunction={(val) => val * 1760} // 1 mile = 1760 yards
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 mile = 1760 yards
          <br />
          1 yard = 0.000568 miles
          <br />
          <strong>Example:</strong> convert 2 miles to yards:
          <br />2 × 1760 = 3520 yards
        </>
      }
      reversePath="/Converters/LengthUnits/YardsToMiles"
    />
  );
};

export default MilesToYardsPage;

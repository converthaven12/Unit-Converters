"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for inches to yards

const definitions = [
  {
    heading: "Inch",
    content: [
      "Definition: An inch is a unit of length in the imperial and US customary systems, equal to 1/12 of a foot or exactly 2.54 centimeters.",
      "History/origin: The inch has historical roots in many ancient measurement systems and was standardized as 2.54 cm in 1959.",
      "Current use: Inches are widely used in the United States, Canada, and the UK for everyday measurements, especially in construction and manufacturing.",
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

const InchesToYardsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Inches to Yards"
      fromUnit="Inches"
      toUnit="Yards"
      convertFunction={(val) => val / 36} // 1 yard = 36 inches
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 inch = 0.02778 yards
          <br />
          1 yard = 36 inches
          <br />
          <strong>Example:</strong> convert 72 inches to yards:
          <br />
          72 ÷ 36 = 2 yards
        </>
      }
      reversePath="/Converters/LengthUnits/YardsToInches"
    />
  );
};

export default InchesToYardsPage;

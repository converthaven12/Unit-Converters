"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adapt this table for N to lbs

const definitions = [
  {
    heading: "Newton (N)",
    content: [
      "Definition: A newton is the SI unit of force, defined as the force required to accelerate one kilogram of mass by one meter per second squared.",
      "History/origin: Named after Sir Isaac Newton for his work in classical mechanics.",
      "Current use: Newtons are the standard unit of force used globally in physics and engineering.",
    ],
  },
  {
    heading: "Pound-force (lbf)",
    content: [
      "Definition: A pound-force is a unit of force in the Imperial system, defined as the force exerted by gravity on a mass of one pound at the Earth's surface.",
      "History/origin: Commonly used in the United States and other countries using Imperial units.",
      "Current use: Pound-force is widely used in engineering and everyday measurements in Imperial unit countries.",
    ],
  },
];

const NewtonsToLbsPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Newtons to Pounds-Force"
      fromUnit="Newtons (N)"
      toUnit="Pounds-Force (lbf)"
      convertFunction={(val) => val * 0.224809} // 1 N ≈ 0.224809 lbf
      definitions={definitions}
      tableComponent={<ConversionTable />} // Use a ConversionTable adapted for N to lbs
      conversionExample={
        <>
          1 newton ≈ 0.224809 pounds-force
          <br />
          <strong>Example:</strong> convert 100 newtons to pounds-force:
          <br />
          100 × 0.224809 = 22.4809 pounds-force
        </>
      }
      reversePath="/Converters/ForceUnits/LbsToNewtons"
    />
  );
};

export default NewtonsToLbsPage;

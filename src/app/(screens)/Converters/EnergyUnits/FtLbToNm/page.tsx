"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Use a ConversionTable adapted for FtLb to Nm

const definitions = [
  {
    heading: "Foot-Pound (ft·lb)",
    content: [
      "Definition: A foot-pound is a unit of torque (or energy) in the Imperial system, defined as the torque resulting from a force of one pound-force applied at a distance of one foot from the pivot point.",
      "History/origin: Commonly used in the United States and other countries that use Imperial units, especially in engineering and automotive contexts.",
      "Current use: Foot-pounds are widely used in mechanical and automotive engineering to measure torque.",
    ],
  },
  {
    heading: "Newton-Meter (Nm)",
    content: [
      "Definition: A newton-meter is the SI unit of torque, defined as the torque resulting from a force of one newton applied at a distance of one meter from the pivot point.",
      "History/origin: Adopted internationally with the SI system, named after Sir Isaac Newton.",
      "Current use: Newton-meters are the standard unit for torque in most scientific and engineering disciplines worldwide.",
    ],
  },
];

const FtLbToNmPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Foot-Pounds to Newton-Meters"
      fromUnit="Foot-Pounds (ft·lb)"
      toUnit="Newton-Meters (Nm)"
      convertFunction={(val) => val * 1.35582} // 1 ft·lb = 1.35582 Nm
      definitions={definitions}
      tableComponent={<ConversionTable />} // Should be adapted for ft·lb to Nm
      conversionExample={
        <>
          1 foot-pound = 1.35582 newton-meters
          <br />
          1 newton-meter = 0.73756 foot-pounds
          <br />
          <strong>Example:</strong> convert 50 foot-pounds to newton-meters:
          <br />
          50 × 1.35582 = 67.791 newton-meters
        </>
      }
      reversePath="/Converters/TorqueUnits/NmToFtLb"
    />
  );
};

export default FtLbToNmPage;

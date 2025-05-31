import React from "react";

const ConversionTable = () => {
  const data = [
    { minutes: 1, hours: 1 / 60 },
    { minutes: 15, hours: 15 / 60 },
    { minutes: 30, hours: 30 / 60 },
    { minutes: 45, hours: 45 / 60 },
    { minutes: 60, hours: 60 / 60 },
    { minutes: 90, hours: 90 / 60 },
    { minutes: 120, hours: 120 / 60 },
    { minutes: 180, hours: 180 / 60 },
    { minutes: 240, hours: 240 / 60 },
    { minutes: 300, hours: 300 / 60 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-blue-700 text-white text-left">
            <th className="px-4 py-2 border border-blue-900">Minutes</th>
            <th className="px-4 py-2 border border-blue-900">Hours</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 border border-blue-800">
                {row.minutes}
              </td>
              <td className="px-4 py-2 border border-blue-800">
                {row.hours.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;

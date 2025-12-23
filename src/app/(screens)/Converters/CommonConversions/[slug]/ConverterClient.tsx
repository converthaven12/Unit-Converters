"use client";

type ConversionData = {
  title: string;
  description: string;
  from: string;
  to: string;
};

export default function ConverterClient({
  data,
}: {
  data: ConversionData;
}) {
  return (
    <div style={{ padding: 20 }}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <div style={{ marginTop: 12 }}>
        From <b>{data.from}</b> to <b>{data.to}</b>
      </div>
    </div>
  );
}

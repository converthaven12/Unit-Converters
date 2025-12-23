"use client";

type ConversionData = {
  title: string;
  description: string;
  from: string;
  to: string;
};

export default function ConverterClient({ data }: { data: ConversionData }) {
  return (
    <div style={{ padding: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>{data.title}</h1>
      <p style={{ marginTop: 8 }}>{data.description}</p>

      <div style={{ marginTop: 16 }}>
        From <b>{data.from}</b> to <b>{data.to}</b>
      </div>
    </div>
  );
}

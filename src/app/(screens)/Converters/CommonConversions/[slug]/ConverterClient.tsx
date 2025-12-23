"use client";

type ConversionData = {
  title: string;
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
      <p>
        From <b>{data.from}</b> to <b>{data.to}</b>
      </p>
    </div>
  );
}

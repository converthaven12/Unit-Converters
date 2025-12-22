"use client";

type ConversionData = {
  title?: string;
  description?: string;
  from?: string;
  to?: string;
};

export default function ConverterClient({ data }: { data: ConversionData }) {
  return (
    <div style={{ marginTop: 20 }}>
      <p>
        From <b>{data?.from}</b> to <b>{data?.to}</b>
      </p>
    </div>
  );
}

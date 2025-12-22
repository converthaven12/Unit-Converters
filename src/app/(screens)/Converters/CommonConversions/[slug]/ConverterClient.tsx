"use client";

type Conversion = {
  title: string;
  description: string;
  from: string;
  to: string;
};

export default function ConverterClient({ data }: { data: Conversion }) {
  return (
    <div style={{ marginTop: 20 }}>
      <p>
        From <b>{data.from}</b> to <b>{data.to}</b>
      </p>
    </div>
  );
}

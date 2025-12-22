"use client";

export default function ConverterClient({ data }) {
  return (
    <div style={{ marginTop: 20 }}>
      <p>
        From <b>{data?.from}</b> to <b>{data?.to}</b>
      </p>
    </div>
  );
}

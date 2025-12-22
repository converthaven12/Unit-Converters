import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const ConverterClient = dynamic(() => import("./ConverterClient"), {
  ssr: false,
  loading: () => (
    <div style={{ padding: 16 }}>
      <div style={{ height: 140, borderRadius: 10, background: "#f2f2f2" }} />
      <p>Loading converter...</p>
    </div>
  ),
});

// ✅ type annotation removed (no Record<string, any>)
const CONVERSIONS = {
  "cm-to-inches": {
    title: "Cm to Inches Converter",
    description: "Convert centimeters to inches instantly.",
    from: "Centimeter",
    to: "Inch",
  },
  "cm-to-feet": {
    title: "Cm to Feet Converter",
    description: "Convert centimeters to feet instantly.",
    from: "Centimeter",
    to: "Feet",
  },
};

export function generateStaticParams() {
  return Object.keys(CONVERSIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const data = CONVERSIONS[params.slug];
  if (!data) return {};
  return {
    title: `${data.title} | ConvertHaven`,
    description: data.description,
    alternates: {
      canonical: `https://www.converthaven.com/Converters/CommonConversions/${params.slug}`,
    },
  };
}

export default function Page({ params }) {
  const data = CONVERSIONS[params.slug];
  if (!data) return notFound();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ConverterClient data={data} />
    </div>
  );
}

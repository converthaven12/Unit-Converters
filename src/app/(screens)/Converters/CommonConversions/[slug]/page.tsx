import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

type ConversionData = {
  title: string;
  description: string;
  from: string;
  to: string;
};

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
    to: "Foot",
  },
} satisfies Record<string, ConversionData>;

type Slug = keyof typeof CONVERSIONS;

const ConverterClient = dynamic(() => import("./ConverterClient"), {
  ssr: false,
  loading: () => (
    <div style={{ padding: 16 }}>
      <div style={{ height: 140, borderRadius: 10, background: "#f2f2f2" }} />
      <p>Loading converter...</p>
    </div>
  ),
});

export function generateMetadata({ params }: { params: { slug: Slug } }) {
  const data = CONVERSIONS[params.slug];
  if (!data) return {};
  return {
    title: `${data.title} | ConvertHaven`,
    description: data.description,
  };
}

export default function Page({ params }: { params: { slug: Slug } }) {
  const data = CONVERSIONS[params.slug];
  if (!data) notFound();

  return <ConverterClient data={data} />;
}

// src/app/screens/Converters/linkedConversions/[unit]/page.tsx
import Head from 'next/head';
import { conversionFactors, convert } from '@/Helper/conversionFactors';

interface Params { params: { unit: string } }

export async function getStaticPaths() {
  const paths = Object.keys(conversionFactors).map(unit => ({ params: { unit } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: Params) {
  return { props: { unit: params.unit } };
}

const ConverterPage: React.FC<{ unit: string }> = ({ unit }) => {
  const entries = Object.entries(conversionFactors).map(([otherUnit]) => ({
    otherUnit,
    value: convert(1, unit, otherUnit),
  }));

  return (
    <>
      <Head>
        <title>{unit} to All Units Converter | Converthaven</title>
        <meta
          name="description"
          content={`Convert ${unit} to ${entries.length} other units instantly.`}
        />
      </Head>
      <main>
        <h1>{unit} to All Units Converter</h1>
        <table>
          <thead>
            <tr>
              <th>Unit</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(({ otherUnit, value }) => (
              <tr key={otherUnit}>
                <td>{otherUnit}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default ConverterPage;

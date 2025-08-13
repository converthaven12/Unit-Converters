import Head from 'next/head';

export default function MillimetersToCm() {
  return (
    <>
      <Head>
        {/* Unique Title & Meta Description */}
        <title>Millimeters to Centimeters Converter | Length Conversion</title>
        <meta name="description" content="Accurately convert millimeters to centimeters. Simple calculator, formula, and conversion table for mm to cm." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.converthaven.com/Converters/LengthUnits/MillimetersToCm" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="Millimeters to Centimeters Converter" />
        <meta property="og:description" content="Use this free tool to convert millimeters (mm) to centimeters (cm) easily and accurately." />
        <meta property="og:url" content="https://www.converthaven.com/Converters/LengthUnits/MillimetersToCm" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.converthaven.com/images/mm-to-cm-og.jpg" />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Millimeters to Centimeters Converter",
              "description": "Free online calculator to convert millimeters to centimeters (mm to cm) with formula and table.",
              "url": "https://www.converthaven.com/Converters/LengthUnits/MillimetersToCm"
            }
          `}
        </script>
      </Head>
      {/* Exactly one H1 tag */}
      <main>
        <h1>Millimeters to Centimeters Converter</h1>
        {/* Rich, unique content */}
        <section>
          <p>
            Easily convert millimeters (mm) to centimeters (cm) using this free tool. 
            Enter your value in millimeters and get the equivalent in centimeters instantly.
          </p>
          <p>
            <strong>Formula:</strong> 1 centimeter = 10 millimeters, so cm = mm &divide; 10.
          </p>
          <div>
            {/* Example conversion tool UI */}
            <input type="number" placeholder="Millimeters" id="mmInput" />
            <button onClick={() => {
              const mm = document.getElementById('mmInput').value;
              document.getElementById('cmResult').innerText = mm ? (mm/10).toFixed(2) : '';
            }}>
              Convert
            </button>
            <div id="cmResult"></div>
          </div>
          {/* Conversion Table */}
          <table>
            <thead>
              <tr><th>Millimeters (mm)</th><th>Centimeters (cm)</th></tr>
            </thead>
            <tbody>
              <tr><td>10</td><td>1</td></tr>
              <tr><td>50</td><td>5</td></tr>
              <tr><td>100</td><td>10</td></tr>
            </tbody>
          </table>
        </section>

        {/* Internal Links */}
        <nav>
          <a href="/Converters/LengthUnits/CmToMillimeters">Centimeters to Millimeters Converter</a>
          <a href="/Converters/LengthUnits/MillimetersToInches">Millimeters to Inches Converter</a>
        </nav>
      </main>
    </>
  );
}

'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the calculator (no SSR since it's client-heavy)
const ScientificCalculator = dynamic(
  () => import('../../../utils/components/Calculator/Calculator'),
  { ssr: false }
);

const page = () => {
  return (
    <div>
      <ScientificCalculator />
    </div>
  );
};

export default page;

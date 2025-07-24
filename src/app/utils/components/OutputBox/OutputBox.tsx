'use client';
import React from 'react';

type OutputBoxProps = {
  value?: string;
};

const OutputBox: React.FC<OutputBoxProps> = ({ value }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', minHeight: '40px' }}>
      {value || 'Output goes here'}
    </div>
  );
};

export default OutputBox;

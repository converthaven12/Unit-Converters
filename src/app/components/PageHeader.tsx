import React from 'react';

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="mb-6 px-4 py-2 bg-white shadow-sm rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    </header>
  );
}
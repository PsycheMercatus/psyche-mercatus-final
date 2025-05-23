// components/Dashboard.jsx
import React from 'react';
import Graph from './Graph';
import TokenCounter from './TokenCounter';

export default function Dashboard() {
  return (
    <div>
      <h2>Painel de Tendências</h2>
      <Graph />
      <TokenCounter />
    </div>
  );
}


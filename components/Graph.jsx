// components/Graph.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Prazer', valor: 75 },
  { name: 'Medo', valor: 48 },
  { name: 'Ambição', valor: 64 },
  { name: 'Vício', valor: 55 },
];

export default function Graph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Bar dataKey="valor" fill="#ffc107" />
      </BarChart>
    </ResponsiveContainer>
  );
}


// components/Header.jsx
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#111', color: '#ffc107', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Psyche Mercatus
      </h1>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/">Início</Link>
        <Link href="/perfil">Perfil</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
}

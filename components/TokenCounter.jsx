// components/TokenCounter.jsx
import React, { useEffect, useState } from 'react';

export default function TokenCounter({ userId }) {
  const [tokenCount, setTokenCount] = useState(0);

  useEffect(() => {
    // Simulação: aqui você pode conectar com Supabase futuramente
    if (userId) {
      const fakeTokens = Math.floor(Math.random() * 1000);
      setTokenCount(fakeTokens);
    }
  }, [userId]);

  return (
    <div style={{ 
      backgroundColor: '#1a1a1a',
      padding: '1rem',
      borderRadius: '12px',
      color: '#ffc107',
      fontSize: '1.2rem',
      textAlign: 'center',
      marginTop: '1rem',
      boxShadow: '0 0 10px rgba(255, 193, 7, 0.2)'
    }}>
      🧠 Tokens Comportamentais: <strong>{tokenCount}</strong>
    </div>
  );
}


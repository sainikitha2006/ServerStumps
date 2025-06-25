import React, { useState } from 'react';

function ConceptCard({ icon, title, description, extra, cricketAnalogy }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      padding: '1.5rem',
      margin: '1rem',
      flex: '1 1 250px',
      minWidth: '250px',
      maxWidth: '350px',
      textAlign: 'center',
      transition: 'box-shadow 0.2s',
      cursor: 'pointer',
      position: 'relative',
    }} onClick={() => setOpen(o => !o)}>
      <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        style={{
          marginTop: '1rem',
          padding: '0.4rem 1.2rem',
          borderRadius: '6px',
          border: 'none',
          background: '#0077b6',
          color: 'white',
          cursor: 'pointer',
          fontSize: '0.95rem',
        }}
        onClick={e => { e.stopPropagation(); setOpen(o => !o); }}
      >
        {open ? 'Hide Details' : 'Show Details'}
      </button>
      {open && (
        <div style={{
          marginTop: '1rem',
          background: '#f0f7fa',
          borderRadius: '8px',
          padding: '1rem',
          fontSize: '0.98rem',
          color: '#333',
        }}>
          {extra}
          {cricketAnalogy && (
            <div style={{ marginTop: '1rem', fontStyle: 'italic', color: '#1b5e20' }}>
              <b>Test Cricket Analogy:</b> {cricketAnalogy}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ConceptCard; 
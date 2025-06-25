import React from 'react';

function Header() {
  return (
    <header style={{ background: '#282c34', color: 'white', padding: '1rem 0', textAlign: 'center', position: 'relative' }}>
      <h1 style={{ fontSize: '2.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.7rem' }}>
        <span role="img" aria-label="cricket">🏏</span>
        Server-Side Engineering in Real-Time Collaboration
        <span role="img" aria-label="stadium">🏟️</span>
      </h1>
      <nav style={{ marginTop: '0.5rem' }}>
        <a href="#intro" style={{ color: 'white', margin: '0 1rem', fontSize: '1.1rem' }}><span role="img" aria-label="info">ℹ️</span> Intro</a>
        <a href="#concepts" style={{ color: 'white', margin: '0 1rem', fontSize: '1.1rem' }}><span role="img" aria-label="lightbulb">💡</span> Key Concepts</a>
        <a href="#example" style={{ color: 'white', margin: '0 1rem', fontSize: '1.1rem' }}><span role="img" aria-label="example">📝</span> Example</a>
        <a href="#quiz" style={{ color: 'white', margin: '0 1rem', fontSize: '1.1rem' }}><span role="img" aria-label="quiz">❓</span> Quiz</a>
        <a href="#live-demo" style={{ color: 'white', margin: '0 1rem', fontSize: '1.1rem' }}><span role="img" aria-label="live">🏏</span> Live Demo</a>
      </nav>
    </header>
  );
}

export default Header; 
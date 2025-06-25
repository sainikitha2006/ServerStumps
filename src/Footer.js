import React from 'react';

const iconStyle = {
  display: 'inline-block',
  margin: '0 0.5rem',
  animation: 'spin 2.5s linear infinite',
  fontSize: '1.5rem',
};

const footerStyle = {
  background: 'linear-gradient(90deg, #e0f7fa 0%, #f0f7fa 100%)',
  color: '#0077b6',
  padding: '1.5rem 0 1rem 0',
  textAlign: 'center',
  marginTop: '3rem',
  fontSize: '1.05rem',
  borderTopLeftRadius: '18px',
  borderTopRightRadius: '18px',
  boxShadow: '0 -2px 8px rgba(0,0,0,0.06)',
};

const keyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

function Footer() {
  return (
    <footer style={footerStyle}>
      <style>{keyframes}</style>
      <div style={{ marginBottom: '0.5rem' }}>
        <span style={iconStyle} role="img" aria-label="bat">🏏</span>
        <span style={iconStyle} role="img" aria-label="cap">🧢</span>
        <span style={iconStyle} role="img" aria-label="score">📝</span>
        <span style={iconStyle} role="img" aria-label="umpire">🧑‍⚖️</span>
      </div>
      <div>
        <b>Made by Sainikitha | Server-Side Engineering Explained Through Test Cricket</b>
      </div>
      <div style={{ marginTop: '0.5rem', fontSize: '0.98rem' }}>
        <a href="#quiz" style={{ margin: '0 1rem', color: '#0077b6', textDecoration: 'underline', fontWeight: 'bold' }}>Quiz</a>
        <a href="#concepts" style={{ margin: '0 1rem', color: '#0077b6', textDecoration: 'underline', fontWeight: 'bold' }}>Key Concepts</a>
        <a href="#live-demo" style={{ margin: '0 1rem', color: '#0077b6', textDecoration: 'underline', fontWeight: 'bold' }}>Live Demo</a>
      </div>
      <div style={{ marginTop: '0.7rem', fontSize: '1.05rem', color: '#1b5e20', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
        <span role="img" aria-label="mini-scoreboard">🏏</span>
        <span>Mini Scoreboard: <b>Runs: 250/3</b> | <b>Overs: 75.2</b></span>
      </div>
      <div style={{ marginTop: '0.7rem', fontSize: '0.95rem', color: '#555' }}>
        &copy; {new Date().getFullYear()} | All rights reserved. | 🏏 Test Cricket Edition
      </div>
    </footer>
  );
}

export default Footer; 
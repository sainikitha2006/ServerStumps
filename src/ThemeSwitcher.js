import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Stadium backgrounds
  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundImage = "url('https://svgshare.com/i/13wC.svg'), linear-gradient(180deg, #232946 0%, #22223b 100%)";
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center bottom';
      document.body.style.backgroundSize = 'cover';
    } else {
      document.body.style.backgroundImage = "url('https://svgshare.com/i/13wB.svg'), linear-gradient(180deg, #e0f7fa 0%, #f8f9fa 100%)";
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center bottom';
      document.body.style.backgroundSize = 'cover';
    }
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '1.2rem',
        right: '1.2rem',
        zIndex: 1000,
        padding: '0.6rem 1.4rem',
        borderRadius: '8px',
        border: 'none',
        background: theme === 'dark' ? '#22223b' : '#e0f7fa',
        color: theme === 'dark' ? '#f2e9e4' : '#0077b6',
        fontWeight: 'bold',
        fontSize: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        cursor: 'pointer',
        transition: 'background 0.2s, color 0.2s',
      }}
      aria-label="Toggle light/dark mode"
    >
      {theme === 'dark' ? '🌙 Night Test' : '☀️ Day Test'}
    </button>
  );
}

export default ThemeSwitcher; 
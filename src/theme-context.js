import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.background = '#22223b';
      document.body.style.color = '#f2e9e4';
      document.body.style.transition = 'background 0.3s, color 0.3s';
      // Improve contrast for links and buttons
      const style = document.createElement('style');
      style.id = 'dark-mode-extra';
      style.innerHTML = `
        a { color: #80ffea !important; }
        button, .button, input[type=submit] {
          background: #3a3a5a !important;
          color: #f2e9e4 !important;
          border-color: #80ffea !important;
        }
        section, .card, .fun-fact, .quiz-card {
          background: #232946 !important;
          color: #f2e9e4 !important;
        }
        pre, code {
          background: #232946 !important;
          color: #f2e9e4 !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      document.body.style.background = '#f8f9fa';
      document.body.style.color = '#22223b';
      const oldStyle = document.getElementById('dark-mode-extra');
      if (oldStyle) oldStyle.remove();
    }
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
} 
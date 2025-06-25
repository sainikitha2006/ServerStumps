import React, { useEffect, useState } from 'react';

const facts = [
  'Did you know? The scorekeeper in a test match is like a server, keeping the official record for everyone! 📝',
  'Fun fact: Rotating bowlers in a test match is just like load balancing in server-side engineering! 🏏',
  'Test cricket matches can last up to 5 days—just like servers, endurance and coordination are key! ⏳',
  'The captain communicates field changes to all players, just like a server broadcasts updates to clients. 🧢',
  'Umpires authenticate players before they take the field, similar to how servers authenticate users. 🧑‍⚖️',
  'When two fielders go for the same catch, the captain resolves the conflict—just like servers resolve data conflicts! ⚖️',
  'A test match needs everyone in sync, just like a real-time collaborative app! 🌐'
];

function FunFact() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(true);
      setTimeout(() => {
        setIdx(i => (i + 1) % facts.length);
        setFlipped(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: '#e0f7fa',
      color: '#0077b6',
      borderRadius: '10px',
      padding: '1.2rem 2rem',
      margin: '2rem auto',
      maxWidth: '600px',
      fontSize: '1.15rem',
      textAlign: 'center',
      minHeight: '3.2rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      transition: 'transform 0.4s',
      transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      backfaceVisibility: 'hidden',
      perspective: '600px',
      opacity: fade ? 1 : 0,
    }}>
      {facts[idx]}
    </div>
  );
}

export default FunFact; 
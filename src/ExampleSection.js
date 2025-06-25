import React, { useState } from 'react';

const steps = [
  {
    text: 'The batsman (client) signals to the captain (server) for a field change. The captain receives the request and decides on the new field placement.',
    diagram: `🏏 Batsman   🧢 Captain\n   |             |\n   |   (Signal)  |\n   |      ↘      |\n   |     🧢 Captain\n   |             |\n   ↓             ↓\n🏏 Batsman   🧢 Captain\n`
  },
  {
    text: 'The captain (server) communicates the new field placement to all fielders (clients), ensuring everyone is in sync.',
    diagram: `🧢 Captain   🧤 Fielder\n   |             |\n   |   (Broadcast)\n   |      ↘      |\n   |     🧤 Fielder\n   |             |\n   ↓             ↓\n🧢 Captain   🧤 Fielder\n`
  },
  {
    text: 'The scorekeeper (server) updates the scoreboard after every run, wicket, or over, keeping the official match state.',
    diagram: `🏏 Batsman   🧢 Captain   📝 Scorekeeper\n   |             |             |\n   |   (Run)     |   (Update)  |\n   |      ↘      |      ↘      |\n   |     📝 Scorekeeper        |\n   |             |             |\n   ↓             ↓             ↓\n🏏 Batsman   🧢 Captain   📝 Scorekeeper\n`
  },
  {
    text: 'If two fielders go for the same catch, the captain (server) resolves the conflict and assigns responsibility, ensuring smooth play.',
    diagram: `🧤 Fielder A   🧤 Fielder B\n   |   (Catch)   |\n   |      |      |\n   |     🧢 Captain (resolving)\n   |      |      |\n   ↓             ↓\n🧤 Fielder A   🧤 Fielder B\n[No collision!]\n`
  },
  {
    text: 'The umpire (server) authenticates each player before they take the field, checking their credentials and equipment.',
    diagram: `🧑‍⚖️ Umpire   🏏 Player\n   |   (Check)   |\n   |      |      |\n   |     🏏 Player (verified)\n   |      |      |\n   ↓             ↓\n🧑‍⚖️ Umpire   🏏 Player\n[Player authenticated!]\n`
  }
];

function ExampleSection() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };
  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <section id="example" style={{ padding: '2rem', background: '#fffbe6' }}>
      <h2 style={{ textAlign: 'center' }}>Test Cricket Example: Coordinating the Match</h2>
      <div style={{ maxWidth: '700px', margin: '2rem auto', fontSize: '1.1rem', textAlign: 'center' }}>
        <p>{steps[step].text}</p>
        <pre style={{
          display: 'inline-block',
          background: '#f0f0f0',
          borderRadius: '8px',
          padding: '1rem',
          fontSize: '1.1rem',
          lineHeight: '2',
          marginTop: '1rem',
        }}>{steps[step].diagram}</pre>
        <div style={{ marginTop: '1.5rem' }}>
          <button onClick={handlePrev} disabled={step === 0} style={{ marginRight: '1rem', padding: '0.5rem 1.5rem', borderRadius: '6px', border: 'none', background: step === 0 ? '#ccc' : '#0077b6', color: 'white', cursor: step === 0 ? 'not-allowed' : 'pointer' }}>Previous</button>
          <button onClick={handleNext} disabled={step === steps.length - 1} style={{ padding: '0.5rem 1.5rem', borderRadius: '6px', border: 'none', background: step === steps.length - 1 ? '#ccc' : '#0077b6', color: 'white', cursor: step === steps.length - 1 ? 'not-allowed' : 'pointer' }}>Next</button>
        </div>
      </div>
      <p style={{ maxWidth: '700px', margin: '1rem auto', fontStyle: 'italic', color: '#555', textAlign: 'center' }}>
        Every aspect of a test match, from field changes to score updates, mirrors the teamwork and coordination of server-side engineering!
      </p>
    </section>
  );
}

export default ExampleSection; 
import React, { useState } from 'react';

const questions = [
  {
    question: 'In a test match, who acts like the server by keeping the official record of runs, wickets, and overs?',
    options: ['The Captain', 'The Scorekeeper', 'The Batsman', 'The Bowler'],
    answer: 1
  },
  {
    question: 'What is the cricket equivalent of load balancing in server-side engineering?',
    options: [
      'Rotating bowlers to avoid fatigue',
      'Letting one bowler bowl all overs',
      'Only using spinners',
      'Ignoring field placements'
    ],
    answer: 0
  },
  {
    question: 'How does a test match captain resolve conflicts when two fielders go for the same catch?',
    options: [
      'Lets them collide',
      'Assigns responsibility to one fielder',
      'Stops the match',
      'Asks the umpire to decide'
    ],
    answer: 1
  },
  {
    question: 'Who authenticates players before they take the field, similar to how a server authenticates users?',
    options: [
      'The Captain',
      'The Umpire',
      'The Bowler',
      'The Crowd'
    ],
    answer: 1
  }
];

const matchSessions = [
  { day: 1, session: 'Morning' },
  { day: 1, session: 'Afternoon' },
  { day: 1, session: 'Evening' },
  { day: 2, session: 'Morning' },
  { day: 2, session: 'Afternoon' },
  { day: 2, session: 'Evening' },
];

function Quiz() {
  const [selected, setSelected] = useState(Array(questions.length).fill(null));
  const [showScore, setShowScore] = useState(false);

  const handleOption = (qIdx, oIdx) => {
    if (!showScore) {
      const updated = [...selected];
      updated[qIdx] = oIdx;
      setSelected(updated);
    }
  };

  const handleSubmit = () => {
    setShowScore(true);
  };

  const score = selected.reduce(
    (acc, val, idx) => (val === questions[idx].answer ? acc + 1 : acc),
    0
  );

  // Progress bar calculation
  const answered = selected.filter(v => v !== null).length;
  const percent = Math.round((answered / questions.length) * 100);

  // Scoreboard logic
  const runs = score * 25; // 25 runs per correct answer
  const wickets = questions.length - score;
  const overs = (answered * 2).toFixed(1); // 2 balls per question
  const sessionIdx = Math.min(Math.floor((answered / questions.length) * matchSessions.length), matchSessions.length - 1);
  const matchProgress = matchSessions[sessionIdx];

  return (
    <section id="quiz" style={{ padding: '2rem', background: '#f0f7fa', position: 'relative' }}>
      {/* Match Progress Bar */}
      <div style={{ position: 'absolute', top: '1rem', left: '50%', transform: 'translateX(-50%)', width: '90%', zIndex: 1 }}>
        <div style={{ background: '#e0e0e0', borderRadius: '10px', overflow: 'hidden', height: '14px', marginBottom: '0.3rem' }}>
          <div style={{ height: '100%', width: `${percent}%`, background: '#43aa8b', transition: 'width 0.4s', borderRadius: '10px' }} />
        </div>
        <div style={{ textAlign: 'center', fontSize: '0.98rem', color: '#0077b6' }}>
          🏏 Day {matchProgress.day}, {matchProgress.session} Session
        </div>
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '2.5rem' }}>Test Cricket Quiz: Server-Side Concepts</h2>
      {/* Scoreboard */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', margin: '1.5rem 0' }}>
        <div style={{ background: '#fffbe6', borderRadius: '8px', padding: '0.7rem 1.5rem', fontSize: '1.15rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <span role="img" aria-label="scoreboard">🏏</span> Scoreboard: <b>{runs}/{wickets}</b> <span style={{ color: '#888', fontSize: '0.98rem' }}>(Runs/Wickets)</span>
        </div>
        <div style={{ background: '#e0f7fa', borderRadius: '8px', padding: '0.7rem 1.5rem', fontSize: '1.1rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <span role="img" aria-label="overs">🕒</span> Overs: <b>{overs}</b>
        </div>
      </div>
      <div style={{ maxWidth: '700px', margin: '1.5rem auto 2rem auto' }}>
        <div style={{
          height: '18px',
          width: '100%',
          background: '#e0e0e0',
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '0.5rem',
        }}>
          <div style={{
            height: '100%',
            width: `${percent}%`,
            background: percent === 100 ? '#43aa8b' : '#0077b6',
            transition: 'width 0.4s',
            borderRadius: '10px',
          }} />
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.95rem', color: '#0077b6' }}>{percent}% answered</div>
      </div>
      <form style={{ maxWidth: '700px', margin: '2rem auto' }} onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
        {questions.map((q, qIdx) => (
          <div key={qIdx} style={{ marginBottom: '2rem', padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <p style={{ fontWeight: 'bold' }}>{qIdx + 1}. {q.question}</p>
            {q.options.map((opt, oIdx) => (
              <label key={oIdx} style={{ display: 'block', margin: '0.5rem 0', cursor: showScore ? 'default' : 'pointer' }}>
                <input
                  type="radio"
                  name={`q${qIdx}`}
                  value={oIdx}
                  checked={selected[qIdx] === oIdx}
                  onChange={() => handleOption(qIdx, oIdx)}
                  disabled={showScore}
                  style={{ marginRight: '0.5rem' }}
                />
                {opt}
                {showScore && selected[qIdx] === oIdx && (
                  oIdx === q.answer ? (
                    <span style={{ color: 'green', marginLeft: '0.5rem' }}>✔ Correct</span>
                  ) : (
                    <span style={{ color: 'red', marginLeft: '0.5rem' }}>✘</span>
                  )
                )}
              </label>
            ))}
            {showScore && selected[qIdx] !== null && selected[qIdx] !== q.answer && (
              <div style={{ color: 'green', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Correct answer: {q.options[q.answer]}
              </div>
            )}
          </div>
        ))}
        {!showScore && (
          <button type="submit" style={{ padding: '0.7rem 2rem', fontSize: '1rem', borderRadius: '6px', background: '#0077b6', color: 'white', border: 'none', cursor: 'pointer' }}>
            Submit
          </button>
        )}
        {showScore && (
          <div style={{ textAlign: 'center', fontSize: '1.2rem', marginTop: '1rem' }}>
            <span role="img" aria-label="trophy">🏆</span> Your score: <b>{score} / {questions.length}</b>
          </div>
        )}
      </form>
    </section>
  );
}

export default Quiz; 
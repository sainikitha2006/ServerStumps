import React, { useState } from 'react';

function LiveDemo() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [batsman, setBatsman] = useState('Batsman');
  const [nonStriker, setNonStriker] = useState('Non-striker');
  const [batsmanInput, setBatsmanInput] = useState('Batsman');
  const [nonStrikerInput, setNonStrikerInput] = useState('Non-striker');
  const [serverDoc, setServerDoc] = useState('');
  const [commentary, setCommentary] = useState('Waiting for the first ball...');
  const [matchLog, setMatchLog] = useState([]);
  const [showNewBatsmanInput, setShowNewBatsmanInput] = useState(false);
  const [newBatsmanName, setNewBatsmanName] = useState('');
  const [animation, setAnimation] = useState('');

  const addToLog = (msg) => {
    setMatchLog((prev) => [...prev, msg]);
  };

  const handleAction = (action) => {
    if (wickets >= 10) return; // Prevent further actions after all out
    let newRuns = runs;
    let newWickets = wickets;
    let newBalls = balls + 1;
    let newCommentary = '';
    let newDoc = serverDoc;
    let logMsg = '';
    let anim = '';
    switch (action) {
      case 'single':
        newRuns += 1;
        newCommentary = `🏏 ${batsman} takes a quick single!`;
        newDoc = `${batsman} scored a single. Total: ${newRuns}/${newWickets}`;
        logMsg = newCommentary;
        const temp = batsman;
        setBatsman(nonStriker);
        setNonStriker(temp);
        break;
      case 'four':
        newRuns += 4;
        newCommentary = `🏏 ${batsman} drives through the covers for FOUR!`;
        newDoc = `${batsman} hit a four. Total: ${newRuns}/${newWickets}`;
        logMsg = newCommentary;
        anim = 'four';
        break;
      case 'six':
        newRuns += 6;
        newCommentary = `🏏 ${batsman} launches it for a SIX!`;
        newDoc = `${batsman} hit a six. Total: ${newRuns}/${newWickets}`;
        logMsg = newCommentary;
        anim = 'six';
        break;
      case 'defend':
        newCommentary = `🏏 ${batsman} defends solidly. No run.`;
        newDoc = `${batsman} defended. Total: ${newRuns}/${newWickets}`;
        logMsg = newCommentary;
        break;
      case 'leave':
        newCommentary = `🏏 ${batsman} leaves the ball. No run.`;
        newDoc = `${batsman} left the ball. Total: ${newRuns}/${newWickets}`;
        logMsg = newCommentary;
        break;
      case 'wicket':
        newWickets += 1;
        if (newWickets >= 10) {
          newCommentary = `🏁 All Out! Final Score: ${newRuns}/10 in ${Math.floor(newBalls / 6)}.${newBalls % 6} overs.`;
          newDoc = `All Out! Final Score: ${newRuns}/10 in ${Math.floor(newBalls / 6)}.${newBalls % 6} overs.`;
          logMsg = '🏁 All Out!';
          anim = 'wicket';
        } else {
          newCommentary = `❌ Wicket! ${batsman} is out!`;
          newDoc = `${batsman} is out! Total: ${newRuns}/${newWickets}`;
          logMsg = newCommentary;
          anim = 'wicket';
          setShowNewBatsmanInput(true);
        }
        break;
      default:
        break;
    }
    setRuns(newRuns);
    setWickets(newWickets);
    setBalls(newBalls);
    setServerDoc(newDoc);
    setCommentary(newCommentary);
    if (logMsg) addToLog(logMsg);
    if (anim) {
      setAnimation(anim);
      setTimeout(() => setAnimation(''), 1200);
    }
  };

  const handleNewBatsmanSubmit = (e) => {
    e.preventDefault();
    if (newBatsmanName.trim()) {
      setBatsman(newBatsmanName.trim());
      setBatsmanInput(newBatsmanName.trim());
      setNewBatsmanName('');
      setShowNewBatsmanInput(false);
    }
  };

  const handleReset = () => {
    setRuns(0);
    setWickets(0);
    setBalls(0);
    setBatsman('Batsman');
    setNonStriker('Non-striker');
    setBatsmanInput('Batsman');
    setNonStrikerInput('Non-striker');
    setServerDoc('');
    setCommentary('Waiting for the first ball...');
    setMatchLog([]);
    setShowNewBatsmanInput(false);
    setNewBatsmanName('');
    setAnimation('');
  };

  const overs = `${Math.floor(balls / 6)}.${balls % 6}`;
  const nameInputsDisabled = balls > 0;

  const handleBatsmanInput = (e) => {
    setBatsmanInput(e.target.value);
    setBatsman(e.target.value);
  };
  const handleNonStrikerInput = (e) => {
    setNonStrikerInput(e.target.value);
    setNonStriker(e.target.value);
  };

  const renderAnimation = () => {
    if (animation === 'four') {
      return <div style={animStyle}>🎉 4️⃣ 🎉</div>;
    }
    if (animation === 'six') {
      return <div style={animStyle}>🎊 6️⃣ 🎊</div>;
    }
    if (animation === 'wicket') {
      return <div style={animStyle}>💥 WICKET! 💥</div>;
    }
    return null;
  };
  const animStyle = {
    position: 'fixed',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '3rem',
    zIndex: 1000,
    pointerEvents: 'none',
    animation: 'pop 1.2s',
    textShadow: '2px 2px 8px #fff, 0 0 12px #f9c846',
  };

  return (
    <section id="live-demo" style={{ padding: '2rem', background: '#f6faff', borderRadius: '12px', margin: '2rem 0', position: 'relative' }}>
      {renderAnimation()}
      <h2 style={{ textAlign: 'center' }}>Live Demo: Real-Time Cricket Collaboration</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '1.2rem 0' }}>
        <div>
          <label style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>🏏 Batsman:</label>
          <input
            type="text"
            value={batsmanInput}
            onChange={handleBatsmanInput}
            disabled={nameInputsDisabled}
            style={{ padding: '0.4rem 0.8rem', borderRadius: '6px', border: '1px solid #bbb', fontSize: '1rem' }}
          />
        </div>
        <div>
          <label style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>🏏 Non-striker:</label>
          <input
            type="text"
            value={nonStrikerInput}
            onChange={handleNonStrikerInput}
            disabled={nameInputsDisabled}
            style={{ padding: '0.4rem 0.8rem', borderRadius: '6px', border: '1px solid #bbb', fontSize: '1rem' }}
          />
        </div>
        <button onClick={handleReset} style={{ marginLeft: '2rem', padding: '0.5rem 1.2rem', borderRadius: '8px', border: 'none', background: '#e63946', color: 'white', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', height: '2.5rem' }}>🔄 Reset Match</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', margin: '1.5rem 0' }}>
        <div style={{ background: '#fffbe6', borderRadius: '8px', padding: '0.7rem 1.5rem', fontSize: '1.15rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <span role="img" aria-label="scoreboard">🏏</span> Scoreboard: <b>{runs}/{wickets}</b> <span style={{ color: '#888', fontSize: '0.98rem' }}>(Runs/Wickets)</span>
        </div>
        <div style={{ background: '#e0f7fa', borderRadius: '8px', padding: '0.7rem 1.5rem', fontSize: '1.1rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <span role="img" aria-label="overs">🕒</span> Overs: <b>{overs}</b>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', margin: '2rem 0' }}>
        <button onClick={() => handleAction('single')} disabled={wickets >= 10} style={{ padding: '0.7rem 1.2rem', borderRadius: '8px', border: 'none', background: '#43aa8b', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', cursor: wickets >= 10 ? 'not-allowed' : 'pointer' }}>1️⃣ Single</button>
        <button onClick={() => handleAction('four')} disabled={wickets >= 10} style={{ padding: '0.7rem 1.2rem', borderRadius: '8px', border: 'none', background: '#f9c846', color: '#222', fontWeight: 'bold', fontSize: '1.1rem', cursor: wickets >= 10 ? 'not-allowed' : 'pointer' }}>4️⃣ Four</button>
        <button onClick={() => handleAction('six')} disabled={wickets >= 10} style={{ padding: '0.7rem 1.2rem', borderRadius: '8px', border: 'none', background: '#e63946', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', cursor: wickets >= 10 ? 'not-allowed' : 'pointer' }}>6️⃣ Six</button>
        <button onClick={() => handleAction('defend')} disabled={wickets >= 10} style={{ padding: '0.7rem 1.2rem', borderRadius: '8px', border: 'none', background: '#0077b6', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', cursor: wickets >= 10 ? 'not-allowed' : 'pointer' }}>🛡️ Defend</button>
        <button onClick={() => handleAction('leave')} disabled={wickets >= 10} style={{ padding: '0.7rem 1.2rem', borderRadius: '8px', border: 'none', background: '#adb5bd', color: '#222', fontWeight: 'bold', fontSize: '1.1rem', cursor: wickets >= 10 ? 'not-allowed' : 'pointer' }}>🚶 Leave</button>
        <button onClick={() => handleAction('wicket')} disabled={wickets >= 10} style={{ padding: '0.7rem 1.2rem', borderRadius: '8px', border: 'none', background: '#22223b', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', cursor: wickets >= 10 ? 'not-allowed' : 'pointer' }}>❌ Wicket</button>
      </div>
      {showNewBatsmanInput && wickets < 10 && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.25)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <form onSubmit={handleNewBatsmanSubmit} style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.18)', minWidth: '320px', textAlign: 'center' }}>
            <h3>New Batsman In!</h3>
            <input
              type="text"
              value={newBatsmanName}
              onChange={e => setNewBatsmanName(e.target.value)}
              placeholder="Enter new batsman's name"
              style={{ padding: '0.6rem 1rem', borderRadius: '6px', border: '1px solid #bbb', fontSize: '1.1rem', marginBottom: '1rem', width: '80%' }}
              autoFocus
              required
            />
            <br />
            <button type="submit" style={{ padding: '0.5rem 1.2rem', borderRadius: '8px', border: 'none', background: '#43aa8b', color: 'white', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginTop: '1rem' }}>Confirm</button>
          </form>
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', flexWrap: 'wrap', marginTop: '2rem' }}>
        <div style={{ flex: '1 1 200px', margin: '1rem' }}>
          <h4 style={{ background: batsman === batsmanInput ? '#d1fae5' : 'none', borderRadius: '6px', padding: '0.3rem 0.7rem', boxShadow: batsman === batsmanInput ? '0 0 8px #43aa8b55' : 'none' }}>🏏 <span style={{ fontWeight: batsman === batsmanInput ? 'bold' : 'normal' }}>{batsman}</span> {batsman === batsmanInput && <span style={{ color: '#43aa8b' }}>(Striker)</span>}</h4>
        </div>
        <div style={{ flex: '1 1 200px', margin: '1rem' }}>
          <h4>📝 Scorekeeper (Server)</h4>
          <div style={{ background: '#e3f2fd', padding: '1rem', borderRadius: '8px', minHeight: '2.5rem', fontFamily: 'monospace', fontSize: '1.1rem' }}>
            {serverDoc || <span style={{ color: '#aaa' }}>[waiting for input]</span>}
          </div>
        </div>
        <div style={{ flex: '1 1 200px', margin: '1rem' }}>
          <h4 style={{ background: nonStriker === batsman ? '#d1fae5' : 'none', borderRadius: '6px', padding: '0.3rem 0.7rem', boxShadow: nonStriker === batsman ? '0 0 8px #43aa8b55' : 'none' }}>🏏 <span style={{ fontWeight: nonStriker === batsman ? 'bold' : 'normal' }}>{nonStriker}</span> {nonStriker === batsman && <span style={{ color: '#43aa8b' }}>(Striker)</span>}</h4>
        </div>
      </div>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h4>📄 Shared Match Log</h4>
        <div style={{ background: '#fffde7', padding: '1rem 2rem', borderRadius: '8px', minHeight: '2.5rem', display: 'inline-block', fontFamily: 'monospace', fontSize: '1.2rem', maxHeight: '180px', overflowY: 'auto', textAlign: 'left' }}>
          {matchLog.length === 0 ? (
            <span style={{ color: '#aaa' }}>[waiting for input]</span>
          ) : (
            <ol style={{ margin: 0, paddingLeft: '1.2rem' }}>
              {matchLog.map((msg, idx) => (
                <li key={idx} style={{ marginBottom: '0.3rem' }}>{msg}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
      <div style={{ marginTop: '1.5rem', textAlign: 'center', fontStyle: 'italic', color: '#388e3c', fontSize: '1.08rem' }}>
        <span role="img" aria-label="commentary">🎙️</span> {commentary}
      </div>
    </section>
  );
}

export default LiveDemo; 
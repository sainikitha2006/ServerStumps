import React from 'react';
import Header from './Header';
import ThemeSwitcher from './ThemeSwitcher';
import FunFact from './FunFact';
import IntroSection from './IntroSection';
import KeyConceptsSection from './KeyConceptsSection';
import LiveDemo from './LiveDemo';
import ExampleSection from './ExampleSection';
import Quiz from './Quiz';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <ThemeSwitcher />
      <Header />
      <FunFact />
      <IntroSection />
      <KeyConceptsSection />
      <LiveDemo />
      <ExampleSection />
      <Quiz />
      <Footer />
    </div>
  );
}

export default App;

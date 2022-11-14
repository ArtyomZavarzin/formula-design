import './App.css';
import React from 'react';

import { Header } from './components/Header';
import { AnimatedBlock } from './components/AnimatedBlock';
import { ContentBlock } from './components/ContentBlock';

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  return (
    <div className='App'>
      <Header />
      <AnimatedBlock />
      <ContentBlock />
    </div>
  );
}

export default App;

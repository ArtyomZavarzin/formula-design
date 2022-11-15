import './App.css';
import React from 'react';

import { Header } from './components/Header';
import { AnimatedBlock } from './components/AnimatedBlock';
import { ContentBlock } from './components/ContentBlock';

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <AnimatedBlock />
      <ContentBlock />
    </div>
  );
}

export default App;

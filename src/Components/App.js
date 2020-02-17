import React from 'react';
import './App.css';

import Title from './Title/Title'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 className="displasdy-4">Hello React</h2>
        <Title name="Rubel Hasan" email="test1@gmail.com"/>
        <Title name="Props Value" email="test2@gmail.com"/>
      </div>
    </div>
  );
}

export default App;


import React from 'react';
import './App.css';
import Functional from './Functional';
import Classfun from './Classfun';

function App() {
  return (
    <>
    <h1 className='h1'>Styiling using Functional and Class Component</h1>
    <div className='mainbox'>
      <Functional/>
      <Classfun/>
    </div>
    </>
  );
}

export default App;

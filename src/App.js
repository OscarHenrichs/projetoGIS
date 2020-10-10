import React from 'react';
import { TransactionList } from './components/TransactionList';
import { AddTransaction  } from './components/AddTransaction';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <header></header>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;

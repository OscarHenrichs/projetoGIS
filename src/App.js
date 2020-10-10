import React from 'react';
import { TransactionList } from './components/TransactionList';
import { AddTransactionCompany  } from './components/AddTransactionCompany';
import { AddTransactionUser  } from './components/AddTransactionCompany';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <header></header>
        <TransactionList/>
        <AddTransactionCompany/>
      </div>
    </div>
  );
}

export default App;

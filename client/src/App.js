import React from 'react';
import { TransactionList } from './components/TransactionList';
import { AddTransactionCompany  } from './components/AddTransactionCompany';
import { AddTransactionUser  } from './components/AddTransactionCompany';

import { GlobalContext, GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
    <div>
      <div className="container">
        <header></header>
        <TransactionList/>
        <AddTransactionCompany/>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;

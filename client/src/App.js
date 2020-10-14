import React from 'react';
import { TransactionUsersList } from './components/TransactionUsersList';
import { AddTransactionCompany  } from './components/AddTransactionCompany';
import { AddTransactionUser  } from './components/AddTransactionCompany';
import { UserForm } from './components/UserForm';

import { GlobalContext, GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {


  return (
    <GlobalProvider>
    <div>
      <div className="container">
        <header></header>
        <TransactionUsersList/>
        <UserForm/>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;

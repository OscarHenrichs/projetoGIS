import React from 'react'
//import { GlobalContext } from '../context/GlobalState';

export const TransactionUsers = ({ transactionsUser }) => {
    return (
            <li className="user">
            <span>Nome: {transactionsUser.nome} | Email: {transactionsUser.email}</span>
            </li>
    )
}
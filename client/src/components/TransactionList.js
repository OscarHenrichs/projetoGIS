import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const TransactionList = () => {
    const { transactionsUser } = useContext(GlobalContext);
    return (
        <>
            <h3>Lista de Usuários</h3>
            <ul id="list" className="list">
                {transactionsUser.map(transactionsUser => (<li className="user">
                    <span>Nome: {transactionsUser.nome} | Email: {transactionsUser.email}</span>
                </li>))}
            </ul>
        </>
    )
}

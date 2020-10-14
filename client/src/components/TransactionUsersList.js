import React, { useContext, useEffect} from 'react';
import { TransactionUsers } from './TransactionUsers';
import { GlobalContext } from '../context/GlobalState';


export const TransactionUsersList = () => {
    const { transactionsUser, getTransactionsUsers } = useContext(GlobalContext);

    useEffect(() => {
        getTransactionsUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(transactionsUser);
    return (
        <>
            <h3>Lista de Usuários</h3>
            <ul id="list" className="list">
                {transactionsUser.map(transactionsUser => (<TransactionUsers key={transactionsUser.id} transactionsUser={transactionsUser}/>))}
            </ul>
        </>
    )
}

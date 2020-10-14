import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddTransactionUser = () => {
    const { transaction } = useContext(GlobalContext);
    const { step } = transaction;

    
    return (
        <div>
            <h3>Adicionar novo usuário</h3>
            <form onSubmit={""}>
                <div className="form-control">
                <label htmlFor="text">Nome</label>
                <input type="text" value={""} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Sobrenome:</label>
                <input type="text" value={""} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Telefone</label>
                <input type="text" value={""} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">E-mail</label>
                <input type="text" value={""}  placeholder="Enter text..." />
                </div>
                <button className="btn">Salvar</button>
            </form>
        </div>
    )
}

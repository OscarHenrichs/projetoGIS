import React, {useState, useContext } from 'react';


export const AddTransactionCompany = () => {

    return (
        <div>
            <h3>Adicionar nova empresa</h3>
            <form onSubmit={""}>
                <div className="form-control">
                <label htmlFor="text">Nome Fantasia</label>
                <input type="text" value={""} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Razão Social</label>
                <input type="text" value={""} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">CNPJ</label>
                <input type="text" value={""} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">CEP</label>
                <input type="text" value={""}  placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Endereço</label>
                <input type="text" value={""}  placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Numero</label>
                <input type="text" value={""}  placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Complemento</label>
                <input type="text" value={""} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Bairro</label>
                <input type="text" value={""}  placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Cidade</label>
                <input type="text" value={""}  placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">PR</label>
                <input type="text" value={""}  placeholder="Enter text..." />
                </div>
                <button className="btn">Salvar</button>
            </form>
        </div>
    )
}

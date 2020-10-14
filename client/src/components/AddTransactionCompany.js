import React, {useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { UserForm } from './UserForm'


export const AddTransactionCompany = ({
    nome_fantasia, setNome_fantasia, 
    razao_social, setRazao_social, 
    cnpj, setCnpj,
    cep, setCep,
    endereco, setEndereco,
    numero, setNumero,
    complemento, setComplemento,
    bairro, setBairro,
    cidade, setCidade,
    uf, setUf 
    }) => {
  
    return (
        <div>
            <h3>Adicionar nova empresa</h3>
            <form>
                <div className="form-control">
                <label htmlFor="text">Nome Fantasia</label>
                <input type="text" value={nome_fantasia} onChange={(e) => setNome_fantasia(e.target.value)} placeholder="Digite seu Nome..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Razão Social</label>
                <input type="text" value={razao_social} onChange={(e) => setRazao_social(e.target.value)} placeholder="Digite seu Sobrenome..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">CNPJ</label>
                <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} placeholder="Digite seu CNPJ..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">CEP</label>
                <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} placeholder="Digite seu Cep..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Endereço</label>
                <input type="text" value={endereco}  onChange={(e) => setEndereco(e.target.value)} placeholder="Digite seu Endereço..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Numero</label>
                <input type="text" value={numero}  onChange={(e) => setNumero(e.target.value)} placeholder="Digite seu numero..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Complemento</label>
                <input type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)} placeholder="Digite seu complemento..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Bairro</label>
                <input type="text" value={bairro}  onChange={(e) => setBairro(e.target.value)} placeholder="Digite seu Bairro..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Cidade</label>
                <input type="text" value={cidade}  onChange={(e) => setCidade(e.target.value)} placeholder="Digite sua cidade..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Estado</label>
                <input type="text" value={uf}  onChange={(e) => setUf(e.target.value)} placeholder="Digite seu Estado..." />
                </div>
            </form>
        </div>
    )
}

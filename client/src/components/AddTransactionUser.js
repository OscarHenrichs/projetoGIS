import React from 'react';



export const AddTransactionUser = (
    {
        nome, setNome,
        sobrenome, setSobrenome,
        telefone, setTelefone,
        email, setEmail
    }) => {

    return (
        <div>
            <h3>Adicionar novo usuário</h3>
            <form>
                <div className="form-control">
                <label htmlFor="text">Nome</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Sobrenome:</label>
                <input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">Telefone</label>
                <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="text">E-mail</label>
                <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter text..." />
                </div>
            </form>
        </div>
    )
}

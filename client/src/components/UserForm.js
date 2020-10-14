import React, { useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { AddTransactionCompany } from './AddTransactionCompany';
import { AddTransactionUser  } from './AddTransactionUser';

export const UserForm = () => {

    //step
    const [ step, setStep ] = useState(0);

    //usuário
    const [ cliente_id, setCliente_id ] = useState('');
    const [ nome, setNome ] = useState('');
    const [ sobrenome, setSobrenome ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ email, setEmail ] = useState('');
    //cliente
    const [ nome_fantasia, setNome_fantasia ] = useState('');
    const [ razao_social, setRazao_social ] = useState('');
    const [ cnpj, setCnpj ] = useState('');
    const [ cep, setCep ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ complemento, setComplemento ] = useState('');
    const [ bairro, setBairro ] = useState('');
    const [ cidade, setCidade ] = useState('');
    const [ uf, setUf ] = useState('');

    const {addTransactionsCliente, addTransactionsUsers} = useContext(GlobalContext);
    
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction1 = {       
            nome_fantasia,
            razao_social,
            cnpj,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            uf
        }
        const { client } = addTransactionsCliente(newTransaction1);
        console.log(client)
        setCliente_id()
        // const newTransaction2 = {
        //     cliente_id,
        //     nome,
        //     sobrenome,
        //     telefone,
        //     email,
        // }
        // addTransactionsUsers(newTransaction2);
        // setStep(0);
    }

    // //Handle changes
    // const handleChange = input => e => {
    //     transaction.setState({[input]: e.target.value})
    // }

    switch (step) {
        case 0:
            return (
            <>
                <button className="btn" onClick={() => setStep(1)}>Cadastrar novo usuário</button>
            </>
        )
        case 1:
            return (
            <>
                <AddTransactionCompany 
                    nome_fantasia={nome_fantasia}
                        setNome_fantasia={setNome_fantasia}
                    razao_social={razao_social}
                        setRazao_social={setRazao_social}
                    cnpj={cnpj}
                        setCnpj={setCnpj}
                    cep={cep}
                        setCep={setCep}
                    endereco={endereco}
                        setEndereco={setEndereco}
                    numero={numero}
                        setNumero={setNumero}
                    complemento={complemento}
                        setComplemento={setComplemento}
                    bairro={bairro}
                        setBairro={setBairro}
                    cidade={cidade}
                        setCidade={setCidade}
                    uf={uf}
                        setUf={setUf}
                    />
                <button className="btn" onClick={() => setStep(2)}>Prosseguir</button>
                <button className="btn" onClick={() => setStep(0)}>Voltar</button>
            </>
        )
        case 2:
            return (
            <>
                <AddTransactionUser 
                    setCliente_id={setCliente_id}
                    nome={nome}
                    setNome={setNome}
                    sobrenome={sobrenome}
                    setSobrenome={setSobrenome}
                    telefone={telefone}
                    setTelefone={setTelefone}
                    email={email}
                    setEmail={setEmail}
                    />
                <button className="btn" onClick={onSubmit}>Salvar</button>
                <button className="btn" onClick={() => setStep(1)}>Voltar</button>
            </>
        )
        default:
            return (
            <>

            </>
        )

    }
}

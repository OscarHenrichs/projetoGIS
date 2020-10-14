import React, { useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const UserForm = () => {

    const { transaction } = useContext(GlobalContext);
    const { step } = transaction;
    const {
            cliente_id ,
            nome , 
            sobrenome , 
            telefone , 
            email,
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
            }   = transaction;
    console.log(`valor step:${ { step } }`);
    const nextStep = () => {
        transaction.setState({
            step: step + 1
        })
    }

    const prevStep = () => {
        transaction.setState({
            step: step - 1
        })
    }

    //Handle changes
    const handleChange = input => e => {
        transaction.setState({[input]: e.target.value})
    }

    switch ({ step }) {
        case 1:
            return (
            <>

            </>
        )

    }
    
    
}

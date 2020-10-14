import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios' ;

const initalState = {
    transactionsCompany: [],
    transactionsCompanyLast: [],
    transactionsUser: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initalState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(AppReducer, initalState)

    //Actions
    async function getTransactionsUsers() {
        try {
            const res = await axios.get('/users');
            dispatch({
                type: 'GET_USERS',
                payload: res.data.user               
            })
            
        } catch (error) {
            dispatch({
                type: 'GET_USERS_ERROR',
                payload: error.res.data.error
            })
        }
    }

    async function addTransactionsUsers(user) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/users', user, config);

            dispatch({
                type: 'POST_USERS',
                payload: res.data.user               
            })
            
        } catch (error) {
            dispatch({
                type: 'POST_USERS_ERROR',
                payload: error.res
            })
        }
    }


    //Clientes
    async function getTransactionsClientes() {
        try {
            const res = await axios.get('/clientes');
            dispatch({
                type: 'GET_CLIENTES',
                payload: res.data.cliente              
            })
            
        } catch (error) {
            dispatch({
                type: 'GET_CLIENTES_ERROR',
                payload: error.res.data.error
            })
        }
    }

    async function getTransactionsClientesLast() {
        try {
            const res = await axios.get('/clientesLast');
            dispatch({
                type: 'GET_CLIENTES_LAST',
                payload: res.data.cliente              
            })
            
        } catch (error) {
            dispatch({
                type: 'GET_CLIENTES_LAST_ERROR',
                payload: error.res.data.error
            })
        }
    }


    async function addTransactionsCliente(cliente) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/clientes', cliente, config);

            dispatch({
                type: 'POST_CLIENTES',
                payload: res.data.cliente               
            })
            
        } catch (error) {
            dispatch({
                type: 'POST_CLIENTES_ERROR',
                payload: error.res.data.error
            })
        }
    }


    //Global Provider
    return (<GlobalContext.Provider value={{
        transactionsCompany: state.transactionsCompany,
        transactionsUser: state.transactionsUser,
        error: state.error,
        loading: state.loading,
        getTransactionsUsers,
        addTransactionsUsers,
        getTransactionsClientes,
        getTransactionsClientesLast,
        addTransactionsCliente
        
    }}>
        {children}
    </GlobalContext.Provider>);
}



// const initalState = {
//     transactionsCompany: [
//         {   id: 1, nomefantasia: 'Fulano1 inc',
//             razaosocial: 'Fulano2 inc Ltda',
//             cnpj: '10229146000167',
//             cep: "87047-711",
//             endereco: "Rua 36.596",
//             numero: '222',
//             complemento: "n/d",
//             Bairro: "Bom Jardim",
//             Cidade: 'Maringa',
//             Estado: 'PR'
//         },
//         {   id: 2, nomefantasia: 'Fulano1 inc',
//             razaosocial: 'Fulano2 inc Ltda',
//             cnpj: '10229146000167',
//             cep: "79906-158",
//             endereco: "Rua 36.596",
//             numero: '222',
//             complemento: "n/d",
//             Bairro: "Bom Jardim",
//             Cidade: 'Maringa',
//             Estado: 'PR'
//         },
//         {   id: 3, nomefantasia: 'Fulano3 inc',
//             razaosocial: 'Fulano3 inc Ltda',
//             cnpj: '10229146000167',
//             cep: "87047-711",
//             endereco: "Rua 36.596",
//             numero: '222',
//             complemento: "n/d",
//             Bairro: "Bom Jardim",
//             Cidade: 'Maringa',
//             Estado: 'PR'
//         }
//     ],
//     transactionsUser: [
//         {   id: 1, 
//             cliente_id: '1',
//             nome: 'Daniel',
//             sobrenome: 'Benjamin Jesus',
//             telefone: "9227310119",
//             email: "danielbenjaminjesus_@agsolve.com.br",
//         },
//         {   id: 2, 
//             cliente_id: '2',
//             nome: 'Allana',
//             sobrenome: 'Giovanna Lopes',
//             telefone: "6737458440",
//             email: "allanagiovannalopes_@emitec.com.br",
//         }
//     ]

// }
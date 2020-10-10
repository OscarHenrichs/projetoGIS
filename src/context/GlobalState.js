import React, { createContext, useReducer } from 'react'



const initalState = {
    transactionsCompany: [
        {   id: 1, nomefantasia: 'Fulano1 inc',
            razaosocial: 'Fulano2 inc Ltda',
            cnpj: '10229146000167',
            cep: "87047-711",
            endereco: "Rua 36.596",
            numero: '222',
            complemento: "n/d",
            Bairro: "Bom Jardim",
            Cidade: 'Maringa',
            Estado: 'PR'
        },
        {   id: 2, nomefantasia: 'Fulano1 inc',
            razaosocial: 'Fulano2 inc Ltda',
            cnpj: '10229146000167',
            cep: "79906-158",
            endereco: "Rua 36.596",
            numero: '222',
            complemento: "n/d",
            Bairro: "Bom Jardim",
            Cidade: 'Maringa',
            Estado: 'PR'
        },
        {   id: 3, nomefantasia: 'Fulano3 inc',
            razaosocial: 'Fulano3 inc Ltda',
            cnpj: '10229146000167',
            cep: "87047-711",
            endereco: "Rua 36.596",
            numero: '222',
            complemento: "n/d",
            Bairro: "Bom Jardim",
            Cidade: 'Maringa',
            Estado: 'PR'
        }
    ],
    transactionsUser: [
        {   id: 1, 
            cliente_id: '1',
            nome: 'Daniel',
            sobrenome: 'Benjamin Jesus',
            telefone: "9227310119",
            email: "danielbenjaminjesus_@agsolve.com.br",
        },
        {   id: 2, 
            cliente_id: '2',
            nome: 'Allana',
            sobrenome: 'Giovanna Lopes',
            telefone: "6737458440",
            email: "allanagiovannalopes_@emitec.com.br",
        }
    ]

}

export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(AppReducer, initalState)

    return (<GlobalContext.Provider value={{
        transactionsCompany: state.transactionsCompany,
        transactionsUser: state.transactionsUser
    }}>
        {children}
    </GlobalContext.Provider>);
}
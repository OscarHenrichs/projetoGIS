const { afterUpdate } = require('../models/clientesModel');
const Cliente = require('../models/clientesModel');


module.exports = {
    async index(req, res) {
        const cliente = await Cliente.findAll();

        try {
            if ( cliente == "" || cliente == null ) {
                return res.status(200).send({ message: "Nenhum cliente cadastrado"});
            }

            return res.status(200).send({ cliente });

        } catch (error) {

            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Server Error' 
                });
        }
    },

    async store(req, res) {
        const { 
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
              } = req.body;
        
        if ( nome_fantasia == "" || nome_fantasia == null ) {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta o nome_fantasia' 
                });
        }
        if ( razao_social == "" || razao_social == null ) {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta o razao_social' 
                });
        }
        if ( cnpj == "" || cnpj == null ) {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta o cnpj' 
                });
        }
        if ( (cep == "" || cep == null) )  {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta no o cep' 
                });
        }
        if ( (endereco == "" || endereco == null) )  {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta o endereco' 
                });
        }
        if ( (numero == "" || numero == null) )  {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta o numero' 
                });
        }
        if ( (complemento == "" || complemento == null) )  {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta o complemento' 
                });
        }
        if ( (bairro == "" || bairro == null) )  {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta o bairro' 
                });
        }
        if ( (cidade == "" || cidade == null) )  {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta o cidade' 
                });
        }
        if ( (uf == "" || uf == null) )  {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta o uf' 
                });
        }

        const cliente = await Cliente.create(
            { 
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
            });

        try {
            
            return res.status(200).json(
                { 
                    sucess: true,
                    error: 'Cliente cadastratado com sucesso!',
                    cliente
                });

        } catch (error) {

            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Server Error' 
                });
        }
    },

    async update(req, res) {
        
        const { 
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
          } = req.body;
        const { cliente_id } = req.params;

        const cliente = await Cliente.update(
            { 
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
              }, {
                where: {
                    id: cliente_id
                }
            }
        );
        
        //console.log(JSON.stringify(cliente, null, 4))
        try {

            if ( cliente == "" || cliente == null || cliente == 0 ) {
                return res.status(200).send({ message: "Nenhum usuário para alterar"});
            }
        
            return res.status(200).json(
                { 
                    sucess: true,
                    error: `Cliente ${ cliente_id } alterado com sucesso!`,
                });

        } catch (error) {

            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Server Error' 
                });
        }
    },

    async delete(req, res) {
        
        const { cliente_id } = req.params;

        const cliente = await Cliente.destroy({
            where: {
                id: cliente_id
            }
        });

        try {

            if ( cliente == "" || cliente == null || cliente == 0 ) {
                return res.status(200).send({ message: "Nenhum usuário para excluir"});
            }
        
            return res.status(200).json(
                { 
                    sucess: true,
                    error: `Cliente ${ cliente_id } deletado com sucesso!`,
                });

        } catch (error) {

            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Server Error' 
                });
        }
    },

}
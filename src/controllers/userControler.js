const { afterUpdate } = require('../models/userModel');
const User = require('../models/userModel');


module.exports = {
    async index(req, res) {
        const user = await User.findAll();

        try {
            if ( user == "" || user == null ) {
                return res.status(200).send({ message: "Nenhum usuário cadastrado"});
            }

            return res.status(200).send({ user });

        } catch (error) {

            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Server Error' 
                });
        }
    },

    async indexId(req, res) {

        const { usuario_id, cliente_id} = req.params;
        console.log(req.params);
        let user = {};
        if (( cliente_id != "" & cliente_id != null ) & ( usuario_id != "" & usuario_id != null )) {
            console.log("*****1*****")
            user = await User.findOne(
                {
                    where: {
                            id: usuario_id,
                            cliente_id: cliente_id
                            }
                });
        } else if ( usuario_id != "" & usuario_id != null ) {
            console.log("*****2*****")
            user = await User.findOne(
                {
                    where: {
                            id: usuario_id
                            }
                });
        } else {

            return res.status(200).send({ message: `É necessário pelo meons o parâmetro usuário_id: ${ usuario_id }`});
            
        }
        try {
            if ( user == "" || user == null ) {
                return res.status(200).send({ message: `Nenhum cliente cadastrado com a ${ usuario_id } `});
            }

            return res.status(200).send({ user });

        } catch (error) {

            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Server Error' 
                });
        }
    },

    async store(req, res) {
        const { cliente_id, nome, sobrenome, telefone, email } = req.body;
        
        if ( cliente_id == "" || cliente_id == null ) {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta o cliente_id' 
                });
        }
        if ( nome == "" || nome == null ) {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta o nome' 
                });
        }
        if ( sobrenome == "" || sobrenome == null ) {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta o sobrenome' 
                });
        }
        if ( telefone == "" || telefone == null ) {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Falta o telefone' 
                });
        }
        if ( (email == "" || email == null) )  {
            return res.status(500).json(
                { 
                    sucess: false,
                    error: 'Erro no o email' 
                });
        }

        const user = await User.create({ cliente_id, nome, sobrenome, telefone, email });

        try {
            
            return res.status(200).json(
                { 
                    sucess: true,
                    error: 'Usuário cadastratado com sucesso!',
                    user
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
        
        const { cliente_id, nome, sobrenome, telefone, email } = req.body;
        const { usuario_id } = req.params;

        const user = await User.update(
            { 
                cliente_id,
                nome, 
                sobrenome, 
                telefone, 
                email 
            }, {
                where: {
                    id: usuario_id
                }
            }
        );
        
        //console.log(JSON.stringify(user, null, 4))
        try {

            if ( user == "" || user == null || user == 0 ) {
                return res.status(200).send({ message: "Nenhum usuário para alterar"});
            }
        
            return res.status(200).json(
                { 
                    sucess: true,
                    error: `Usuário ${ usuario_id } alterado com sucesso!`,
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
        
        const { usuario_id } = req.params;

        const user = await User.destroy({
            where: {
                id: usuario_id
            }
        });

        try {

            if ( user == "" || user == null || user == 0 ) {
                return res.status(200).send({ message: "Nenhum usuário para excluir"});
            }
        
            return res.status(200).json(
                { 
                    sucess: true,
                    error: `Usuário ${ usuario_id } deletado com sucesso!`,
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
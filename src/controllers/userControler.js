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

            return res.status(500).send({ user });
        }
    }
}
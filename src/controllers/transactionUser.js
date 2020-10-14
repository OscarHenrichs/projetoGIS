const User = require('../models/User');


module.exports = {
    // @desc Get all users
    // @route GET /api/v1/users
    // @acess Public
    async newUser(req, res, next) {
        // try {
        //     const users = await user.findAll();
        //     if (users == "" || user == null) {
        //         return res.status(200).json({
        //         sucess: true,
        //         message: "Nenhum usuário encontrado"});
        //     }

        //     return res.status(200).send({ users });

        // } catch (error) {
        //     return res.status(500).json({
        //         sucess: false,
        //         message: "Error",
        //         error: error});
        // }
        const { name, email } = req.body;

        const user = await User.create();

    }
};

// @desc POST all users
// @route POST /api/v1/usersNew
// @acess Public
// exports.postUser = async (req, res, next) => {
//     try {
//         const users = await user.findAll();
//         if (users == "" || user == null) {
//             return res.status(200).json({
//             sucess: true,
//             message: "Nenhum usuário encontrado"});
//         }

//         return res.status(200).send({ users });

//     } catch (error) {
//         return res.status(500).json({
//             sucess: false,
//             message: "Error",
//             error: error});
//     }

// }
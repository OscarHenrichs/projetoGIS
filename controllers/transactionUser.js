// @desc Get all users
// @route GET /api/v1/users
// @acess Public
exports.getUsers = (req, res, next) => {
    res.send('GET users');
}
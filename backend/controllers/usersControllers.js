const expressAsyncHandler = require("express-async-handler")

const getUsers = expressAsyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get users'})
})

const createUser = expressAsyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a new user')
    }
    res.status(200).json({message: `Create user with the id of ${res}`})
})

const updateUser = expressAsyncHandler(async (req, res) => {
    res.status(200).json({message: `Update user with the id ${req.params.id}`})
})

const deleteUser = expressAsyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete user with the id ${req.params.id}`})
})

module.exports = { getUsers, createUser, updateUser, deleteUser }
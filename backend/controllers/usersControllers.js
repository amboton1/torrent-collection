const expressAsyncHandler = require("express-async-handler")
const Users = require("../models/userModel")

const getUsers = expressAsyncHandler(async (req, res) => {
    const users = await Users.find();

    res.status(200).json(users)
})

const createUser = expressAsyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a new user')
    }

    const user = Users.create({
        name: req.body.name,
        email: req.body.email
    })
    
    res.status(200).json(user)
})

const updateUser = expressAsyncHandler(async (req, res) => {
    const user = await Users.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }

    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedUser)
})

const deleteUser = expressAsyncHandler(async (req, res) => {
    const user = await Users.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }

    await user.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = { getUsers, createUser, updateUser, deleteUser }
const expressAsyncHandler = require("express-async-handler")
const Users = require("../models/userModel")
const bycriptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const loginUser = expressAsyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await Users.findOne({email})
    const comparedPasswords = user && await bycriptjs.compare(password, user.password)

    if (user && comparedPasswords) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone
        })
    } else {
        res.status(400)
        throw new Error('Wrong credentials or user does not exist.')
    }
})

const registerUser = expressAsyncHandler(async (req, res) => {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all the fields')
    }

    const userExists = await Users.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error('User already exists.')
    }

    const salt = await bycriptjs.genSalt(10)
    const hashedPassword = await bycriptjs.hash(password, salt)

    const user = Users.create({
        name,
        email,
        password: hashedPassword,
        phone
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const getMe = (req, res) => {
    res.json({ message: 'User data' })
}

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

module.exports = { loginUser, registerUser, getMe, updateUser, deleteUser }
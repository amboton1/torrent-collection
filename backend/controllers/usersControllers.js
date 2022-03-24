const expressAsyncHandler = require("express-async-handler")
const Users = require("../models/userModel")
const bycriptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const res = require("express/lib/response")

const getAllUsers = expressAsyncHandler(async (req, res) => {
    Users.find({}, (err, users) => {
        const modifiedUsers = users.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })

        res.send(modifiedUsers)
    })
})

const loginUser = expressAsyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await Users.findOne({email})
    const comparedPasswords = user && await bycriptjs.compare(password, user.password)

    if (user && comparedPasswords) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            token: generateToken(user._id)
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

    const user = await Users.create({
        name,
        email,
        password: hashedPassword,
        phone
    })

    if (user) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const getMe = expressAsyncHandler(async (req, res) => {
    const {_id, name, email, phone} = await Users.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
        phone
    })
})

const updateUser = expressAsyncHandler(async (req, res) => {
    const user = await Users.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (req.params.id !== user.id) {
        res.status(401)
        throw new Error('Unathorized user, cannot update.')
    }

    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedUser)
})

const deleteUser = expressAsyncHandler(async (req, res) => {
    const user = await Users.findByIdAndDelete(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }

    res.status(200).json({ id: req.params.id })
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = { getAllUsers, loginUser, registerUser, getMe, updateUser, deleteUser }
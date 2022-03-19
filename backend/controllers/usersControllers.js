const getUsers = (req, res) => {
    res.status(200).json({message: 'Get users'})
}

const createUser = (req, res) => {
    res.status(200).json({message: 'Create user'})
}

const updateUser = (req, res) => {
    res.status(200).json({message: `Update user with the id ${req.params.id}`})
}

const deleteUser = (req, res) => {
    res.status(200).json({message: `Delete user with the id ${req.params.id}`})
}

module.exports = { getUsers, createUser, updateUser, deleteUser }
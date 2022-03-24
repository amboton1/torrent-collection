const express = require('express');
const { loginUser, registerUser, getMe, updateUser, deleteUser, getAllUsers } = require('../controllers/usersControllers');
const router = express.Router();

router.get('/', getAllUsers)

router.post('/login', loginUser)

router.post('/', registerUser)

router.get('/me', getMe)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router;
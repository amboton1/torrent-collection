import express from 'express';

const { loginUser, registerUser, getMe, updateUser, deleteUser, getAllUsers } = require('../controllers/usersControllers');
const { authorization } = require('../middleware/auth');
const router = express.Router();

router.get('/', getAllUsers)

router.post('/login', loginUser)

router.post('/', registerUser)

router.get('/me', authorization, getMe)

router.put('/:id', authorization, updateUser)

router.delete('/:id', authorization, deleteUser)

module.exports = router;
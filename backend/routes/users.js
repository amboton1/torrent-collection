const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'Get users'})
})

router.post('/', (req, res) => {
    res.status(200).json({message: 'Create user'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update user with the id ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete user with the id ${req.params.id}`})
})

module.exports = router;
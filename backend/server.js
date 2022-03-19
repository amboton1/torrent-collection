const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/users', require('./routes/users'))

app.listen(port, () => console.log(`Server is running on port ${port}`))
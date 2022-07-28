const express = require('express');
const fileUpload = require('express-fileupload');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5001;

const app = express();

connectDB()

app.use(cors({
    origin: '*',
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/users'))

app.use(fileUpload())
app.use('/api/image', require('./routes/images'))

app.listen(port, () => console.log(`Server is running on port ${port}`))
import mongoose from "mongoose";

const dotenv = require("dotenv");

dotenv.config();

const mongoUri = process.env.MONGO_URI as string;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoUri);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
import { Schema, model } from 'mongoose';

interface User {
    name: string,
    email: string,
    password: string,
    phone?: string
}

const userSchema = new Schema<User>({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    phone: {
        type: Number
    }
}, {
    timestamps: true
})

module.exports = model<User>('User', userSchema);
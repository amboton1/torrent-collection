import axios from 'axios';

export const API_URL = 'http://localhost:5000/api/users/';

type UserType = {
    name: string,
    email: string,
    password: string
}

const register = async(userData: UserType) => {
    try {
        const response = await axios.post(API_URL, userData);

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
    } catch (error) {
        throw new Error('There was a problem registering you.')
    }
}

const login = async(userData: UserType) => {
    try {
        const response = await axios.post(API_URL + 'login', userData);

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
    } catch (error) {
        throw new Error('Sorry, we cant find an account with this email address. Please try again or create a new account.');
    }
}

const logout = () => localStorage.removeItem('user')

const authService = {
    register,
    login,
    logout
}

export default authService;
import React from "react";
import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../context/userContext.ts"
import authService from '../features/auth/authService.ts'

type LoginDeatalType = {
  email: string,
  name: string,
  token: string,
  _id: string
}

const Login = () => {
  const { setUser, setLoggedState } = useContext(UserContext)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [fieldError, setFieldError] = useState(false);

  const {email, password} = formData;

  const navigate = useNavigate();

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please complete all the required fields.')
      setFieldError(true)
    } else {
      setFieldError(false)
    }

    authService.login(formData)
      .then((details: LoginDeatalType) => {
        setUser(details);
        setLoggedState(true);
        navigate('/');
      }).catch((err: Record<string, string>) => {
        toast.error(err.message)
      })

    setFormData({ email: '', password: '' })
  }


  return <>
    <section className="flex items-center m-0 mx-auto mb-5 py-0 px-5 font-bold w-2/4 flex-col text-xl">
      <h1 className="flex items-center">
        <FaSignInAlt className="mr-0.5" /> Sign In
      </h1>
    </section>

    <section className="md:w-2/5 sm:w-full lg:w-1/5 m-0 mx-auto">
      <form onSubmit={onSubmit}>
        <div className="mb-2.5 form-group">
          <label className="block text-white-700 text-left text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input type="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="email" id="username" onChange={onChangeHandler} value={email} placeholder="Enter your email" />
        </div>
        <div className="mb-2.5 form-group">
          <label className="block text-white-700 text-left text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input type="password" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="password" id="password" onChange={onChangeHandler} value={password} placeholder="Enter your password" />
          {fieldError && <p className="text-red-500 text-left text-xs italic">Please enter a password.</p>}
        </div>
        <div className="mb-2.5 form-group">
          <button type="submit" className="flex items-center justify-center bg-[#26134b] py-2.5 px-5 font-bold rounded-md mb-5 w-full hover:scale-[0.98]">Login</button>
        </div>
      </form>
    </section>
  </>
}

export default Login
import { useContext, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { UserContext } from "../context/userContext"
import authService from '../features/auth/authService'

const Register = () => {
  const {user, setUser} = useContext(UserContext)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: ''
  });

  const {name, email, password, confirmedPassword} = formData;

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      toast.error('Please complete all the required fields.')
    }
    
    if (password !== confirmedPassword) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password
      }

      authService.register(userData)
        .then(() => {
          toast.success('You have successfully registered!. Go ahead and login.');
          navigate('/login');
        }).catch(err => toast.error(err.message))
    }
  }

  return <>
    <section className="flex items-center m-0 mx-auto mb-5 py-0 px-5 font-bold w-2/4 flex-col text-xl">
      <h1 className="flex items-center mb-2">
        <FaUser className="mr-0.5" /> Register
      </h1>
      <p>Please create an account</p>
    </section>

    <section className="md:w-2/5 sm:w-full lg:w-1/5 m-0 mx-auto">
      <form autoComplete="off" onSubmit={onSubmit}>
        <div className="mb-2.5 form-group">
          <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" id="name" onChange={onChangeHandler} value={name} placeholder="Enter your name" />
        </div>
        <div className="mb-2.5 form-group">
          <input type="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="email" autoComplete="off" id="email" onChange={onChangeHandler} value={email} placeholder="Enter your email" />
        </div>
        <div className="mb-2.5 form-group">
          <input type="password" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="password" autoComplete="off" id="password" onChange={onChangeHandler} value={password} placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <input type="password" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="confirmedPassword" id="confirmedPassword" onChange={onChangeHandler} value={confirmedPassword} placeholder="Confirm your password" />
        </div>
        <div className="form-group">
          <button type="submit" className="mt-2 flex items-center justify-center bg-[#26134b] py-2.5 px-5 font-bold rounded-md mb-5 w-full hover:scale-[0.98]">Submit</button>
        </div>
      </form>
    </section>
  </>
}

export default Register
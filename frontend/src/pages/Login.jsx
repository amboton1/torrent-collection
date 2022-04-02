import { useContext, useEffect, useState } from "react"
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext"
import authService from '../features/auth/authService'

const Login = () => {
  const {user, setUser} = useContext(UserContext)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {email, password} = formData;

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  const onChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setUser(formData);

    authService.login(formData);
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
          <input type="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="email" id="email" onChange={onChangeHandler} value={email} placeholder="Enter your email" />
        </div>
        <div className="mb-2.5 form-group">
          <input type="password" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="password" id="password" onChange={onChangeHandler} value={password} placeholder="Enter your password" />
        </div>
        <div className="mb-2.5 form-group">
          <button type="submit" className="flex items-center justify-center bg-[#26134b] py-2.5 px-5 font-bold rounded-md mb-5 w-full hover:scale-[0.98]">Login</button>
        </div>
      </form>
    </section>
  </>
}

export default Login
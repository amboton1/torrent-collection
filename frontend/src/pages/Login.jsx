import { useState } from "react"
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {email, password} = formData;

  const onChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return <>
    <section className="flex items-center m-0 mx-auto mb-5 py-0 px-5 font-bold w-2/4 flex-col text-xl">
      <h1 className="flex items-center">
        <FaSignInAlt className="mr-0.5" /> Sign In
      </h1>
    </section>

    <section className="md:w-2/5 sm:w-full lg:w-1/5 m-0 mx-auto">
      <form autoComplete="off" onSubmit={onSubmit}>
        <div className="mb-2.5 form-group">
          <input type="email" className="rounded-none border-0 border-b-2 mb-3 border-b-[#35df47] w-full p-2.5 bg-transparent	outline-0" name="email" id="email" onChange={onChangeHandler} value={email} placeholder="Enter your email" />
        </div>
        <div className="mb-2.5 form-group">
          <input type="password" className="rounded-none border-0 border-b-2 mb-3 border-b-[#35df47] w-full p-2.5 bg-transparent outline-0" name="password" id="password" onChange={onChangeHandler} value={password} placeholder="Enter your password" />
        </div>
        <div className="mb-2.5 form-group">
          <button type="submit" className="flex items-center justify-center bg-[#26134b] py-2.5 px-5 font-bold rounded-md mb-5 w-full hover:scale-[0.98]">Login</button>
        </div>
      </form>
    </section>
  </>
}

export default Login
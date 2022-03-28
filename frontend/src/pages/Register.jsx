import { useState } from "react"
import { FaUser } from 'react-icons/fa'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: ''
  });

  const {name, email, password, confirmedPassword} = formData;

  const onChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
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
          <input type="text" className="rounded-none border-0 border-b-2 mb-3 border-b-[#35df47] w-full p-2.5 bg-transparent	outline-0" name="name" id="name" onChange={onChangeHandler} value={name} placeholder="Enter your name" />
        </div>
        <div className="mb-2.5 form-group">
          <input type="email" className="rounded-none border-0 border-b-2 mb-3 border-b-[#35df47] w-full p-2.5 bg-transparent	outline-0" name="email" autoComplete="off" id="email" onChange={onChangeHandler} value={email} placeholder="Enter your email" />
        </div>
        <div className="mb-2.5 form-group">
          <input type="password" className="rounded-none border-0 border-b-2 mb-3 border-b-[#35df47] w-full p-2.5 bg-transparent	outline-0" name="password" autoComplete="off" id="password" onChange={onChangeHandler} value={password} placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <input type="password" className="rounded-none border-0 border-b-2 mb-3 border-b-[#35df47] w-full p-2.5 bg-transparent	outline-0" name="confirmedPassword" id="confirmedPassword" onChange={onChangeHandler} value={confirmedPassword} placeholder="Confirm your password" />
        </div>
        <div className="form-group">
          <button type="submit" className="mt-2 flex items-center justify-center bg-[#26134b] py-2.5 px-5 font-bold rounded-md mb-5 w-full hover:scale-[0.98]">Submit</button>
        </div>
      </form>
    </section>
  </>
}

export default Register
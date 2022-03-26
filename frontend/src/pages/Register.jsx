import { useEffect, useState } from "react"
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
  }

  return <>
    <section className="heading">
      <h1>
        <FaUser /> Register
      </h1>
      <p>Please create an account</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" name="name" id="name" onChange={onChangeHandler} value={name} placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <input type="email" name="email" autoComplete="off" id="email" onChange={onChangeHandler} value={email} placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <input type="password" name="password" autoComplete="off" id="password" onChange={onChangeHandler} value={password} placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <input type="password" name="confirmedPassword" id="confirmedPassword" onChange={onChangeHandler} value={confirmedPassword} placeholder="Confirm your password" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Submit</button>
        </div>
      </form>
    </section>
  </>
}

export default Register
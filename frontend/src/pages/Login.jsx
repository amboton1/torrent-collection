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
    <section className="heading">
      <h1>
        <FaSignInAlt /> Login
      </h1>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="email" name="email" autoComplete="none" id="email" onChange={onChangeHandler} value={email} placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <input type="password" name="password" autoComplete="none" id="password" onChange={onChangeHandler} value={password} placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Submit</button>
        </div>
      </form>
    </section>
  </>
}

export default Login
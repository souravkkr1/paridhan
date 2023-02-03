import React from 'react'
import style from './login.module.css'

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <div className={style.bottom}>
        <form id={style.signin_form} 
        // onSubmit={onSubmit}
        >
          <input
            // onChange={(e) => onChange(e)}
            placeholder="Enter Email"
            type="text"
            name="email"
            required
          />
          <input
            // onChange={(e) => onChange(e)}
            placeholder="Enter Password"
            type="password"
            name="password"
            required
          />
          <input type="submit" value="SIGNIN" id="signin" />
        </form>
      </div>
    </div>
  )
}

export default Login

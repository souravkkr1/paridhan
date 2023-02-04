import React from 'react'
import style from '../login/login.module.css'

const Signup = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <div className={style.bottom}>
        <form id={style.signin_form} 
        // onSubmit={onSubmit}
        >
          <input
            // onChange={(e) => onChange(e)}
            placeholder="Enter Name"
            type="text"
            name="name"
            required
          />
          <input
            // onChange={(e) => onChange(e)}
            placeholder="Enter Phone number"
            type="text"
            name="phone_number"
            required
          />
          <select 
          // onChange={(e) => onChange(e)} 
          name="role">
            <option value="user">customer</option>
            <option value="vendor">vendor</option>
          </select>
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
          <input type="submit" value="SIGNUP" id="signup" />
        </form>
      </div>
    </div>
  )
}

export default Signup

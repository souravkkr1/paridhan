import React,{useState} from 'react'
// import { useEffect } from 'react';
import style from '../login/login.module.css'
// import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { signup } from '../../redux/authReducer/action';
import {useDispatch} from 'react-redux'
import Navbar from '../../components/navbar/Navbar'; 

const Signup = () => {

  const navigate= useNavigate();

  // const initState = {
  //   name: "",
  //   email:"",
  //   pass:"",
  //   mobile: ""
  // };

  const initForm = {
    name: "",
    email:"",
    pass:"",
    mobile: ""
  };
  

    const dispatch = useDispatch();
    const [user, setUser] = useState(initForm);
    const data = (e) => {
      const { name, value } = e.target;
      setUser((prev) => {
        return { ...prev, [name]: value };
      });
    };
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(signup(user));
      navigate("/login")
    };


  // const [user, setUser]= useState(initState);

  // const data = (e) => {
  //   const { name, value } = e.target;
  //   setUser((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };

  // console.log(user)

  // const submitHandler=(e)=>{
  //   e.preventDefault();
  //   axios
  //   .post("http://localhost:8080/user/signup", user)
  //   .then(res=> {
  //     navigate("/login")
  //   })
  //   .catch(err=> console.log(err))
  // }


  return (
    <>
    <Navbar/>
    <div className={style.main}>
      <div>
        <h1>Login Page</h1>
        <div className={style.bottom}>
          <form id={style.signin_form} 
          onSubmit={submitHandler}
          >
            <input
              onChange={(e) => data(e)}
              value={user.name}
              placeholder="Enter Name"
              type="text"
              name="name"
              required
            />
            <input
              onChange={(e) => data(e)}
              value={user.email}
              placeholder="Enter Email"
              type="email"
              name="email"
              required
            />
            <input
              onChange={(e) => data(e)}
              value={user.pass}
              placeholder="Enter Password"
              type="password"
              name="pass"
              required
            />
            <input
              onChange={(e) => data(e)}
              value={user.mobile}
              placeholder="Enter Mobile"
              type="number"
              name="mobile"
              required
            />
            <input type="submit" value="SIGNUP" id="signup" />
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup

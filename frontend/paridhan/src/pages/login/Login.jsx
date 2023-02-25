import React, {useState} from 'react'
import style from './login.module.css'
// import axios from 'axios'
// import {useNavigate} from "react-router-dom"
import { Navigate } from 'react-router-dom'
import { signin } from '../../redux/authReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'

const Login = () => {

  // const navigate=useNavigate()
    
  const initForm = {
    email:"",
    pass:"",
  };

  const { isAuth, user} = useSelector((store) => store.AuthReducer);
    const dispatch = useDispatch();

    const [users, setUsers] = useState(initForm);
    const data = (e) => {
      const { name, value } = e.target;
      setUsers((prev) => {
        return { ...prev, [name]: value };
      });
    };
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(signin(users));
    };
  
    if (isAuth &&  user?.role=="user") {
      return <Navigate to={"/"} />;
    }else if(isAuth && user?.role=="admin"){
      return <Navigate to={"/dashboard"} />
    }

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
  //   .post("http://localhost:8080/user/signin", user)
  //   .then(res=>{
  //     localStorage.setItem("token", res.data.token)
  //     console.log(res)
  //     navigate("/")
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
                  value={users.email}
                  placeholder="Enter Email"
                  type="email"
                  name="email"
                  required
                />
                <input
                  onChange={(e) => data(e)}
                  value={users.pass}
                  placeholder="Enter Password"
                  type="password"
                  name="pass"
                  required
                />
                
                <input type="submit" value="SIGNIN" id="signin" />
              </form>
            </div>
          </div>
        </div>
      </>
      
  )
}

export default Login

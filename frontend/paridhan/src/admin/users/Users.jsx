import React, { useEffect, useState } from 'react'
import style from './user.module.css'
import Nav from '../nav/Nav'
import axios from 'axios';
import {BiEdit} from 'react-icons/bi'
import {RiDeleteBin2Line} from 'react-icons/ri'
import {AiOutlineEye} from 'react-icons/ai'

const Users = () => {

  const [user, setUser] = useState();

  useEffect(()=>{
    getUser();
  },[])   
  
  const getUser=()=>{
    axios
    .get("http://localhost:8080/user")
    .then(res=> setUser(res.data))
    .catch(err=>console.log(err))
  }

  const handleEdit=()=>{
    // axios
    // .delete(`http://localhost:8080/user/edit/${id}`)
    // .then(res=> getUser())
    // .catch(err=>console.log(err))

  }

  const handleDelete=(id)=>{
    axios
    .delete(`http://localhost:8080/user/delete/${id}`)
    .then(res=> getUser())
    .catch(err=>console.log(err))
  }

  console.log(user)

  return (
    <>
    <Nav/>
    <div className={style.users}>
         <table className={style.userTable}>
          <thead>
            <tr>
            <td>Image</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Total</td>
            <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
                user?.map((el)=>{
                    return(
                        <tr key={el.id} >
                          <td><img style={{width:"90px"}} src="https://cdn-icons-png.flaticon.com/512/147/147133.png" alt="profile"/></td>
                          <td>{el.name}</td>
                          <td>{el.email}</td>
                          <td>{el.mobile}</td>
                          <td>{el.total}</td>
                          <td>
                            <div className={style.actions}>
                              <BiEdit onClick={()=>handleEdit(el._id)} />
                              <RiDeleteBin2Line onClick={()=>handleDelete(el._id)}/>
                              <AiOutlineEye/>
                            </div>
                          </td>
                        </tr>

                    )
                })                
            }
                
                               
            
          </tbody>
         </table>
    </div>
    </>
  )
  
}


export default Users

import React from 'react'
import style from './user.module.css'
import Nav from '../nav/Nav'

const Users = () => {
    const user=[
        {
          name:"Selena Wagner",
          username:"selena.io",
          img:"https://cdn-icons-png.flaticon.com/512/147/147133.png",
          order:2,
          total:"$150"
        },
        {
          name:"Selena Wagner",
          username:"selena.io",
          img:"https://cdn-icons-png.flaticon.com/512/147/147133.png",
          order:2,
          total:"$150"
        },
        {
          name:"Selena Wagner",
          username:"selena.io",
          img:"https://cdn-icons-png.flaticon.com/512/147/147133.png",
          order:2,
          total:"$150"
        },
        {
          name:"Selena Wagner",
          username:"selena.io",
          img:"https://cdn-icons-png.flaticon.com/512/147/147133.png",
          order:2,
          total:"$150"
        },
        {
          name:"Selena Wagner",
          username:"selena.io",
          img:"https://cdn-icons-png.flaticon.com/512/147/147133.png",
          order:2,
          total:"$150"
        },
        {
          name:"Selena Wagner",
          username:"selena.io",
          img:"https://cdn-icons-png.flaticon.com/512/147/147133.png",
          order:2,
          total:"$150"
        },
        {
          name:"Selena Wagner",
          username:"selena.io",
          img:"https://cdn-icons-png.flaticon.com/512/147/147133.png",
          order:2,
          total:"$150"
        },
        {
          name:"Selena Wagner",
          username:"selena.io",
          img:"https://cdn-icons-png.flaticon.com/512/147/147133.png",
          order:2,
          total:"$150"
        }
      ]
  return (
    <>
    <Nav/>
    <div className={style.users}>
         <table className={style.userTable}>
          <thead>
            <tr>
            <td>Name</td>
            <td>Username</td>
            <td>Image</td>
            <td>Order</td>
            <td>Total</td>
            <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
                user.map((el)=>{
                    return(
                        <tr key={el.id} >
                        <td>{el.name}</td>
                        <td>{el.username}</td>
                        <td><img style={{width:"50px"}} src={el.img} alt="profile"/></td>
                        <td>{el.order}</td>
                        <td>{el.total}</td>
                        <td><button>Info</button></td>
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

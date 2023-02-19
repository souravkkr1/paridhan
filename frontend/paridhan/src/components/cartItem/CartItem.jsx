import React, { useEffect, useState } from 'react'
import style from './cartItem.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {RiDeleteBin2Line} from 'react-icons/ri'

const CartItem = ({name, price, discPrice, img, size, color, id, qty, update} ) => {

  const [quantity, setQuantity] = useState(qty)

  // const handleQuantity=()=>{
    
  // }

  useEffect(()=>{
    const payload={
      quantity:quantity
    }
        axios
        .patch(`${process.env.REACT_APP_API_ENDPOINT}/cart/items/${id}`, payload, { 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          }
        })
        .then(res=> {
          console.log(res.data)
          update(true)
        })
        .catch(err=>console.log(err))
  },[quantity])

  const handleDelete=()=>{
        axios
        .delete(`${process.env.REACT_APP_API_ENDPOINT}/cart/items/${id}`,{ 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          }
        })
        .then(res=> {
          console.log(res.data)
          update(true)
        })
        .catch(err=>console.log(err))
  }

  // console.log("_id:", id)
  // console.log("quantity", quantity)

  return (
    <div className={style.cartItem}>
      <div className={style.left}>
        <img src={img} alt="" />
        <div>
            <h3>{name}</h3>
            <p>size: {size}</p>
            <p>color: {color}</p>
            <div className={style.remove} onClick={handleDelete}><RiDeleteBin2Line/> Remove</div>
        </div>
      </div>
      <div className={style.right}>
        <select name="quantity" id="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <p><s>{price}</s><span>{discPrice}</span></p>
        <p>You save {Math.round(((price-discPrice)/price)*100)}%</p>
      </div>
    </div>
  )
}

export default CartItem

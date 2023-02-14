import React from 'react'
import style from './cartItem.module.css'
import { Link } from 'react-router-dom'

const addedProd={

}

const CartItem = ({name, price, discPrice, img, desc, size, color} ) => {
  return (
    <div className={style.cartItem}>
      <div className={style.left}>
        <img src={img} alt="" />
        <div>
            <h3>{name}</h3>
            <p>size: {size}</p>
            <p>color: {color}</p>
            <Link to="">Remove</Link>
        </div>
      </div>
      <div className={style.right}>
        <select name="qty" id="qty">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <p>{price} <span>{discPrice}</span></p>
        <p>You save {Math.round(((price-discPrice)/price)*100)}%</p>
      </div>
    </div>
  )
}

export default CartItem

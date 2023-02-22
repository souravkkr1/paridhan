import React from 'react'
import style from './checkoutForm.module.css'

const CheckoutForm = () => {
  return (
    <div className={style.CheckoutForm}>
        <h2>Delivery Address</h2>
        <form>
            <input type="text" name="first-name" placeholder='First Name'/>
            <input type="text" name="last-name" placeholder='Last Name'/>
            <input type="text" name="address" placeholder='Address'/>
            <input type="text" name="city" placeholder='City'/>
            <input type="text" name="pincode" placeholder='Pincode'/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default CheckoutForm

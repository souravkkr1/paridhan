import React from 'react'
import style from './payment.module.css'
import { Link } from '@chakra-ui/react'
import Navbar from '../../components/navbar/Navbar'

const Payment = () => {
  return (
    <>
    <Navbar/>
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.left}>
          <h2>Shipping information</h2>
          <form>
              <input type="text" name="first-name" placeholder='First Name'/>
              <input type="text" name="last-name" placeholder='Last Name'/>
              <input type="text" name="address" placeholder='Address'/>
              <input type="text" name="city" placeholder='City'/>
              <input type="text" name="pincode" placeholder='Pincode'/>
              <input type="submit" value="Submit" />
          </form>
        </div>

{/* Right Section */}

        <div className={style.right}>
          <div className={style.box}>
            <h2>Order Summary</h2>
            <div>
              <div>
                <p>Product Total</p>
                <p>999</p>
              </div>
              <div>
                <p>Delivery</p>
                <p>Free</p>
              </div>
              <div>
              <h4>Totoal</h4>
              <h4><span>999</span></h4>
              </div>
            </div>
             <Link to="/payment"><button>CHECKOUT</button></Link>
          </div>
          <div className={style.coupon}>
            <h3>Apply promo code</h3>
            <input type="text" placeholder='Promo code' />
            <button>APPLY</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Payment

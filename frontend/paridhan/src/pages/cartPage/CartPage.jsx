import React from 'react'
import style from './cartPage.module.css'
import Navbar from '../../components/navbar/Navbar'
import CartItem from '../../components/cartItem/CartItem'
import { Link } from 'react-router-dom'

const addedProd=
  [
    {
      img:"https://img3.junaroad.com/uiproducts/18823471/zoom_0-1674018312.jpg",
      name:"Product 1",
      price:999,
      discPrice:399,
      author:"Sprouted",
      desc:"This is the sample product description using for testing purpose",
      size:"M",
      color:"green"
  },
  {
      img:"https://img3.junaroad.com/uiproducts/18294842/zoom_0-1647088459.jpg",
      name:"Product 2",
      price:999,
      discPrice:399,
      author:"Sprouted",
      desc:"This is the sample product description using for testing purpose",
      size:"XL",
      color:"black"
  },
  {
      img:"https://img3.junaroad.com/uiproducts/17611516/zoom_0-1616215900.jpg",
      name:"Product 3",
      price:999,
      discPrice:399,
      author:"Sprouted",
      desc:"This is the sample product description using for testing purpose",
      size:"L",
      color:"red"
  }
]


const CartPage = () => {
  return (
    <>
    <Navbar/>
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.left}>
          <h2>Cart Items</h2>
          {
            addedProd.map((ele)=>{
              return <CartItem
              name={ele.name}
              price={ele.price}
              discPrice={ele.discPrice}
              img={ele.img}
              desc={ele.desc}
              size={ele.size}
              color={ele.color}
              />
            })
          }
        </div>
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

export default CartPage

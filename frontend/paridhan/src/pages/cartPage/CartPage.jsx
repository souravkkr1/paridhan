import React from 'react'
import style from './cartPage.module.css'
import Navbar from '../../components/navbar/Navbar'
import CartItem from '../../components/cartItem/CartItem'

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
          
        </div>
      </div>
    </div>
    </>
  )
}

export default CartPage

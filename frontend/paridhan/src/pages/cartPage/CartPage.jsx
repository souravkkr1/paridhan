import React, { useEffect, useState } from 'react'
import style from './cartPage.module.css'
import Navbar from '../../components/navbar/Navbar'
import CartItem from '../../components/cartItem/CartItem'
import { Link } from 'react-router-dom'
import axios from "axios"


const CartPage = () => {

  const [addProd, setAddProd] = useState();
  const [update, setUpdate] = useState(false);

  console.log("yess:", localStorage.getItem('token'))

  // useEffect(()=>{
    
  //   axios
  //   .get(`http://localhost:8080/cart/items`,{ 
  //     headers: {
  //       'Content-Type': 'application/text',
  //       'Authorization': localStorage.getItem('token')
  //     }
  //   })
  //   .then((res)=>{
  //     setAddProd(res.data.data)
  //     setUpdate(false)
  //   })
      
  //   .catch((err)=> {
  //       console.log(err)})

  // },[update])

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/cart/items`,{
        headers:{
            "Authorization": localStorage.getItem("token")
        }
    }).then(res=>res.json())
    .then((res)=>{
          setAddProd(res?.data)
          console.log("res:", res)
          setUpdate(false)
        })
    .catch(err=> console.log(err))
},[update])


  const loadData=(check)=>{
    setUpdate(check)
  }

  console.log("hm:", addProd)
  
  let totalAmount=0;
  let afterDisc=0;
  let totalDisc=0;
  let discPercent=0;
  let deliveryFee="Free";
  let finalAmount=0;

  return (
    <>
    <Navbar/>
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.left}>
          <h2>Cart Items</h2>
          {
            addProd?.map((ele)=>{

              totalAmount = totalAmount + (ele.product.price*ele.quantity)
              afterDisc = afterDisc + (ele.product.discPrice*ele.quantity)
              totalDisc = totalAmount - afterDisc;
              discPercent= Math.round((totalDisc/totalAmount)*100)
              if(finalAmount < 500){
                deliveryFee=50;
                finalAmount= afterDisc + deliveryFee;
              }

              return <CartItem
              key={ele._id}
              name={ele.product.name}
              price={ele.product.price}
              discPrice={ele.product.discPrice}
              img={ele.product.img}
              desc={ele.product.desc}
              size={ele.product.size}
              color={ele.product.color}
              id={ele._id}
              qty={ele.quantity}
              update={loadData}
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
                <p>{totalAmount}</p>
              </div>
              <div>
                <p>Final Amount</p>
                <p>{afterDisc}</p>
              </div>
              <div>
                <p>You Saved</p>
                <p>{totalDisc} {discPercent}%</p>
              </div>
              <div>
                <p>Delivery</p>
                <p>{deliveryFee}</p>
              </div>
              <div>
              <h4>Totoal</h4>
              <h4><span>{finalAmount}</span></h4>
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

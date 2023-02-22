import React from 'react'
import style from './singleProduct.module.css'
import Navbar from '../../components/navbar/Navbar'
// import ProdBox from '../../components/prodBox/ProdBox'
import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import HomeProds from '../../components/homeProds/HomeProds'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const SingleProduct = () => {
  const navigate= useNavigate();
  const { isAuth } = useSelector((store) => store.AuthReducer);
  console.log(isAuth)

  const {id}=useParams();

  const [prodID, setProdID]=useState("");
  const [quantity, setQuantity]=useState(1);
  const [singleProduct, setSingleProduct] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setProdID(id)
    getMoreLike()
    axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}/products/${id}`)
    .then((res)=>{
        setSingleProduct(res.data)})
    .catch((err)=> {
        console.log(err)})

  },[id])


  console.log("check:", singleProduct)

  const getMoreLike=()=>{
    axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}/products`)
    .then((res)=>{
        setProducts(res.data)})
    .catch((err)=> {
        console.log(err)})
    }
    


   const  handleAddTocart=(id)=>{

    if(!isAuth){
      navigate("/login")
        // <Navigate to={"/login"} />
      }else{
          const payload={prodID, quantity}
          console.log(payload)
          axios.
          post(`${process.env.REACT_APP_API_ENDPOINT}/cart`, payload,{ 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          }
        })
          .then(res=>console.log(res))
          .catch(err=>console.log(err))
      }
    }
      

   console.log(prodID, quantity)

  return (
    <>
    <Navbar/>
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.left}>
          <img src={singleProduct?.img} alt="" />
        </div>
        <div className={style.right}>
          <h2>{singleProduct?.name}</h2>
          <div className={style.price}>
            <p>₹{singleProduct?.discPrice}</p>
            <p>₹{singleProduct?.price}</p>
          </div>
          <div className={style.size}> 
            <p>28</p>
            <p>30</p>
            <p>32</p>
            <p>34</p>
            <p>36</p>
          </div>
          <div className={style.quantit}>
            <select name="quantity" id="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button onClick={()=>handleAddTocart(id)}>add to cart</button>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore cupiditate ea repellat quos enim nostrum eligendi eum nemo corporis.
          </p>
          <p className={style.info}>free and statdard deliver on order above 500</p>
        </div>
      </div>
      <div className={style.moreLikeThis}>
        
        <div className={style.container}>
        {/* <h2>More Like This</h2> */}
          <div className={style.box}>
            <HomeProds
              products={products}
              heading="MORE LIKE THIS"
              category={singleProduct.category}
            />
          </div>
         
        </div>
      </div>
    </div>
    </>
  )
}

export default SingleProduct

import React from 'react'
import style from './singleProduct.module.css'
import Navbar from '../../components/navbar/Navbar'
// import ProdBox from '../../components/prodBox/ProdBox'
import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import HomeProds from '../../components/homeProds/HomeProds'

// const prod=[
//   {
//       img:"https://img3.junaroad.com/uiproducts/18823471/zoom_0-1674018312.jpg",
//       name:"Product 1",
//       price:999,
//       discPrice:399,
//       size:[28, 30, 32, 34, 36, 38],
//       author:"Sprouted"
//   }
// ]

// const moreLikeThis=[
//   {
//     img:"https://img3.junaroad.com/uiproducts/18823471/zoom_0-1674018312.jpg",
//     name:"Product 1",
//     price:999,
//     discPrice:399,
//     author:"Sprouted"
// },
// {
//     img:"https://img3.junaroad.com/uiproducts/18294842/zoom_0-1647088459.jpg",
//     name:"Product 2",
//     price:999,
//     discPrice:399,
//     author:"Sprouted"
// },
// {
//     img:"https://img3.junaroad.com/uiproducts/17611516/zoom_0-1616215900.jpg",
//     name:"Product 3",
//     price:999,
//     discPrice:399,
//     author:"Sprouted"
// },
// {
//     img:"https://img3.junaroad.com/uiproducts/18532551/zoom_0-1663862702.jpg",
//     name:"Product 4",
//     price:999,
//     discPrice:399,
//     author:"Sprouted"
// }
// ]

const SingleProduct = () => {

  const [singleProduct, setSingleProduct] = useState({});
  const [products, setProducts] = useState([]);
  const {id}=useParams();

  useEffect(()=>{
    getMoreLike()
    axios
    .get(`https://odd-lime-crayfish-hat.cyclic.app/products/${id}`)
    .then((res)=>{
        setSingleProduct(res.data)})
    .catch((err)=> {
        console.log(err)})

  },[id])

  const getMoreLike=()=>{
    axios
    .get(`http://localhost:8080/products`)
    .then((res)=>{
        setProducts(res.data)})
    .catch((err)=> {
        console.log(err)})
    }
    console.log(products)

    // let check= products && products.filter((product) =>
    // product.tags.includes(singleProduct.tags)).slice(0, 4)

    // console.log("check:",check)

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
          <Link to="/cart"><button>add to cart</button></Link>
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

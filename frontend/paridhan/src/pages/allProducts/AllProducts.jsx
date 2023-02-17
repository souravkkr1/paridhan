import React, { useEffect } from 'react'
import style from './allProducts.module.css'
import Navbar from '../../components/navbar/Navbar'
import ProdSidebar from '../../components/sidebar/ProdSidebar'
import {Link, useParams, useSearchParams} from 'react-router-dom';
import ProdBox from '../../components/prodBox/ProdBox';
import axios from 'axios';
import { useState } from 'react';

// const prod=[
//     {
//         img:"https://img3.junaroad.com/uiproducts/18823471/zoom_0-1674018312.jpg",
//         name:"Product 1",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/18294842/zoom_0-1647088459.jpg",
//         name:"Product 2",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/17611516/zoom_0-1616215900.jpg",
//         name:"Product 3",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/18532551/zoom_0-1663862702.jpg",
//         name:"Product 4",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/18537395/zoom_0-1664045976.jpg",
//         name:"Product 5",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/11334737/zoom_0-1470377973.jpg",
//         name:"Product 6",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/17718906/zoom_0-1620383566.jpg",
//         name:"Product 7",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/18823368/zoom_0-1670820278.jpg",
//         name:"Product 8",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/19147818/zoom_0-1673332950.jpg",
//         name:"Product 9",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     }
// ]

const Products = () => {

  const [prod, setProd]=useState([])
  // const [searchParams]=useSearchParams();
  // const { category } = searchParams.get('category');
  const {category} = useParams();

  // console.log(searchParams)
  console.log(category)

  useEffect(()=>{
    axios
    .get(`https://odd-lime-crayfish-hat.cyclic.app/products?category=${category}`)
    .then((res)=>{
        setProd(res.data)})
    .catch((err)=> {
        console.log(err)})
},[category])

console.log(prod)

  return (
    <>
    <Navbar/>
    <div className={style.main}>
    <div className={style.products}>
        <div className={style.left}>
          <ProdSidebar />
        </div>
        <div className={style.right}>
          {prod.map((prod, i) => {
            return (
              <Link to={`/singleproduct/${prod._id}`}>
                <ProdBox
                  key={i + 2}
                  name={prod.name}
                  price={prod.price}
                  discPrice={prod.discPrice}
                  img={prod.img}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Products

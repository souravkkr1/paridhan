import React, { useEffect } from 'react'
import style from './allProducts.module.css'
import Navbar from '../../components/navbar/Navbar'
import ProdSidebar from '../../components/sidebar/ProdSidebar'
import {Link, useParams, useSearchParams} from 'react-router-dom';
import ProdBox from '../../components/prodBox/ProdBox';
import axios from 'axios';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../../redux/productReducer/action';

const Products = () => {

  const {category} = useParams();
  const {products} = useSelector(store=>store.ProductReducer)
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(getProductsByCategory(category))
    console.log("product:", products)
  },[dispatch, category])

  // const [prod, setProd]=useState([])
  // const [searchParams]=useSearchParams();
  // const { category } = searchParams.get('category');
  

  // console.log(searchParams)

// console.log(prod)

  return (
    <>
    <Navbar/>
    <div className={style.main}>
    <div className={style.products}>
        <div className={style.left}>
          <ProdSidebar />
        </div>
        <div className={style.right}>
          {products.map((prod, i) => {
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

import React from 'react'
import style from './allProducts.module.css'
import Navbar from '../../components/navbar/Navbar'

const products = () => {
  return (
    <>
    <Navbar/>
    <div className={style.main}>
      <h1>Product Page</h1>
    </div>
    </>
    
  )
}

export default products

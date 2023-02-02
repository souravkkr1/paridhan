import React from 'react'
import Home from '../pages/home/Home'
import {Routes, Route} from 'react-router-dom'
import Products from '../pages/products/Products'
import SingleProduct from '../pages/singleProduct/SingleProduct'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import CartPage from '../pages/cartPage/CartPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men" element={<Products/>} />
        <Route path="/women" element={<Products/>} />
        <Route path="/kids" element={<Products/>} />
        <Route path="/sports" element={<Products/>} />
        <Route path="/tshirt" element={<SingleProduct/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes

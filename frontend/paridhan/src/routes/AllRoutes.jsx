import React from 'react'
import Home from '../pages/home/Home'
import {Routes, Route} from 'react-router-dom'
import AllProducts from '../pages/allProducts/AllProducts'
import SingleProduct from '../pages/singleProduct/SingleProduct'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import CartPage from '../pages/cartPage/CartPage'
import Dashboard from '../admin/dashboard/Dashboard'
import Products from '../admin/products/Products'
import Users from '../admin/users/Users'
import Orders from '../admin/orders/Orders'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all-products" element={<AllProducts/>} />
        <Route path="/singalproduct/:id" element={<SingleProduct />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/orders" element={<Orders/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes

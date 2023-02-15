import React, { useState } from 'react'
import Nav from '../nav/Nav'
import style from './products.module.css'
import axios from 'axios'
import { useEffect } from 'react'

const Products = () => {

    const initState = {
        name: "",
        img: "",
        price: 0,
        discPrice: 0,
        color: "",
        category: "",
        tags: "",
        stocks: 0,
      };

    const [product, setProduct]= useState(initState);
    const [prod, setProd]= useState("");


    useEffect(()=>{
        axios
        .get("http://localhost:8080/products")
        .then((res)=>{
            setProd(res.data)})
        .catch((err)=> {
            console.log(err)})
    },[])

    console.log("hello", prod)


          const addProduct=(e)=>{
            e.preventDefault();
            axios
            .post("http://localhost:8080/products/add", product)
            .then((res)=> console.log(res.data))
            .catch((err)=>{
                console.log(err)
            })
          }


          const data = (e) => {
            const { name, value } = e.target;
            setProduct((prev) => {
              return { ...prev, [name]: value };
            });
          };

          
  return (
    <>
        <Nav/>
        <div className={style.main}>
            <div className={style.addProd}>
                <div className={style.container}>
                    <form onSubmit={addProduct}>
                            {/* <label>Product Name</label> */}
                            <input
                                name="name"
                                value={product.name}
                                onChange={(e) => data(e)}
                                type="text"
                                placeholder="Product Name"
                            />

                            {/* <label>Product Category</label> */}
                            <input
                                name="img"
                                value={product.img}
                                onChange={(e) => data(e)}
                                type="text"
                                placeholder="Enter image link"
                            />

                            {/* <label>Product Price</label> */}
                            <input
                                name="price"
                                value={product.price}
                                onChange={(e) => data(e)}
                                type="number"
                                placeholder="Enter Price"
                            />

                            {/* <label>Product Price</label> */}
                            <input
                                name="discPrice"
                                value={product.discPrice}
                                onChange={(e) => data(e)}
                                type="number"
                                placeholder="Enter Discounted Price"
                            />

                            {/* <label>Product Category</label> */}
                            <input
                                name="color"
                                value={product.color}
                                onChange={(e) => data(e)}
                                type="text"
                                placeholder="Product Color"
                            />

                            {/* <label>Product Category</label> */}
                            <input
                                name="category"
                                value={product.category}
                                onChange={(e) => data(e)}
                                type="text"
                                placeholder="Category Name"
                            />

                            {/* <label>Product Tags</label> */}
                            <input
                                value={product.tags}
                                onChange={(e) => data(e)}
                                name="tags"
                                type="text"
                                placeholder="Enter tag"
                            />

                            {/* <label>Size</label> */}
                            <input
                                value={product.stocks}
                                onChange={(e) => data(e)}
                                name="stocks"
                                type="number"
                                placeholder="Enter item stock"
                            />
                            <input type="submit" value="Submit" />
                    </form>
                    <div className={style.list}>
                        <table className={style.userTable}>
                        <thead>
                            <tr>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Discounted Price</td>
                                <td>Stock</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prod && prod.map((ele)=>{
                                    return(
                                        <tr key={ele._id}>
                                            <td><img src={ele.img} style={{width:"50px"}} alt="profile" /></td>
                                            <td>{ele.name}</td>
                                            <td>{ele.price}</td>
                                            <td>{ele.discPrice}</td>
                                            <td>{ele.stock}</td>
                                            <td><button>Info</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Products

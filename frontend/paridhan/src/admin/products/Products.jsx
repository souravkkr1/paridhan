import React from 'react'
import Nav from '../nav/Nav'
import style from './products.module.css'

const Products = () => {
  return (
    <>
        <Nav/>
        <div className={style.main}>
            <div className={style.addProd}>
                <div className={style.container}>
                    <form>
                            {/* <label>Product Name</label> */}
                            <input
                                name="name"
                                //   value={product.name}
                                //   onChange={(e) => data(e)}
                                type="text"
                                placeholder="Product Name"
                            />

                            {/* <label>Product Brand</label> */}
                            <input
                                name="brand"
                                //   value={product.brand}
                                //   onChange={(e) => data(e)}
                                type="text"
                                placeholder="Brand"
                            />

                            {/* <label>Product Category</label> */}
                            <input
                                name="category"
                                //   value={product.category}
                                //   onChange={(e) => data(e)}
                                type="text"
                                placeholder="Category Name"
                            />

                            <label>Product Description</label>
                            <textarea
                                //   value={product.description}
                                //   onChange={(e) => data(e)}
                                name="description"
                                id="desc"
                                cols="20"
                                rows="5"
                            ></textarea>

                            <label>Product Color</label>
                            <select name="color" id="color">
                            <option selected value="">
                                Please select one
                            </option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="orange">Orange</option>
                            <option value="yellow">Yellow</option>
                            </select>

                            <label>Product For which gender</label>
                            <select name="gender" id="gender">
                            <option selected value="">
                                Please select one
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            </select>

                            {/* <label>Product Tags</label> */}
                            <input
                            //   onChange={(e) => data(e)}
                            name="tags"
                            type="text"
                            placeholder="Tags seperate with comma"
                            />

                            {/* <label>Size</label> */}
                            <input
                            //   onChange={(e) => data(e)}
                            name="size"
                            type="text"
                            placeholder="Size seperate with comma"
                            />

                            {/* <label>Stock you have</label> */}
                            <input
                            name="stock"
                            //   value={product.stock}
                            //   onChange={(e) => data(e)}
                            type="number"
                            placeholder="Stock"
                            />

                            {/* <label>Price per piece</label> */}
                            <input
                            name="price"
                            //   value={product.price}
                            //   onChange={(e) => data(e)}
                            type="number"
                            placeholder="Price"
                            />
                            <input type="submit" value="Add Product" />
                    </form>
                    <div className={style.list}>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Products

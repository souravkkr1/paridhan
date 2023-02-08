import React from 'react'
import Nav from '../nav/Nav'
import style from './products.module.css'

const Products = () => {

        const prods=[
            {
                id:"1",
                Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
                Name:"Baby shoes",
                Price:"$20",
                Offer:"25% OFF",
                Purchased:"	61",
                Stock:"	5421E",
                Status:"ACTIVE",
                Date:"2021-10-30",
                Action:""
            },
            {
                id:"2",
                Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
                Name:"Baby shoes",
                Price:"$20",
                Offer:"25% OFF",
                Purchased:"	61",
                Stock:"	5421E",
                Status:"ACTIVE",
                Date:"2021-10-30",
                Action:""
            },
            {
                id:"3",
                Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
                Name:"Baby shoes",
                Price:"$20",
                Offer:"25% OFF",
                Purchased:"	61",
                Stock:"	5421E",
                Status:"ACTIVE",
                Date:"2021-10-30",
                Action:""
            },
            {
                id:"4",
                Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
                Name:"Baby shoes",
                Price:"$20",
                Offer:"25% OFF",
                Purchased:"	61",
                Stock:"	5421E",
                Status:"ACTIVE",
                Date:"2021-10-30",
                Action:""
            },
            {
                id:"5",
                Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
                Name:"Baby shoes",
                Price:"$20",
                Offer:"25% OFF",
                Purchased:"	61",
                Stock:"	5421E",
                Status:"ACTIVE",
                Date:"2021-10-30",
                Action:""
            },
            {
                id:"6",
                Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
                Name:"Baby shoes",
                Price:"$20",
                Offer:"25% OFF",
                Purchased:"	61",
                Stock:"	5421E",
                Status:"ACTIVE",
                Date:"2021-10-30",
                Action:""
            },
            {
                id:"7",
                Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
                Name:"Baby shoes",
                Price:"$20",
                Offer:"25% OFF",
                Purchased:"	61",
                Stock:"	5421E",
                Status:"ACTIVE",
                Date:"2021-10-30",
                Action:""
            },
            {
                id:"8",
                Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
                Name:"Baby shoes",
                Price:"$20",
                Offer:"25% OFF",
                Purchased:"	61",
                Stock:"	5421E",
                Status:"ACTIVE",
                Date:"2021-10-30",
                Action:""
            },
            {
                id:"9",
                Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
                Name:"Baby shoes",
                Price:"$20",
                Offer:"25% OFF",
                Purchased:"	61",
                Stock:"	5421E",
                Status:"ACTIVE",
                Date:"2021-10-30",
                Action:""
            },
            {
                id:"10",
                Product:"https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/products/p1.jpg",
                Name:"Baby shoes",
                Price:"$20",
                Offer:"25% OFF",
                Purchased:"	61",
                Stock:"	5421E",
                Status:"ACTIVE",
                Date:"2021-10-30",
                Action:""
            }
          ]


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
                        <table className={style.userTable}>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Purchased</td>
                                <td>Stock</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prods.map((el)=>{
                                    return(
                                        <tr key={el.id} >
                                            <td>{el.id}</td>
                                            <td><img style={{width:"50px"}} src={el.Product} alt="profile"/></td>
                                            <td>{el.Name}</td>
                                            <td>{el.Price}</td>
                                            <td>{el.Purchased}</td>
                                            <td>{el.Stock}</td>
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

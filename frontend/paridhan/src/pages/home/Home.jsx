import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './home.module.css'
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
// import ProdBox from '../../components/prodBox/ProdBox'
import HomeProds from '../../components/homeProds/HomeProds'

const Home = () => {

  const [products, setProducts]= useState([])

  useEffect(()=>{
    axios
    .get("https://odd-lime-crayfish-hat.cyclic.app/products")
    .then((res)=>{
    setProducts(res.data);
    })
    .catch((err)=> {
        console.log(err)})
},[])

console.log(products)

// const new_arrival = 

    // console.log(new_arrival)

  // const new_arrival=products && products.filter((product)=>{
  //   product.tags.includes("new arrival")
  // })
 

  // console.log(new_arrival)
  

  const women=[
    {
        img:"https://img3.junaroad.com/uiproducts/18823471/zoom_0-1674018312.jpg",
        price:999,
        title:"Product 1",
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/18294842/zoom_0-1647088459.jpg",
        price:999,
        title:"Product 2",
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/17611516/zoom_0-1616215900.jpg",
        price:999,
        title:"Product 3",
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/18532551/zoom_0-1663862702.jpg",
        price:999,
        title:"Product 4",
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/18537395/zoom_0-1664045976.jpg",
        price:999,
        title:"Product 5",
        discPrice:399,
        author:"Sprouted"
    },
]

const men=[

{
        img:"https://img3.junaroad.com/uiproducts/17718906/zoom_0-1620383566.jpg",
        price:999,
        title:"Product 7",
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/18823368/zoom_0-1670820278.jpg",
        price:999,
        title:"Product 8",
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/19147818/zoom_0-1673332950.jpg",
        price:999,
        title:"Product 9",
        discPrice:399,
        author:"Sprouted"
    },
    {
      img:"https://img3.junaroad.com/uiproducts/18823471/zoom_0-1674018312.jpg",
      price:999,
      title:"Product 1",
      discPrice:399,
      author:"Sprouted"
  },
  {
      img:"https://img3.junaroad.com/uiproducts/18294842/zoom_0-1647088459.jpg",
      price:999,
      title:"Product 2",
      discPrice:399,
      author:"Sprouted"
  }
    ]

    const kids= [
      {
          img:"https://img3.junaroad.com/uiproducts/18823471/zoom_0-1674018312.jpg",
          price:999,
          title:"Product 1",
          discPrice:399,
          author:"Sprouted"
      },
      {
          img:"https://img3.junaroad.com/uiproducts/18294842/zoom_0-1647088459.jpg",
          price:999,
          title:"Product 2",
          discPrice:399,
          author:"Sprouted"
      },
      {
          img:"https://img3.junaroad.com/uiproducts/17611516/zoom_0-1616215900.jpg",
          price:999,
          title:"Product 3",
          discPrice:399,
          author:"Sprouted"
      },
      {
          img:"https://img3.junaroad.com/uiproducts/18532551/zoom_0-1663862702.jpg",
          price:999,
          title:"Product 4",
          discPrice:399,
          author:"Sprouted"
      },
      {
          img:"https://img3.junaroad.com/uiproducts/18537395/zoom_0-1664045976.jpg",
          price:999,
          title:"Product 5",
          discPrice:399,
          author:"Sprouted"
      },
  ]
  

  return (
    <>
    <Navbar/>
    <div className={style.main}>
      <div className={style.banner}>
        {/* <div className={style.content}>
          <h1>Welcome to Paridhan</h1>
          <p>Welcome to our one-stop-shop for all your fashion and lifestyle needs - browse our collections now! Shop the latest trends and discover great deals at our online store!</p>
        </div> */}
      </div>

      {/* Featured Product Section */}

      <div className={style.featured}>
        <div className={style.container}>
          <h2>PARIDHAN FEATURING</h2>
          <div className={style.feat_prods}>
            <div className={style.left}>
              
                <Link to="/offers">
                  <div>

                  </div>
                </Link>
              
            </div>
            <div className={style.right}>
              <Link to="/all-products/Women">
      
              </Link>
              <div>
                <Link to="/all-products/Men">
                  <img src="https://pbs.twimg.com/media/E1plYHMUUAIrR2g.jpg" alt="" />
                </Link>
                <Link to="/all-products/Kids">
                  <img src="https://www.nandanigarments.com/image/banner%2013.jpg" alt="" />
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* New Arrivals */}

      <div className={style.homeProds}>
        <HomeProds
        products={products}
        heading="NEW ARRIVALS"
        tag="new arrival"
        />
      </div>

      {/* WOMEN */}

      <div className={style.homeProds}>
        <HomeProds
        products={products}
        heading="WOMEN"
        tag="women"
        />
      </div>

      {/* Men */}

      <div className={style.homeProds}>
        <HomeProds
        products={products}
        heading="MEN"
        tag="men"
        />
      </div>

      {/* Kids */}

      <div className={style.homeProds}>
        <HomeProds
        products={products}
        heading="KIDS"
        tag="kids"
        />
      </div>
      
    </div>
    </>
  )
}

export default Home

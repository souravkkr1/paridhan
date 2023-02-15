import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './home.module.css'
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {

  const [products, setProducts]= useState([])

  useEffect(()=>{
    axios
    .get("http://localhost:8080/products")
    .then((res)=>{
    setProducts(res.data);
    })
    .catch((err)=> {
        console.log(err)})
},[])

console.log(products)

const new_arrival = products.filter((product) =>
      product.tags.includes("new arrival")
    );

    console.log(new_arrival)

  // const new_arrival=products && products.filter((product)=>{
  //   product.tags.includes("new arrival")
  // })
 

  console.log(new_arrival)
  

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
        <div className={style.content}>
          <h1>Welcome to Paridhan</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, dolores? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, maiores.</p>
        </div>
      </div>

      {/* Featured Product Section */}

      <div className={style.featured}>
        <div className={style.container}>
          <h2>FEATURED PRODUCTS</h2>
          <div className={style.feat_prods}>
            <div className={style.left}>
              
                <div>
                  
                </div>
              
            </div>
            <div className={style.right}>
              <div>
      
              </div>
              <div>
                <div>
                  <img src="https://pbs.twimg.com/media/E1plYHMUUAIrR2g.jpg" alt="" />
                </div>
                <div>
                  <img src="https://www.nandanigarments.com/image/banner%2013.jpg" alt="" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* New Arrivals */}

      <div className={style.new_arrivals}>
        <div className={style.container}>
          <h2>NEW ARRIVALS</h2>
          <div className={style.prods}>
          {
                  new_arrival.slice(0, 5).map((item)=>{
                    return(
                      <div className={style.prod_box}>
                        <img src={item.img} alt="" />
                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>
                      </div>
                    )
                  })
                }
          </div>
        </div>
      </div>

      {/* WOMEN */}

      <div className={style.women}>
        <div className={style.container}>
          <h2>WOMEN</h2>
          <div className={style.prods}>
                {
                  women.map((item)=>{
                    return(
                      <div className={style.prod_box}>
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <p>₹{item.price}</p>
                      </div>
                    )
                  })
                }
          </div>
        </div>
      </div>

      {/* Men */}

      <div className={style.men}>
        <div className={style.container}>
          <h2>MEN</h2>
          <div className={style.prods}>
          {
                  men.map((item)=>{
                    return(
                      <div className={style.prod_box}>
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <p>₹{item.price}</p>
                      </div>
                    )
                  })
                }
          </div>
        </div>
      </div>

      {/* Kids */}

      <div className={style.kids}>
        <div className={style.container}>
          <h2>KIDS</h2>
          <div className={style.prods}>
          {
                  kids.map((item)=>{
                    return(
                      <div className={style.prod_box}>
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <p>₹{item.price}</p>
                      </div>
                    )
                  })
                }
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Home

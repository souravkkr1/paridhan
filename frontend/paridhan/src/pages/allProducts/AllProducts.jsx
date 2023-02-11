import React from 'react'
import style from './allProducts.module.css'
import Navbar from '../../components/navbar/Navbar'
import ProdSidebar from '../../components/sidebar/ProdSidebar'
import {Link} from 'react-router-dom';
import ProdBox from '../../components/prodBox/ProdBox';

const prod=[
    {
        img:"https://img3.junaroad.com/uiproducts/18823471/zoom_0-1674018312.jpg",
        name:"Product 1",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/18294842/zoom_0-1647088459.jpg",
        name:"Product 2",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/17611516/zoom_0-1616215900.jpg",
        name:"Product 3",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/18532551/zoom_0-1663862702.jpg",
        name:"Product 4",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/18537395/zoom_0-1664045976.jpg",
        name:"Product 5",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/11334737/zoom_0-1470377973.jpg",
        name:"Product 6",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/17718906/zoom_0-1620383566.jpg",
        name:"Product 7",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/18823368/zoom_0-1670820278.jpg",
        name:"Product 8",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/19147818/zoom_0-1673332950.jpg",
        name:"Product 9",
        price:999,
        discPrice:399,
        author:"Sprouted"
    }
]

const products = () => {
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
              <Link to={`/singalproduct/${prod._id}`}>
                <ProdBox
                  key={i + 2}
                  name={prod.name}
                  price={prod.price}
                  brand={prod.brand}
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

export default products

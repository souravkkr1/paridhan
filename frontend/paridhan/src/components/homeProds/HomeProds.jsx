import React from 'react'
import style from "./homeProds.module.css"
import ProdBox from '../prodBox/ProdBox'
import {Link} from 'react-router-dom'

const HomeProds = ({products, category, tag, heading}) => {

  let check;
  
  if(category){
    check= products.filter((product) =>
    product.category.includes(category)
    ).slice(0, 4)
  }else{
    check= products.filter((product) =>
    product.tags.includes(tag)
    ).slice(0, 4)
  }
  

// console.log("check:", check)

  return (
    <div className={style.container}>
          <h2>{heading}</h2>
          <div className={style.prods}>
          {
                 check.map((item)=>{
                    return(
                      <Link to={`/singleproduct/${item._id}`}>
                      <ProdBox 
                      img={item.img}
                      name={item.name}
                      price={item.price}
                      discPrice={item.discPrice}
                      />
                      </Link>
                    )
                  })
                }
          </div>
        </div>
  )
}

export default HomeProds

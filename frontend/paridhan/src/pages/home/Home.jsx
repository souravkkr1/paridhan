import React from 'react'
import style from './home.module.css'
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

const home = () => {
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
          <div className={style.new_prods}>

          </div>
        </div>
      </div>

      {/* WOMEN */}

      <div className={style.women}>
        <div className={style.container}>
          <h2>WOMEN</h2>
          <div className={style.women_prod}>

          </div>
        </div>
      </div>

      {/* Men */}

      <div className={style.men}>
        <div className={style.container}>
          <h2>MEN</h2>
          <div className={style.men_prods}>

          </div>
        </div>
      </div>

      {/* Kids */}

      <div className={style.kids}>
        <div className={style.container}>
          <h2>KIDS</h2>
          <div className={style.kids_prods}>

          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default home

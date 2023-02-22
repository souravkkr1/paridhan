import React from "react";
import style from "./prodBox.module.css";

const ProdBox = ({ price, name, img, discPrice }) => {
  const percent= Math.round(((price-discPrice)/price)*100)
  // const img = `https://via.placeholder.com/350x200`;
  return (
    <div className={style.prodBox}>
      <img src={img} alt="ProdImage" />
      <div className={style.details}>
        <div>
          <h3>{name}</h3>
         <div className={style.price}>
          <div>
            <p>₹{discPrice}</p>
            <p>₹{price}</p>
            <p>{percent}%</p>
          </div>
          <button>Buy Now</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ProdBox;

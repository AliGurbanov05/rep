import React from "react";
import i from "../../../images/hero-banner.png";
import style from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.image}>
        <img src={i} alt="" />
      </div>
      <div className={style.txt}>
        <div className={style.text}>
          <p>Shop is fun</p>
          <h1>Browse Our Premium Product</h1>
          <span>
            Us which over of signs divide dominion deep fill bring they're meat
            beho upon own earth without morning over third. Their male dry. They
            are great appear whose land fly grass
          </span>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

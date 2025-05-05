import React from "react";
import i from "../../../images/blog1.png"
import style from "./News.module.scss";
import { FaRegCommentDots } from "react-icons/fa";
const News = () => {
  return (
    <div className={style.news}>
      <div className={style.txt}>
        <p>Popular Item in the market</p>
        <h1>
          Latest <span>News</span>
        </h1>
      </div>
      <div className={style.divs}>
        <div className={style.div}>
          <img src={i} alt="" />
          <div className={style.spans}>
            <span>By Admin</span>
            <span>
              <FaRegCommentDots /> 2 Comments
            </span>
          </div>
          <div className={style.txt}>
            <h1>
              Professional Design Staff and equipement you'll find we offer
            </h1>
            <h2>
              Let one fifth i bring fly to divided face for bearing divide unto
              seed. Winged divided light Forth.
            </h2>
            <p>Read More &rarr;</p>
          </div>
        </div>
        <div className={style.div}>
          <img src={i} alt="" />
          <div className={style.spans}>
            <span>By Admin</span>
            <span>
              <FaRegCommentDots /> 2 Comments
            </span>
          </div>
          <div className={style.txt}>
            <h1>
              Professional Design Staff and equipement you'll find we offer
            </h1>
            <h2>
              Let one fifth i bring fly to divided face for bearing divide unto
              seed. Winged divided light Forth.
            </h2>
            <p>Read More &rarr;</p>
          </div>
        </div>
        <div className={style.div}>
          <img src={i} alt="" />
          <div className={style.spans}>
            <span>By Admin</span>
            <span>
              <FaRegCommentDots /> 2 Comments
            </span>
          </div>
          <div className={style.txt}>
            <h1>
              Professional Design Staff and equipement you'll find we offer
            </h1>
            <h2>
              Let one fifth i bring fly to divided face for bearing divide unto
              seed. Winged divided light Forth.
            </h2>
            <p>Read More &rarr;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

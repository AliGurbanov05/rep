import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import style from "./Product.module.scss";
import { fetchProducts } from "../../../redux/reducers/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={style.product}>
      <div className={style.txt}>
        <p>Popular Item in the market</p>
        <h1>
          Trending <span>Product</span>
        </h1>
      </div>
      <div className={style.cards}>
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => <Card key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
};

export default Product;

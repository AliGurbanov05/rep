// pages/basket/Basket.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/common/layout/Layout";
import style from "./Basket.module.scss";
import {
  fetchBasketData,
  removeFromBasketAPI,
} from "../../redux/reducers/basketSlice";


const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);
  const status = useSelector((state) => state.basket.status);

  useEffect(() => {
    dispatch(fetchBasketData());
  }, [dispatch]);

  const handleRemove = (id) => {
    const isConfirmed = window.confirm(
      "Məhsulu silmək istədiyinizə əminsiniz?"
    );
    if (isConfirmed) {
      dispatch(removeFromBasketAPI(id)).then(() => {
        alert("Məhsul silindi");
      });
    }
  };

  return (
    <Layout>
      <div className={style.basketContainer}>
        <h1 className={style.title}>Your Basket</h1>

        {status === "loading" ? (
          <p>Loading...</p>
        ) : basketItems.length === 0 ? (
          <p className={style.empty}>Your basket is empty</p>
        ) : (
          <div className={style.items}>
            {basketItems.map((product) => (
              <div key={product.id} className={style.item}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className={style.image}
                />
                <div className={style.info}>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <span>Price: ${product.price}</span>
                  <span>Rating: {product.rating} ⭐</span>
                  <button
                    className={style.removeButton}
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Basket;

import React from "react";
import style from "./Not.module.scss";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/common/layout/Layout";

const Not = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className={style.not}>
        <button onClick={() => navigate("/")}>Go to Home Page</button>
      </div>
    </Layout>
  );
};

export default Not;

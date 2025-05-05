import React from "react";
import Layout from "../../components/common/layout/Layout";
import Hero from "../../components/common/hero/Hero";
import Product from "../../components/common/products/Product";
import Sale from "../../components/common/sale/Sale";
import News from "../../components/common/news/News";
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Product />
      <Sale />
      <Product />
      <News/>
    </Layout>
  );
};

export default Home;

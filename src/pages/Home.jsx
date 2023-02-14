import React, { useState } from "react";

//components
import Banner from "../components/Home/Banner";
import TopCategories from "../components/Home/TopCategories";
import ProductsRow from "../components/Home/ProductsRow";
import Brands from "../components/Home/Brands";
import OffersRow from "../components/Home/OffersRow";
import BigOffer from "../components/Home/BigOffer";
import ProductsSections from "../components/Home/ProductsSections";
import Advertisement from "../components/Layouts/Advertisement";
import Services from "../components/Home/Services";
function Home() {
  const [categories, setCategories] = useState([
    {
      id: 0,
      category: "travel",
    },
    {
      id: 1,
      category: "technologies",
    },
    {
      id: 2,
      category: "headPhone",
    },
    {
      id: 3,
      category: "watches",
    },
  ]);
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-4">
        <TopCategories />
        <ProductsRow title={"Todays Best Deals For You."} url="/products" />
        <Brands />
        <OffersRow />
        <ProductsRow title={"Weekly Popular Products."} url="/products" />
      </div>
      <BigOffer />
      <div className="container mx-auto px-4">
        <ProductsSections categories={categories} />
        <Advertisement />
        <ProductsRow title={"Most Selling Products."} url="/products" />
        <Services />
      </div>
    </div>
  );
}

export default Home;

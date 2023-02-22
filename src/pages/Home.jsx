import React from "react";
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
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-4">
        <TopCategories />
        <ProductsRow title={"Todays Best Deals For You."} url="/products/get" />
        <Brands />
        <OffersRow />
        <ProductsRow title={"Weekly Popular Products."} url="/products/get" />
      </div>
      <BigOffer />
      <div className="container mx-auto px-4">
        <ProductsSections  />
        <Advertisement />
        <ProductsRow title={"Most Selling Products."} url="/products/get" />
        <Services />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="heading">Welcome to redux toolkit Store</h2>
      <section>
        <h3>Products</h3>
        <Products/>
      </section>
    </div>
  );
};

export default Home;

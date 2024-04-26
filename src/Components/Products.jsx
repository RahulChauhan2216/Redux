import React, { useState, useEffect } from "react";
import { add } from "../Store/cartSline";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/productSlice";
import { STATUSES } from "../Store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    // using thunk
    dispatch(fetchProducts());

    // -- without thunk
    // const fetchProduct = async () => {
    //   try {
    //     const res = await fetch("https://fakestoreapi.com/products");
    //     const data = await res.json();
    //     setProducts(data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchProduct();
  }, []);

  if (status == STATUSES.LOADING) {
    return <h2>Loading........</h2>;
  }

  if (status == STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
          <h5>{item.price}</h5>
          <button onClick={() => handleAdd(item)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;

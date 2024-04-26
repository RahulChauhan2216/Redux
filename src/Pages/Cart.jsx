import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/cartSline";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  //   const handleRemove = (id) => {
  //     dispatch(remove(id));
  //   };

  return (
    <div>
      {products.length == 0 ? (
        <>
          <h3>Your Cart is Empty</h3>
        </>
      ) : (
        <>
          <h3>Cart</h3>
          <div className="cartWrapper">
            {products.map((item) => (
              <div className="cartCard" key={item.id}>
                <img src={item.imaage} />
                <h5>{item.title}</h5>
                <h5>{item.price}</h5>
                {/* <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button> */}
                <button
                  className="btn"
                  onClick={() => dispatch(remove(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      {/* <h3>Cart</h3> */}
      {/* <div className="cartWrapper">
        {products.map((item) => (
          <div className="cartCard">
            <img src={item.imaage} />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
            <button className="btn" onClick={() => dispatch(remove(item.id))}>
              Remove
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Cart;

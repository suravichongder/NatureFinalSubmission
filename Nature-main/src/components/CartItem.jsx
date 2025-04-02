import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CartItem = ({ item, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className="cart-item mb-3">
      <h5>{item?.product_name ?? "Unknown Product"}</h5>
      <p>Quantity: {item?.quantity ?? 0}</p>
      <p>Price: ${item?.price ?? 0}</p>
      <p>Total Price: ${(item?.price * item?.quantity).toFixed(2) ?? "0.00"}</p>
      <button className="btn btn-primary btn-sm mr-2" onClick={onIncrease}>
        +
      </button>
      <button className="btn btn-secondary btn-sm mr-2" onClick={onDecrease}>
        -
      </button>
      <button className="btn btn-danger btn-sm" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

const Cart = ({ show, handleClose, cartItems }) => {
  if (!show) return null;

  return (
    <div className="cart">
      <button onClick={handleClose}>Close</button>
      <ul>
        {cartItems?.map((item, index) => (
          <li key={index}>{item?.name ?? "Unknown Item"}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartItem;

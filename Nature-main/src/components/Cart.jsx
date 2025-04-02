import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_CART_ITEMS_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCartItems(response.data.items || []);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setMessage("Error fetching cart items");
      }
    };

    fetchCartItems();
  }, [token]);

  // Function to update the quantity of a cart item on the server
  const updateCartItemQuantity = async (productId, quantity) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_UPDATE_CART_ITEM_QUANTITY_URL}${productId}`,
        { quantity },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
      setMessage("Error updating cart item quantity");
    }
  };

  const handleIncreaseQuantity = (index) => {
    if (index >= 0 && index < cartItems.length) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity += 1;
      setCartItems(updatedCartItems);
      updateCartItemQuantity(
        updatedCartItems[index]?.product_id,
        updatedCartItems[index]?.quantity
      );
    }
  };

  const handleDecreaseQuantity = (index) => {
    if (index >= 0 && index < cartItems.length) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[index]?.quantity > 1) {
        updatedCartItems[index].quantity -= 1;
        setCartItems(updatedCartItems);
        updateCartItemQuantity(
          updatedCartItems[index]?.product_id,
          updatedCartItems[index]?.quantity
        );
      }
    }
  };

  const handleDeleteItem = async (index) => {
    const itemToDelete = cartItems[index];
    try {
      await axios.delete(
        `${process.env.REACT_APP_DELETE_CART_ITEM_URL}${itemToDelete?.product_id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const updatedCartItems = cartItems.filter((_, i) => i !== index);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error deleting item from cart:", error);
      setMessage("Error deleting item from cart");
    }
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BUY_CART_URL,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage(response.data);
      setCartItems([]);
      navigate("/orders");
    } catch (error) {
      console.error("Error purchasing cart:", error);
      setMessage("Error purchasing cart");
    }
  };

  const renderCartSummary = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + (item?.price ?? 0) * (item?.quantity ?? 0),
      0
    );
    const tax = subtotal * 0.1;
    const total = subtotal * 1.1;

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Cart Summary</h5>
          <p className="card-text">Subtotal: ${subtotal.toFixed(2)}</p>
          <p className="card-text">Tax: ${tax.toFixed(2)}</p>
          <p className="card-text">Total: ${total.toFixed(2)}</p>
          <button
            className="btn btn-success btn-block"
            onClick={handleButtonClick}
            disabled={cartItems.length === 0}
          >
            Place Order
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-2 bg-light p-4 rounded">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="row">
        <div className="col-md-8">
          {cartItems?.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            cartItems?.map((item, index) => (
              <CartItem
                key={item?.id ?? index} // Use a unique identifier for the key
                item={item}
                onIncrease={() => handleIncreaseQuantity(index)}
                onDecrease={() => handleDecreaseQuantity(index)}
                onDelete={() => handleDeleteItem(index)}
              />
            ))
          )}
        </div>
        <div className="col-md-4">{renderCartSummary()}</div>
      </div>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default Cart;

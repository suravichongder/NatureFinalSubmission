import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    // Function to fetch orders from the server
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${baseURL}orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Orders data:", response?.data); // Debugging log
        if (response?.data) {
          setOrders(response.data);
        } else {
          console.error("No data received from the server");
          setError("No data received from the server");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Error fetching orders");
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token, baseURL]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Orders</h2>
      {orders?.length === 0 ? (
        <div className="alert alert-info" role="alert">
          No orders found.
        </div>
      ) : (
        <div className="list-group">
          {orders?.map((order, index) => (
            <div key={order?._id ?? index} className="list-group-item">
              <h3>Order {index + 1}</h3>
              {order?.items?.map((item, idx) => (
                <div key={idx} className="mb-3">
                  <h4>{item?.product_name ?? "Unknown Product"}</h4>
                  <p>Quantity: {item?.quantity ?? 0}</p>
                  <p>Price: {item?.price ?? 0}</p>
                  <p>Total Price: {item?.total_price ?? 0}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderList;

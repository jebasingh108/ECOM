


import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems, 'yyyyyyyyyy');

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:3001/cart");
      console.log(response.data);
      setCartItems(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/cart/${id}`);
      setCartItems(prevData => prevData.filter(task => task.id !== id))
      console.log(cartItems, "kf")


    } catch (error) {
      console.log(error)

    }

  }

  useEffect(() => {
    fetchCartItems();
  }, []);



  return (
    <>
      <div className="cart-background col-lg-12 col-md-12 col-sm12-col-12">
        <div>
          <h1>Cart Items</h1>
        </div>
        <div className="row m-0">
          {cartItems.map((item, i) => (
            <div className="cart col-lg-12 col-md-12 col-sm-12 col-12" key={i}>
              
              <div className="cart-card card mb-3" >
                <div className=" cart-card1 row g-0">
                  <div className=" cart-img-div col-md-4">
                    <img src={item.image} className="cart-img img-fluid rounded-start" alt={item.title} />
                  </div>
                  <div className=" cart-details col-md-8">
                    <div className=" card-body">
                      <h5 className="card-title">{item.title}</h5>


                      <p className="card-text">{item.price}</p>

                      <p className="card-text">
                        <h5>{item.about}</h5>

                      </p>
                    </div>
                    <div className="cart-button">
                      
                      <div class="d-grid gap-2">
                        <button class=" button-remove btn btn-primary" onClick={() => handleRemove(item.id)} type="button">Remove From Cart</button>
                        <button class="button-remove btn btn-primary" type="button">Proceed To Checkout</button>
                      </div>


                      {/* <button type="button" onClick={() => handleRemove(item.id)}  class="btn btn-outline-primary">Primary</button>
                      <button type="button" class="btn btn-outline-primary">Proceed to Checkout</button> */}
                    </div>

                  </div>
                </div>
                <div>

                </div>
              </div>



            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/items");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    console.log(data,"mahi")

    const cartData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/cart");
            setCart(response.data);
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    };

    useEffect(() => {
        cartData();
    }, []);

    const handleCart = async (item) => {
        try {
            const existingCartItem = cart.find(cartItem => cartItem.id === item.id);

            if (existingCartItem) {
                
                const updatedCart = cart.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
                setCart(updatedCart);   
                console.log(cart, "item");
            } else {
                
                const cartItem = {
                    id: item.id,
                    image: item.image,
                    title: item.title,
                    price: item.price,
                    about: item.about,
                    quantity: 1     
                };

                const response = await axios.post("http://localhost:3001/cart", cartItem);
                setCart([...cart, response.data]);
            }
            console.log(cart,"hebfkejfn")
        } catch (error) {
            console.error("Error adding item to cart:", error);
        }
    };

    return (
        <div className="background">
            <div>
                <marquee behavior="" direction=""><h1 className="product-text">OUR PRODUCTS</h1></marquee>
                
            </div>
            <div className="row m-0">
                {data.map((item, i) => (
                    <div className="products col-lg-3 col-md-6 col-sm-6 col-12" id="products-section" key={i}>

                        <div className="card" >
                            <img src={item.image} className="card-img-top" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.price}</p>
                              
                                <button onClick={() => handleCart(item)} className="btn btn-primary">ADD TO CART</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;


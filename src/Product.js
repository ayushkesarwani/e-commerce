import React, {useState,useEffect} from 'react'
import "./product.css";
function Product() {

    const [productImage, setProductImage] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice]=useState("");

    return (
        <div className="product">
            
            {/* Image */}
            <img
                className="product__image" 
                src="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SX679_.jpg"
                alt="product_image"
            />
            {/* name */}
            <h3> iPhone 11 </h3>
            {/* price */}
            <h3>500$</h3> 

        </div>
        
    )
}

export default Product;

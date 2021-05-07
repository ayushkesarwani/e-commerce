import React, {useState, useContext} from 'react'
import Product from "./Product"
import {Context} from "./Store"
import "./cart.css"
import Header from "./Header"
const Cart = () => {

    const [state, setState] = useContext(Context);
    return (
        <div className="cart">
            {/* <h3><u>All Cart Product shown here</u></h3> */}
            <Header/>
            {state.map((prod)=>{
                return(
                    <div className="cart__item">
                    <Product
                        id={prod.id} 
                        image={prod.image}
                        name={prod.name}
                        price={prod.price}
                    />
                    <button>Remove from cart</button>
                    </div>
                )
            })}

            
            
        </div>
    )
}

export default Cart

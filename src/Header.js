import React, {useState} from 'react'
import './header.css'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Avatar from 'react-avatar';

function Header() {

    const [items, setItems] = useState(0);

    return (
        <div className="header">
            <div className="header__image">
                <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon_logo"
                />    
            </div>

            <div className="header__search">
                <input type="text" placeholder=""/>
                <button><FaSearch/></button>
            </div>
            <div className="header__cart">
                <h4> {items}</h4>
                <p><FaShoppingCart /></p>
                
            </div>

            <div className="header__profile">
                <Avatar
                round={true}
                alt="AK"
                src="https://hrcdn.net/s3_pub/hr-avatars/63a2a584-80b5-48a2-83fe-b1935c3e0a65/150x150.png"
                size="50"
                /> 
            </div>
        </div>
    )
}

export default Header

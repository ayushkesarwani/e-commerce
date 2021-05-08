import React, {useState, useContext} from 'react'
import './header.css'
import { FaShoppingCart,FaSearch } from "react-icons/fa";
import Avatar from 'react-avatar';
import {Context} from "./Store"
import {NavLink,BrowserRouter } from 'react-router-dom'
import firebase,{auth} from "firebase"
function Header() {

    // const [items, setItems] = useState(0);
    const [email,setEmail] = useState("");
    const [state, setState] = useContext(Context);
    console.log(state.productCart)
    const url="http://localhost:3000/"


    const LogOut=()=>{
        firebase.auth().signOut().then(() => {
            console.log("signOut successfully")
          }).catch((error) => {
            alert(error.message)
          });
    }

    return (
        <div className="header">
            <a href={`${url}`}>
            <div className="header__image">
            
                <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon_logo"
                />  
              
            </div>
            </a>

            <div className="header__search">
                <input type="text" placeholder=""/>
                <button><FaSearch/></button>
            </div>
            
            
                <div className="header__cart">
                    <h4> {state.length}</h4>
                    
                       <p>
                           <a href={`${url}cart`}> <FaShoppingCart/></a>
                       </p>
                    
                </div>

            {
                email===""?
                <div className="dropdown">
                        
                    <button className="dropbtn">Login/Signup</button>
                    <div className="dropdown-content">
                        <a href={`${url}login`} >Login</a>
                        <a href={`${url}signup`}>SignUp</a>
                    </div>
                </div>
                :
                <div className="header__profile">
                    <div className="dropdown">
                        <Avatar
                        round={true}
                        alt="AK"
                        src="https://hrcdn.net/s3_pub/hr-avatars/63a2a584-80b5-48a2-83fe-b1935c3e0a65/150x150.png"
                        size="50"
                        />
                        <div className="dropdown-content">
                            <a href="#">My Profile</a>
                            <a href="#">Setting</a>
                            <a href="#" onClick={LogOut}>LogOut</a>
                        </div>
                    </div>
                </div>
            }    


            {
                
                firebase.auth().onAuthStateChanged((firebaseUser)=>{
                    firebaseUser?
                    setEmail(firebaseUser.email):
                    setEmail("")
                })
            }
            
            
        </div>
    )
}

export default Header
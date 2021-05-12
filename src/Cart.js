import React, {useState, useContext, useEffect} from 'react'
import Product from "./Product"
import {Context} from "./Store"
import "./cart.css"
import Header from "./Header"
import { db, auth} from './firebase'
import firebase from 'firebase';

const Cart = () => {

    const {email, cartArray, addCart, deleteCart} = useContext(Context);
    //const [state, setState] = useContext(Context);
    //const [cartArray,setCartArray]=useState([]);
    console.log('from cart cartarray',cartArray)

    
    const handleDelete=(docid)=>{
        db.collection("userid").doc(email).collection("carts").doc(docid).delete().then(() => {
            //cartArray.filter((cart)=>cart.id!=id)
        
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });

        
    }

    // useEffect(() => {
    //     //this is where code runs
    //     //console.log("email", email, typeof(email))
        
    //     email?
    //     db.collection('userid').doc(email).collection('carts').onSnapshot(snapshot=>{
    //       //everytime the new posts added, this code fires..
    //       //setCartArray(snapshot.docs.map((doc) =>doc.data()))
    //         setCartArray(snapshot.docs.map((doc) =>({
                    
    //             docid : doc.id,
    //             doc : doc.data(),
    //         })))
    //     }):
    //     console.log("No changes in database...");
    //   }, [email])
    

    // console.log("cartArray ----> ", cartArray);
    return (
        <div className="cart">
            {/* <h3><u>All Cart Product shown here</u></h3> */}
            <Header/>
            {cartArray.map((prod)=>{
                return(
                    <div className="cart__item">
                    <Product
                        id={prod.doc.id} 
                        image={prod.doc.image}
                        name={prod.doc.name}
                        price={prod.doc.price}
                    />
                    <button onClick={() => {handleDelete(prod.docid)}}>Remove from cart</button>
                    </div>
                )
            })}
            
        </div>
    )
}

export default Cart

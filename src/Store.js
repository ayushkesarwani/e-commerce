import React, {useState} from 'react'
import {db,auth} from './firebase'

export const Context = React.createContext();

const Store = ({children}) => { 
    // const [state, setState]=useState(cartArray);
    
    const [email,setEmail]=useState(null)
    const [cartArray,setCartArray] = useState([]);

    auth.onAuthStateChanged((firebaseUser)=>{
        // console.log("auth state change",firebaseUser)
        firebaseUser?
        setEmail(firebaseUser.email):
        setEmail(null)
    })

    // email ? 
    // (   
    //     //var docRef = db.collection("cities").doc("SF")

    //     db.collection("userid").doc(email).collection("carts").get()
    //     .then((query) => {
    //         query.forEach((doc) => {
    //             console.log("doc => ", doc.data());
    //             setCartArray([
    //                 ...cartArray,
    //                 {
    //                     docid: doc.id,
    //                     doc: doc.data()
    //                 }
    //             ]

    //             )
                
    //         })
    //     })
    //     .catch((error) => {
    //         console.log("Error getting document:", error)
    //     })
    // ) 
    // :
    // (
    //     console.log("not logged in...")
    // )
    
    const addCart=()=>{
        console.log("Added to Cart");
    }
    const deleteCart = () => {
        console.log("deleted from cart")
    }

    console.log("from Store",cartArray);
    return (
        <div className="store">
            <Context.Provider value={ {email, cartArray ,addCart, deleteCart} }>
                {children}
            </Context.Provider>
        </div>
    )
}

export default Store

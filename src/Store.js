import React, {useState} from 'react'

const cartArray = 
    [{
        id:0,
        image: "https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SX679_.jpg",
        name: "iPhone",
        price: "$650"
    },
    {
        id:1,
        image: "https://images-na.ssl-images-amazon.com/images/I/71n6gXQn79L._SL1500_.jpg",
        name: "Peanut Butter",
        price: "7$"
    }]
//const userEmail="yahoo.com"

export const Context = React.createContext();

const Store = ({children}) => { 
    const [state, setState]=useState(cartArray);
    // const [userEmail, setUserEmail] = useState("gmail.com");
    return (
        <div className="store">
            <Context.Provider value={ [state, setState]}>
                {children}
            </Context.Provider>
        </div>
    )
}

export default Store

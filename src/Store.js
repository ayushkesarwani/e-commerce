import React, {useState} from 'react'

const productCart=[]

export const Context = React.createContext();

const Store = ({children}) => {
    const [state, setState]=useState(productCart);

    return (
        <div className="store">
            <Context.Provider value={[state, setState]}>
                {children}
            </Context.Provider>
        </div>
    )
}

export default Store

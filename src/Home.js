import React from 'react'
import Product from './Product';
import "./home.css"

function Home() {
    return (
        <div className="home">
            {/* <h2> Home </h2> */}

            <div className="home__banner">
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Jewellery/GW/unrec2/PC-BUnk-1500-600._CB415511219_.jpg" 
                    alt="banner"
                    width="100%"
                />
            </div>
            <div className="home__product">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>

        </div>
    )
}

export default Home

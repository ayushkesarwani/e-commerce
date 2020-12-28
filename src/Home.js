import React,{useState,useEffect} from 'react'
import ReactModal from 'react-modal'
import Product from './Product';
import "./home.css"

function Home() {

    const [productArray, setProductArray] = useState([]);

    const [openModal,setOpenModal]=useState(false);

    useEffect(()=>setProductArray([
        {
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
        },
        {
            id:2,
            image: "https://images-na.ssl-images-amazon.com/images/I/51RXzjrUmkL._SL1000_.jpg",
            name: "Mug",
            price: "65$"
        },
        {
            id:3,
            image: "https://images-na.ssl-images-amazon.com/images/I/416dD5gUvOL.jpg",
            name: "Specs",
            price: "45$"
        },
        {
            id:4,
            image: "https://images-na.ssl-images-amazon.com/images/I/61RyEv5mnNL._SL1100_.jpg",
            name: "Echo dot",
            price: "88$"
        }
        
    ]),[]
    );
    console.log(productArray);

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
            <div className="home__product" >
                {
                    productArray.map(product=>{
                        return (
                            <div className="home__product_specific" onClick={()=>setOpenModal(true)}>
                            <Product
                                image={product.image}
                                name={product.name}
                                price={product.price}
                            />
                            </div>
                        )
                        }
                         
                        )
                }
            </div>
            
            
                <ReactModal
                    isOpen={openModal}
                    onRequestClose={()=>setOpenModal(false)}
                    onAfterClose={()=>setOpenModal(false)}
                    shouldCloseOnOverlayClick={true}
                    
                >
                    Description is here!
                    <button onClick={()=>setOpenModal(false)}>CLOSE</button>
                </ReactModal>
            
        </div>
        
    )
}
export default Home;   
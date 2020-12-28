import React from 'react'
import ReactModal from 'react-modal';

function ProductDesc() {
    console.log("Product Description me a gya....")
    return (
        <div className="productDesc">
            <h1> Hello WOrld</h1>
            <ReactModal
                isOpen={true}
            >
                Description is here!
            </ReactModal>

        </div>
    )
}

export default ProductDesc

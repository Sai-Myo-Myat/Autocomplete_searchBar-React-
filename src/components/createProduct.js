import React from "react";
import '../componentsCss/product.css'

const CreateProduct = (props) => {
    return (
        <div className="product" >
            <p>{props.title}</p>
            <img src={props.image} alt="" />
        </div>
    )
}

export default CreateProduct;
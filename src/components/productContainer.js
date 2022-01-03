import React,{createContext, useContext, useState} from "react";
import '../componentsCss/productContainer.css'
import CreateProduct from './createProduct';
import { productsContext } from "./productsContext";

const ProductContainer = () => {

    const [products, setProducts] = useContext(productsContext);
    
    return (
        <div className="productContainer">
            {products.map(item => {
                return <CreateProduct title={item.title} image={item.image} key={item.id}/>
            })}
        </div>
    )
}

export default ProductContainer;

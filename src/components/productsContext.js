import React,{createContext, useState} from "react";

export const productsContext = createContext();

export const ProductContextContainer = (props) => {
    const [products, setProducts] = useState([]);
    
    return (
        <productsContext.Provider value={[products, setProducts]}>
           {props.children}
        </productsContext.Provider>
    )
}

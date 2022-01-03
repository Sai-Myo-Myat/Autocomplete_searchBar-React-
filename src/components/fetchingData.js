import React,{useState,useEffect,createContext} from "react";

export const dataContext = createContext();

export const FetchingData = (props) => {

    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        const fatching = await fetch('https://fakestoreapi.com/products');
        const jasonData = await fatching.json();
        console.log("data has arrived",jasonData);
        setData(jasonData);
    }

    useEffect(fetchData,[]); //calling this component only while browser runs!

    return (
        <dataContext.Provider value={[data, setData]}>
            {props.children}
        </dataContext.Provider>
    )
}
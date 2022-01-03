import React, {useContext,useRef} from 'react';
import '../componentsCss/searchBar.css'
//importing components
import { dataContext } from './fetchingData';
import {productsContext} from './productsContext';

function Searchbar() {
  const [data, setData] = useContext(dataContext);

  const searchText = useRef("");
  const [products, setProducts] = useContext(productsContext);

  const updateSearchText = (e) => {
      searchText.current = e.target.value;
  }

  const filterData = () => {
      if(searchText.current ==="") {
          setProducts([]);
          return
      }else {
            const filteredProducts = data.filter((product) => {
            const filteredProduct= product.title.toLocaleLowerCase().includes(searchText.current.toLocaleLowerCase());
            return filteredProduct;
        })
        setProducts(filteredProducts);
      }
  }


  return (
    <div className='searchBarContainer'>
        <form className='form' onChange={filterData}>
            <input className='searchBar' type="text" value={searchText.current} onChange={updateSearchText}/>
        </form>
    </div>
  );
}

export default Searchbar;
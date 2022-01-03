import React from 'react';
import './App.css';
//importing components
import {FetchingData} from './components/fetchingData';
import Searchbar from './components/searchBar';
import ProductContainer from './components/productContainer';
import { ProductContextContainer } from './components/productsContext';

function App() {

  return (
   <div className='app'>
      <FetchingData>
        <ProductContextContainer>
          <Searchbar />
          <ProductContainer />
        </ProductContextContainer>
      </FetchingData>
   </div>
  );
}

export default App;

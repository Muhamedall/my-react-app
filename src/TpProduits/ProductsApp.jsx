import React, { useState, useEffect } from 'react';
import ProductsList from './ProduitsList';
import ProductsForm from './ProductsForm';
import axios from 'axios';

export default function ProductsApp() {
  const [products, setProducts] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        
        const newData = Array.isArray(response.data) ? response.data : [];

        setFetchedData(newData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <ProductsForm setProducts={setProducts} />
      <ProductsList data={[...fetchedData, ...products]} />
    </div>
  );
}

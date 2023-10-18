import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import axios from "axios";

export default function ProdApp() {
  const [apiData, setApiData] = useState({ listProducts: [], isLoading: true });

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setApiData({ listProducts:res.data || [], isLoading: false });
      });
  }, []);
  

  function addToList(data) {
    setApiData((prevData) => ({
      listProducts: [...prevData.listProducts, data],
      isLoading: false,
    }));
  }

  return (
    <>
      <ProductForm action={addToList} />
      <ProductList data={apiData} />
    </>
  );
}

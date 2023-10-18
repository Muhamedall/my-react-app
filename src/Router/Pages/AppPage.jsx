import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homme from "./Homme";
import Form from "./Form";
import Layout from "./Layout";
import NotPage from "./NotPage";
import List from "./List";

export default function Myapp() {
  const [apiData, setApiData] = useState({ listProducts: [], isLoading: true });
  const [inputSearch, setInputSearch] = useState(""); // State to store search input
  const [searchResults, setSearchResults] = useState([]); // State to store filtered results

  useEffect(() => {
    axios.get("http://localhost:1337/api/products").then((res) => {
      setApiData({ listProducts: res.data.data, isLoading: false });
    });
  }, []);

  function addToList(data) {
    axios
      .post("http://localhost:1337/api/products", { data: data })
      .then(() => {
        alert("Ajouté");
      })
      .catch(() => {
        alert("Erreur lors de l'insertion");
      });
  }

  // Function to handle search
 // Function to handle search
function handleSearch() {
  // Filter data based on the input search value
  const results = apiData.listProducts.filter((product) =>
    product.name?.toLowerCase().includes(inputSearch.toLowerCase())
  );
  alert(JSON.stringify(setSearchResults(results)));
}


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                inputSearch={inputSearch}
                handleInputChange={setInputSearch}
                handleSearch={handleSearch}
                searchResults={searchResults}
              />
            }
          >
            <Route index element={<Homme />} />
            <Route path="Form" element={<Form action={addToList} />} />
            <Route path="List" element={<List data={apiData} />} />
            <Route path="*" element={<NotPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

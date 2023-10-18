import React from "react";
import { useEffect,useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InscriptionForm from './InscriptionForm';
import ListInscription from './ListInscription';
import Homme from './Homme';
import axios from "axios";

export default  function AutoComplet(){
    const [apiData, setApiData] = useState({ listStagaires: [] });
    useEffect(() => {
        axios.get("http://localhost:1337/api/stagaires").then((res) => {
          setApiData({ listStagaires: res.data.data});
        });
      },[]);
      function addToList(data) {
        axios
          .post("http://localhost:1337/api/stagaires", { data: data })
          .then(() => {
            alert("Ajouté");
          })
          .catch(() => {
            
            alert("Erreur lors de l'insertion");
          });
      }
    
    return (
        <>
         <BrowserRouter>
        <Routes>
          <Route path="/"element={<Homme/> }>
      
            <Route path="InscriptionForm" element={<InscriptionForm action={addToList} data={apiData}  />} />
            <Route path="ListInscription" element={<ListInscription data={apiData} listStagaires={ListInscription} />} />
         
          </Route>
        </Routes>
      </BrowserRouter>
       
        
        </>
    )
}
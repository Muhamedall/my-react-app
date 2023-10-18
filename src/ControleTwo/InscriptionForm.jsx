import React, { useRef } from "react";

export default function InscriptionForm({ action }) {
  const pData = useRef({});


  function handleChange(e) {
    pData.current[e.target.name] = e.target.value;
    
  }

  function handleAdd(e) {
    e.preventDefault();
    action(pData.current);
  }

  return (
    <form>
      <input name="FirstName" onChange={handleChange} />
      <input name="LastName" onChange={handleChange} />
      <input name="Ville" onChange={handleChange} /><br />

      <select name="Options" id="selectForm" onChange={handleChange}>
        <option value="">Open this select menu</option>
        <option value="Dev Digital">Dev Digital</option>
        <option value="Dev Infra">Dev Infra</option>
        <option value="Dev Mobile">Dev Mobile</option>
      </select>

      <button onClick={handleAdd}>Ajouter</button>
    </form>
  );
}

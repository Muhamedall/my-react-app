import React, { useRef } from 'react';

export default function ProductsForm({ setProducts }) {
  const data = useRef({});

  const handleAdd = (e) => {
    e.preventDefault();
        if (data.current.title && data.current.description && data.current.prix) {
      setProducts((prevProducts) => [
        ...prevProducts,
        {
          title: data.current.title,
          description: data.current.description,
          prix: data.current.prix,
        },
      ]);
      data.current = {};
    }
  };

  return (
    <>
      <form>
        <label>Enter name produits :</label>
        <input
          type="text" placeholder='name product'
          onChange={(e) => (data.current.title = e.target.value)}
        ></input>
        <br></br>
        <label>Enter description produits :</label>
        <input
          type="text" placeholder='description product'
          onChange={(e) => (data.current.description = e.target.value)}
        ></input>
        <br></br>
        <label>Enter prix produits :</label>
        <input
          type="text" placeholder='prix product'
          onChange={(e) => (data.current.prix = e.target.value)}
        ></input>
        <br></br>
        <button onClick={handleAdd}>Add</button>
      </form>
    </>
  );
}

import React, { useState } from "react";

export default function ProductList({ data }) {
  const { listProducts, isLoading } = data;
  const [products, setProducts] = useState(listProducts); 

  const handleDelete = (index) => {
   
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts); 
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((prod, idx) => (
          <tr key={idx}>
            <td>{prod.attributes.title}</td>
            <td>{prod.attributes.description}</td>
            <td>{prod.attributes.price}</td>
            <td>
              <button onClick={() => handleDelete(idx)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


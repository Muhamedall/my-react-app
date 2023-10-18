import React from "react";

export default function ProductList({ data }) {
  const { listProducts, isLoading } = data;

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
        </tr>
      </thead>
      <tbody>
        {listProducts.map((product, index) => (
          <tr key={index}>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

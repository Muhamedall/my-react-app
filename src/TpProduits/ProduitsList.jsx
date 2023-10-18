import React from 'react';

export default function ProductsList({ data }) {
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>Name produit</th>
            <th>Description</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.prix}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

import React from "react";
export default function StagairestList({ data }) {
  const { listStagaires } = data;


  
  

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Ville</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {listStagaires.map((stagair, idx) => (
          <tr key={idx}>
            <td>{stagair.attributes.FirstName}</td>
            <td>{stagair.attributes.LastName}</td>
            <td>{stagair.attributes.Ville}</td>
            <td>{stagair.attributes.Options}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
}


import React from 'react';
import DataRow from './DataRow';

const Table = ({ data, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Card Number</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <DataRow key={index} data={item} onDelete={() => onDelete(index)} onEdit={() => onEdit(index)} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

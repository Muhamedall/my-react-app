import React, {  useRef } from 'react';

const DataRow = ({ data, onDelete, onEdit }) => {
  const isEditingRef = useRef(false);
  const editedDataRef = useRef({ ...data });

  const handleEdit = () => {
    isEditingRef.current = true;
  };

  const handleSave = () => {
    onEdit(editedDataRef.current);
    isEditingRef.current = false;
  };

  const handleChange = (key, value) => {
    editedDataRef.current = { ...editedDataRef.current, [key]: value };
  };

  return (
    <tr>
      <td>{isEditingRef.current ? <input type="text" value={editedDataRef.current.name} onChange={(e) => handleChange('name', e.target.value)} /> : data.name}</td>
      <td>{isEditingRef.current ? <input type="text" value={editedDataRef.current.cardNumber} onChange={(e) => handleChange('cardNumber', e.target.value)} /> : data.cardNumber}</td>
      <td>{isEditingRef.current ? <input type="text" value={editedDataRef.current.department} onChange={(e) => handleChange('department', e.target.value)} /> : data.department}</td>
      <td>
        {isEditingRef.current ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <>
            <button onClick={onDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default DataRow;

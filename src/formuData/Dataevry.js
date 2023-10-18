import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';

function App() {
  const [data, setData] = useState([]);

  const handleSubmit = (formData, isUpdate) => {
    if (isUpdate) {
      const newData = [...data];
      newData.pop(); // Remove the last item (assuming it's the one to update)
      setData([...newData, formData]);
    } else {
      setData([...data, formData]);
    }
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleEdit = (index, updatedData) => {
    const newData = [...data];
    newData[index] = updatedData;
    setData(newData);
  };

  return (
    <div>
      <h1>Form and Table Example</h1>
      <Form onSubmit={handleSubmit} />
      <Table data={data} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;




import React, { useRef } from 'react';

const Form = ({ onSubmit }) => {
  const nameRef = useRef('');
  const cardNumberRef = useRef('');
  const departmentRef = useRef('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') nameRef.current = value;
    else if (name === 'cardNumber') cardNumberRef.current = value;
    else if (name === 'department') departmentRef.current = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: nameRef.current,
      cardNumber: cardNumberRef.current,
      department: departmentRef.current,
    });
    nameRef.current = '';
    cardNumberRef.current = '';
    departmentRef.current = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={nameRef.current} onChange={handleChange} placeholder="Name" />
      <input type="text" name="cardNumber" value={cardNumberRef.current} onChange={handleChange} placeholder="Card Number" />
      <input type="text" name="department" value={departmentRef.current} onChange={handleChange} placeholder="Department" />
      <button type="submit">Submit</button>
      <button onClick={() => onSubmit({ name: nameRef.current, cardNumber: cardNumberRef.current, department: departmentRef.current }, true)}>Update</button>
    </form>
  );
};

export default Form;

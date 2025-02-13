// src/components/Create.js
import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    axiosInstance.post('/Usuarios', { name }) // Replace with your endpoint and payload
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error('Error creating item:', error));
  };

  return (
    <div>
      <h1>Create Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="itemName" className="form-label">Name</label>
          <input 
            type="text" 
            id="itemName" 
            className="form-control" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default Create;

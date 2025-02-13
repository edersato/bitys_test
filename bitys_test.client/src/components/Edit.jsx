// src/components/Edit.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const [name, setName] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get(`/Usuarios/${id}`) // Replace with your endpoint
      .then(response => {
        setName(response.data.name);
      })
      .catch(error => console.error('Error fetching item:', error));
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    axiosInstance.put(`/Usuarios/${id}`, { name }) // Replace with your endpoint and payload
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error('Error updating item:', error));
  };

  return (
    <div>
      <h1>Edit Item</h1>
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
        <button type="submit" className="btn btn-success">Update</button>
      </form>
    </div>
  );
}

export default Edit;

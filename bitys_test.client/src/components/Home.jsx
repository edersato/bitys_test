import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosInstance.get('/Usuarios')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      axiosInstance.delete(`/Usuarios/${id}`)
        .then(() => {
          setItems(items.filter(item => item.id !== id));
        })
        .catch(error => console.error('Erro ao excluir item:', error.response));
    }
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr className='d-flex align-items-center'>
            <th>
              Consulta de Usuarios
            </th>
            <th style={{position: 'relative', left: '145%'}}>
              <Link className="btn btn-success btn-sm" to="/create">
              <FontAwesomeIcon icon={faPlus} /> Adicionar
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='fw-bold'>
            <td>Nome</td>
            <td>CPF</td>
            <td>Situação</td>
            <td>Perfil</td>
            <td>Idioma</td>
            <td>Ações</td>
          </tr>
          {items && items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.cpf}</td>
              <td>{item.situacao ? "Ativo" : "Inativo"}</td>
              <td>{item.perfil || "N/A"}</td>
              <td>{item.idioma}</td>
              <td>
                <Link to={`/edit/${item.id}`} className="btn btn-primary me-2 btn-sm">
                  <FontAwesomeIcon icon={faPencil} />
                </Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;

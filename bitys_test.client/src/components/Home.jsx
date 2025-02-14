import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [items, setItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    axiosInstance.get('/Usuarios')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const handleDeleteClick = (id) => {
    setDeletingId(id); 
    setShowModal(true); 
  };

  const handleConfirmDelete = () => {
    axiosInstance
      .delete(`/Usuarios/${deletingId}`)
      .then(() => {
        setItems(items.filter(item => item.id !== deletingId));
        setAlertMessage("Usuário excluído com sucesso!");
        setShowAlert(true);
        setShowModal(false);
        setTimeout(() => setShowAlert(false), 4000); 
      })
      .catch((error) => {
        console.error("Erro ao excluir item:", error.response);
        setAlertMessage("Erro ao excluir usuário!");
        setShowAlert(true);
        setShowModal(false); // Fecha o modal caso haja erro
        setTimeout(() => setShowAlert(false), 4000); // Esconde o alerta após 4 segundos
      });
  };

  const handleCancelDelete = () => {
    setShowModal(false); // Fecha o modal sem excluir
  };

  return (
    <div className="container mt-3">

      {showAlert && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {alertMessage}
          <button type="button" className="btn-close" onClick={() => setShowAlert(false)}></button>
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center bg-active p-3 rounded">
        {/* adicionei dois titles, pensando na responsividade */}
        <h2 className="fw-bold d-none d-sm-block">Consulta de Usuários</h2>
        <h4 className="fw-bold d-sm-none">Consulta de Usuários</h4>
        <Link className="btn btn-success btn-sm" to="/create">
          <FontAwesomeIcon icon={faPlus} /> Adicionar
        </Link>
      </div>

      {/* 
            mudei um pouco o pensamento da responsividade em telas menores
            a informação fica encavalada e o usuário não tem a melhor
            visualização, por isso, oculto algumas colunas dependendo do
            tamanho da view (principalmente em celulares) 
        */}
      <div className="table-responsive mt-3">
        <table className="table table-hover">
          <thead>
            <tr className="fw-bold">
              <th>Nome</th>
              <th className="d-none d-md-table-cell">CPF</th>
              <th className="">Situação</th>
              <th className="d-none d-sm-table-cell">Perfil</th>
              <th className="d-none d-md-table-cell">Idioma</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {items && items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td className="d-none d-md-table-cell">{item.cpf}</td>
                <td>{item.situacao ? "Ativo" : "Inativo"}</td>
                <td className="d-none d-sm-table-cell">{item.perfil || "N/A"}</td>
                <td className="d-none d-md-table-cell">{item.idioma || "N/A"}</td>
                <td className='d-flex'>
                  <Link to={`/edit/${item.id}`} className="btn btn-primary me-2 btn-sm">
                    <FontAwesomeIcon icon={faPencil} />
                  </Link>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(item.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de Confirmação */}
      <div className={`modal fade ${showModal ? "show" : ""}`} tabIndex="-1" style={{ display: showModal ? "block" : "none" }} aria-hidden={!showModal}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmar Exclusão</h5>
              <button type="button" className="btn-close" onClick={handleCancelDelete}></button>
            </div>
            <div className="modal-body">
              <p>Tem certeza que deseja excluir este usuário?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>Cancelar</button>
              <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Excluir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

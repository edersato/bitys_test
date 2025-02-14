// src/components/Create.js
import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [data_nasc, setData_nasc] = useState('');
  const [idioma, setIdioma] = useState('');
  const [senha, setSenha] = useState('');
  const [situacao, setSituacao] = useState(true);
  const [perfil, setPerfil] = useState('');

  // alert de criação
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    
    axiosInstance.post(
      '/Usuarios',
      { name, cpf, email, data_nasc, idioma, senha, situacao, perfil },
      { headers: { 'Content-Type': 'application/json' } }
    )
      .then(() => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate("/");
        }, 3500);
      })
      .catch(error => console.error('Error creating item:', error));
      

  };

  return (
    <div>
      <h1>Adicionar Usuário</h1>

      {showAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Usuário criado com sucesso!
          <button type="button" className="btn-close" onClick={() => setShowAlert(false)}></button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="itemName" className="form-label">Nome</label>
          <input
            type="text"
            id="itemName"
            className="form-control"
            value={name}
            placeholder='Adicione um nome'
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="itemCpf" className="form-label">CPF</label>
          <input
            type="text"
            id="itemCpf"
            className="form-control"
            value={cpf}
            placeholder='Adicione um CPF'
            onChange={e => setCpf(e.target.value)}
            required
            />
        </div>
        <div className="mb-3">
          <label htmlFor="itemEmail" className="form-label">Email</label>
          <input
            type="text"
            id="itemEmail"
            className="form-control"
            value={email}
            placeholder='Adicione um email'
            onChange={e => setEmail(e.target.value)}
            required
            />
        </div>
        <div className="mb-3">
          <label htmlFor="itemDatanasc" className="form-label">Data de Nascimento</label>
          <input
            type="date"
            id="itemDatanasc"
            className='form-control'
            value={data_nasc}
            onChange={e => setData_nasc(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="itemIdioma" className="form-label">Idioma</label>
          <select 
            id="itemIdioma" 
            className='form-select' 
            value={idioma} 
            onChange={e => setIdioma(e.target.value)}>
              <option value="">Selecione...</option>
              <option value="PT-BR">Português</option>
              <option value="ES">Espanhol</option>
              <option value="EN">Inglês</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="itemSenha" className="form-label">Senha</label>
          <input
            type="password"
            id="itemSenha"
            className="form-control"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Situação</label>
          <div className="d-flex">
            <div className="form-check me-3">
              <input
                type="radio"
                id="situacaoAtivo"
                name="situacao"
                value="true"
                checked={situacao === true}
                onChange={e => setSituacao(e.target.value === "true")}
                className="form-check-input"
              />
              <label htmlFor="situacaoAtivo" className="form-check-label">
                Ativo
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="situacaoInativo"
                name="situacao"
                value="false"
                checked={situacao === false}
                onChange={e => setSituacao(e.target.value === "true")}
                className="form-check-input"
              />
              <label htmlFor="situacaoInativo" className="form-check-label">
                Inativo
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="perfil" className="form-label">Perfil</label>
          <select
            id="perfil"
            className="form-select"
            value={perfil}
            onChange={e => setPerfil(e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Admin">Admin</option>
            <option value="Gerente">Gerente</option>
            <option value="Vendedor">Vendedor</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">Criar</button>
      </form>
    </div>
  );
}

export default Create;

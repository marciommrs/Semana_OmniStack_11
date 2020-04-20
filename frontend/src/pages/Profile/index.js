import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  
  /* Parâmetros:
  1 - Função a ser carregada.
  2 - Array de dependências.
  2.1 - Sem que algo dentro do array alterar, a função será executada.
  2.2 - Array vazio indica que a função será invocada uma única vez. */
  useEffect(loadIncidents, [ongId]);
  
  function loadIncidents() {
    api
      .get('/profile', { headers: { Authorization: ongId } })
      .then((response) => {
        setIncidents(response.data);
      });
  }
  
  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {headers: {Authorization: ongId}});
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch(err) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => ( //Colocar parênteses é a mesma coisa que return.
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

            {/* Usando onClick={handleDeleteIncident(incident.id)} a função está sendo invocada.
                  apagando todos os incidents assim que a página for carregada.
                Usando Arrow Function, a função será passada para o evento onClick.*/}
            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}
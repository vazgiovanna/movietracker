import './Minhaconta.css'

import React from 'react';

const Minhaconta = () => {
  const usuario = {
    nome: 'Catiane Fogaça',
    email: 'catiane@email.com'
  };
  return (
    <div style={estilos.container}>
      <h1 style={estilos.titulo}>Minha Conta</h1>

      <div style={estilos.card}>
        <p><strong>Nome:</strong> {usuario.nome}</p>
        <p><strong>Email:</strong> {usuario.email}</p>

        <button style={estilos.botao}>Editar Perfil</button>
        <button style={{ ...estilos.botao, backgroundColor: '#e74c3c' }}>Sair</button>
      </div>
    </div>
  );
};

       const estilos = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '40px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh'
  },
  titulo: {
    marginBottom: '20px',
    color: '#333'
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px 30px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'left'
  },
  botao: {
    marginTop: '15px',
    marginRight: '10px',
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Minhaconta;

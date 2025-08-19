import React, { useState } from 'react';
import './login.css'; // Certifique-se de que o arquivo CSS esteja no mesmo diretório

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de login
    if (email === 'usuario@movietracker.com' && password === '123456') {
      alert('Login bem-sucedido! 🎉');
      // Navegação futura: useNavigate ou redirecionamento
    } else {
      alert('Email ou senha inválidos. Tente novamente.');
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h1>🎬 MovieTracker</h1>
        <p>Bem-vindo de volta! Faça login para continuar.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="seuemail@exemplo.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Sua senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">Entrar</button>
        </form>

        <p className="signup-text">
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default Login

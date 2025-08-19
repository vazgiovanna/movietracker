import './Minhaconta.css';
import React from 'react';

function Minhaconta() {
	// Informações simuladas
	const userInfo = {
		nome: 'João Silva',
		email: 'joao.silva@email.com',
		telefone: '(11) 91234-5678',
		nascimento: '01/01/1990',
		cidade: 'São Paulo',
	};

	return (
		<div className="minhaconta-container">
			<h2>Minha Conta</h2>
			<form className="minhaconta-form">
				<label>
					Nome:
					<input type="text" value={userInfo.nome} readOnly />
				</label>
				<label>
					Email:
					<input type="email" value={userInfo.email} readOnly />
				</label>
				<label>
					Telefone:
					<input type="text" value={userInfo.telefone} readOnly />
				</label>
				<label>
					Data de Nascimento:
					<input type="text" value={userInfo.nascimento} readOnly />
				</label>
				<label>
					Cidade:
					<input type="text" value={userInfo.cidade} readOnly />
				</label>
			</form>
		</div>
	);
}

export default Minhaconta;

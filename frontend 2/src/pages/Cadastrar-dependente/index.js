import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../../services/api';
import "./styles.css";

export function CadastrarDependente() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  async function handleCadastroDep(e) {
    e.preventDefault();

    const data = { name, phone }

    try {
      await api.post('dependentes', data);
      alert(`Conta criada com sucesso.`);
      navigate.push('/');
    } catch (e) {
      alert('Erro na criação do usuário!');
    }
  }

  return (
    <div className="container-cadDepend">
      <div className="cadastrarDep">
        <section className="formulario-cadDep">
          <form onSubmit={handleCadastroDep} >
            <h1>Cadastre dependentes</h1>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="telephone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <div className="newDependente-button">
            <button
              id="button-newD"
              type="submit"
              onClick={() => alert("Teste")} 
            >
              Cadastrar
            </button>

            <Link to="/fun">Fechar</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

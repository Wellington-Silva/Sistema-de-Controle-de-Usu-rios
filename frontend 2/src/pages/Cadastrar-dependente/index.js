import React, { useState } from "react";
import { Link } from "react-router-dom";
// import api from '../../services/api';
import "./styles.css";

export function CadastrarDependente() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="container-cadDepend">
      <div className="cadastrarDep">
        <section className="formulario-cadDep">
          <form>
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

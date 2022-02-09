import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Cadastrar() {
  const [nameFunc, setNameFun] = useState("");
  const [telefone, setPhone] = useState("");
  const [dtContratacao, setdtContratacao] = useState("");
  const [dtDesligamento, setdtDesligamento] = useState("");

  return (
    <div className="container-cad">
      <div className="cadastrar-container">
        <section className="formulario-cad">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("...");
            }}
          >
            <h1>Cadastre-se</h1>
            <input
              type="text"
              placeholder="Nome"
              value={nameFunc}
              onChange={(e) => setNameFun(e.target.value)}
            />
            <input
              type="text"
              placeholder="telefone"
              value={telefone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="date"
              placeholder="dtContratacao"
              value={dtContratacao}
              onChange={(e) => setdtContratacao(e.target.value)}
            />
            <input
              type="date"
              placeholder="dtDesligamento"
              value={dtDesligamento}
              onChange={(e) => setdtDesligamento(e.target.value)}
            />
          </form>
          <div className="container-button">
            <button
              className="button"
              type="submit"
              onClick={() => alert("Teste")}
            >
              Cadastrar
            </button>

            <Link to="/">Login</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

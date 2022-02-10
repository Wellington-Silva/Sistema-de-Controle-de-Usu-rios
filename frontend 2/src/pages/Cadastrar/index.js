import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Cadastrar() {
  const [nameFunc, setNameFun] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

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
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPass(e.target.value)}
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

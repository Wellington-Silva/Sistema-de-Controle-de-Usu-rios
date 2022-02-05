import React from "react";
import './styles.css';

export default function Login() {
    return(
        <div className="container">
            <div className="login-container">
                <section className="formulario">
                    <form>
                        <h1>Faça seu login</h1>
                        <input placeholder="E-mail"></input>
                        <input type="password" placeholder="Senha"></input>
                    </form>
                    <div className="container-button">
                        <button className="button" type="submit">Entrar</button>
                        <a href=".">Cadastrar</a>
                    </div>
                </section>            
            </div>
        </div>
    );
}
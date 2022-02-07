import React, { useState } from "react";
import './styles.css';

export function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return(
        <div className="container">
            <div className="login-container">
                <section className="formulario">
                    <form onSubmit={e => { e.preventDefault(); alert("Seu email: " + email)}} >
                        <h1>Faça seu login</h1>
                        <input 
                            type="email" 
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                    </form>
                    <div className="container-button">
                        <button 
                            className="button" 
                            type="submit"
                            onClick={() => alert("email: " + email + " Senha: " + senha)}
                        >
                            Entrar
                        </button>
                        <a href=".">Cadastrar</a>
                    </div>
                </section>            
            </div>
        </div>
    );
}
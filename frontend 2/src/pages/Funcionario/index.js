import React from "react";
import './styles.css';

import sair from '../../assets/logout.png';
//import func from '../../assets/funcionario.jpg';

import { Link } from "react-router-dom";

export function Funcionario() {
    const name = "Wellington Carvalho";

    const mes = document.getElementById('#mes');
    if(mes !== typeof number) { console.log('Digite um número entre 1 e 12') }

    return(
        <div className="container-fun">      
            <div className="container-left">
                <h2>{name}</h2>
                <div className="usuario-div">Funcionário</div> 
                <footer>
                    <div className="seta"></div>
                    <Link to="/" id="sair" type="submit"
                    onClick={() => alert("Teste")}><img src={sair} alt=""/> Sair</Link>
                </footer>
            </div>

            <div className="container-right">
                <h1>Painel do Funcionário</h1>
                <div className="barra-pesq">
                    <input id="barra-pesquisar" placeholder="Nome"></input>
                </div>

                <div id="func-deslig">
                    <button id="list-func-off" type="submit">Funcionários desligados</button>
                    <input id="mes" placeholder="Mês"></input>
                    <button className="listar">Listar</button>
                </div>

                <div className="dependentes">
                    <div className="image-func"></div>
                    <div className="elements">
                        <label>Nome: </label>
                        <label>Telefone: </label>
                        <label>Data contratação: </label>
                        <label>Data desligamento: </label>
                    </div>
                    <div className="buttons">
                        <button>Listar dependentes</button>
                        <button>Cadastrar dependentes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
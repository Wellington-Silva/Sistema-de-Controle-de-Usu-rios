import React from "react";
import './styles.css';

export function Funcionario ({ name }) {
    return(
        <div className="container">
            <h1> Tela funcionario </h1>
            {/* <div className="container-left">
                <label>{name}</label>
                <button>Sair</button>
                <div className="container-funcionario">Funcionário</div>
            </div> 
            <div className="container-right">
                <div><label placeholder="Digite o nome"></label></div>
            </div> */}
        </div>
    );
}
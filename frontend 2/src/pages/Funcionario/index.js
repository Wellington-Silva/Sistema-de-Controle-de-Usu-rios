import React from "react";
import './styles.css';

export default function Dependentes({ name }) {
    return(
        <div className="container">
            <div className="container-left">
                <label>{name}</label>
                <button>Sair</button>
                <div className="container-funcionario">Funcionário</div>
            </div> 
            <div className="container-right">
                <div><label placeholder="Digite o nome"></label></div>
            </div>
        </div>
    );
}
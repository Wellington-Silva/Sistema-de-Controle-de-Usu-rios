import React from "react";
import './styles.css';

export function Funcionario ({ name }) {
    //const name = props.name;

    return(
        <div className="container-fun">      
            <div className="container-right">
                <title><h1>Tela funcionario</h1></title>
            </div>

            <div className="container-left">
                <label>{name}</label>
                <footer><button id="sair">Sair</button></footer>
            </div>
        </div>
    );
}
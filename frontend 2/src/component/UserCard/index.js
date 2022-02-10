import React from 'react';

import './styles.css';

export const UserCard = ({ image }) => {
    return(
        <div className="dependentes">
            <div className="image-func">
                <img src={image} widht="100%" height="100%"/>
            </div>
            <div className="elements">
                <label>Nome: </label>
                <label>Telefone: </label>
                <label>Data contratação: </label>
                <label>Data desligamento: </label>
            </div>
            <div className="buttons">
                <button id="ListDep">Listar dependentes</button>
                <button id="AddDep">Cadastrar dependentes</button>
            </div>
        </div>
    );
};
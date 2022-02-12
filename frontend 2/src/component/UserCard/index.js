import React from 'react';

import modalAdd from '../Modal';
import './styles.css';

export const UserCard = ({ image }) => {
    return(
        <div className="dependentes">
            <div className="image-func">
                <img src={image} widht="100%" height="100%" alt=''/>
            </div>
            <div className="elements">
                <label>Nome: </label>
                <label>Telefone: </label>
                <label>Data contratação: </label>
                <label>Data desligamento: </label>
            </div>
            <div className="buttons">
                <button id="ListDep">Listar dependentes</button>
                <button id="AddDep" onClick={ () => modalAdd }>Cadastrar dependentes</button>
            </div>
        </div>
    );
};
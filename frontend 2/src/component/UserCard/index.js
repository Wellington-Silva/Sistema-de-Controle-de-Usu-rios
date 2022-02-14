import React from 'react';

import './styles.css';

export const UserCard = ({ image, nome, dtcontratacao, dtdesligamento, phone }) => {
    return(
        <div className="dependentes">
            <div className="image-func">
                <img src={image} width="100%" height="100%" alt=''/>
            </div>
            <div className="elements">
                <label>Nome: {nome} </label>
                <label>Telefone: {phone}</label>
                <label>Data contratação: {dtcontratacao} </label>
                <label>Data desligamento: {dtdesligamento}</label>
            </div>
            <div className="buttons">
                <button id="ListDep">Listar dependentes</button>
                <button id="AddDep" onClick="Olá">Cadastrar dependentes</button>
            </div>
        </div>
    );
};
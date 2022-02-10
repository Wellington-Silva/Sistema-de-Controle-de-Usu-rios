import React, { useState } from "react";
import './styles.css';

import sair from '../../assets/logout.png';
//import func from '../../assets/funcionario.jpg';
import { UserCard } from '../../component/UserCard';

import { Link } from "react-router-dom";

export function Funcionario() {
    const name = "Wellington Carvalho";

    const [mes, setMes] = useState(""); 

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
                    <input type="month" id="mes" placeholder="Mês" onChange={(e)=>{setMes(e.target.value)}}></input>
                    <button id="listar" onClick={()=>{alert(mes)}}>Listar</button>
                </div>

                <section className="scroll" > 
                    <UserCard image="http://source.unsplash.com/random/180x200?egirls" />
                    <UserCard image="http://source.unsplash.com/random/180x200?coach"/>
                    <UserCard image="http://source.unsplash.com/random/180x200?woman"/>
                    <UserCard image="http://source.unsplash.com/random/180x200?girl"/>
                    <UserCard image="http://source.unsplash.com/random/180x200?dog"/>
                    <UserCard image="http://source.unsplash.com/random/180x200?cat"/>
                    <UserCard image="http://source.unsplash.com/random/180x200?woman"/>
                    <UserCard image="http://source.unsplash.com/random/180x200?man"/>
                    <UserCard image="http://source.unsplash.com/random/180x200?woman"/>
                </section>

            </div>
        </div>
    );
}
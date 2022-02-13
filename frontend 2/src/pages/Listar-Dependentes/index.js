import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCard } from '../../component/UserCard';
import api from '../../services/api';
import './styles.css';

export function ListarDependente() {

  const navigate = useNavigate();

  async function handleListDep(e) {
    e.preventDefault();

    try {
      await api.get('dependentes');
      alert(`OK`);
      navigate.push('/');
    } catch (e) {
      alert('Erro na listagem de dependentes!');
    }
  }
  return (
    <div className="container-ListDep">
      <h1>Listagem de dependentes</h1>
      <section className="scroll" onClick={handleListDep}> 
        <UserCard image="http://source.unsplash.com/random/180x200?egirls" />
        <UserCard image="http://source.unsplash.com/random/180x200?coach"/>
      </section>
      <Link to="/fun">Voltar</Link>
    </div>
  );
}
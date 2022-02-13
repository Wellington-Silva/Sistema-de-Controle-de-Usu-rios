package com.br.ifs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.br.ifs.model.Funcionario;
import com.br.ifs.model.Usuario;
//import com.br.ifs.model.Usuario;
//import com.br.ifs.model.Usuario;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario, Long>, CrudRepository<Funcionario, Long> {
	Funcionario getByNome(Usuario nome, int mes);
	Funcionario findAllBydtdesligamento(Funcionario dtdesligamento, int mes);
	Funcionario findAllContratados(Funcionario dtcontratacao);
	//@Query("select usuario from usuario from usuario.nome like ?1")
	
}

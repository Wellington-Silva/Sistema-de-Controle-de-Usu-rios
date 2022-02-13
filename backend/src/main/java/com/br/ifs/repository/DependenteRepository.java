package com.br.ifs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;		
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.br.ifs.model.Dependentes;


@Repository
public interface DependenteRepository extends CrudRepository<Dependentes, Long>, JpaRepository<Dependentes, Long> {
	//Dependentes getByNome(Usuario nome);
	List<Dependentes> findAllByIdfuncionario(Dependentes idfuncionario);
}

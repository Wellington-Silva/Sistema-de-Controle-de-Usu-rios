package com.br.ifs.service;

import java.util.List;		

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.br.ifs.model.Dependentes;
import com.br.ifs.model.Funcionario;
//import com.br.ifs.model.Usuario;
import com.br.ifs.repository.DependenteRepository;
//import com.br.ifs.model.Usuario;
import com.br.ifs.repository.FuncionarioRepository;

@Service
public class FuncionarioService {
	
	@Autowired
	DependenteRepository dependenteRepository;
	
	// Hello funcionário
	public String hello() {
		return "Hello funcionário";
	}
	
	@Autowired
	FuncionarioRepository funcionarioRepository;
	
	// Consulta todos funcionarios cadastrados
	public List<Funcionario> consultarFuncionarios() {
		return funcionarioRepository.findAll();
	}
	
	public Funcionario inserirFuncionario(Funcionario funcionario) {
		return funcionarioRepository.save(funcionario);
	}
	
	/*// Consultar Funcionário por parte do nome;
	public Funcionario consultarPorParte(Usuario usuario) {
		return funcionarioRepository.getByNome(usuario);
	}*/
	
	/* Consultar funcionários contratados em um determinado mês;
	public List<Funcionario> funcionariosContratados(Funcionario funcionario) {
		return funcionarioRepository.findAllContratados(funcionario.getDtcontratacao());
	}*/
		
	/* Consultar funcionários desligados em ordem decrescente;
	public List<Funcionario> funcionariosDelisgados(Funcionario funcionarios, int mes) {
		//return funcionarioRepository.FindAllBydtdesligamento(funcionario);
		return funcionarioRepository.getById(funcionarios, mes);
	}*/
	
	/*  Autenticar Usuário
    public ResponseEntity<Funcionario> autenticar(UsuarioDTO usuario) {
        Usuario usuario2 = usuarioRepository.findByLoginAndSenha(usuario.getLogin(), usuario.getSenha());
        if (usuario2 == null) return ResponseEntity.noContent().build();
        else return ResponseEntity.ok(usuario2);
    }*/
}

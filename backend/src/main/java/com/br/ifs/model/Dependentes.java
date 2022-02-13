package com.br.ifs.model;

import javax.persistence.Column;					
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "dependentes")
public class Dependentes {
	@Id 
	@GeneratedValue
	private Long idusuario;
	
	@Column(nullable = false)
	private String idfuncionario;
	
	@Column(nullable = false)
	private String dtnascimento;
	
	@Column(nullable = false)
	private String phone;

	public Long getIdusuario() {
		return idusuario;
	}

	public void setIdusuario(Long idusuario) {
		this.idusuario = idusuario;
	}

	public String getIdfuncionario() {
		return idfuncionario;
	}

	public void setIdfuncionario(String idfuncionario) {
		this.idfuncionario = idfuncionario;
	}

	public String getDtnascimento() {
		return dtnascimento;
	}

	public void setDtnascimento(String dtnascimento) {
		this.dtnascimento = dtnascimento;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
}

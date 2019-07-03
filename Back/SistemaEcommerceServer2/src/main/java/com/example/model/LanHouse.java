package com.example.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LanHouse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer codigo;
	private String nome;
	private String pagamento;
	private String tempoDeMaquina;

	public LanHouse() {
		super();
	}

	public LanHouse(Integer codigo, String nome, String pagamento, String tempoDeMaquina) {
		super();
		this.codigo = codigo;
		this.nome = nome;
		this.pagamento = pagamento;
		this.tempoDeMaquina = tempoDeMaquina;
	}

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getPagamento() {
		return pagamento;
	}

	public void setPagamento(String pagamento) {
		this.pagamento = pagamento;
	}

	public String getTempoDeMaquina() {
		return tempoDeMaquina;
	}

	public void setTempoDeMaquina(String tempoDeMaquina) {
		this.tempoDeMaquina = tempoDeMaquina;
	}

}

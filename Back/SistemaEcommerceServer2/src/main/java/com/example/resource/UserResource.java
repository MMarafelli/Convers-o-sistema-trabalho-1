package com.example.resource;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.User;
import com.example.repository.UserRepository;

@RestController
@RequestMapping(value = "/login")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserResource {

	@Autowired
	private UserRepository service;

	@PostMapping
	public ResponseEntity<User> login(@Valid @RequestBody User user) {
		
		user = service.findByEmail(user.getEmail());

		if (user == null) {
			User usuarioRetorno = new User();
			usuarioRetorno.setEmail("");
			usuarioRetorno.setPassword("");
			usuarioRetorno.setMsgUsuario("email inválido");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(usuarioRetorno);
		} else if (user.getEmail().equals(user.getEmail()) && !user.getPassword().equals(user.getPassword())) {
			User usuarioRetorno = new User();
			usuarioRetorno.setEmail("");
			usuarioRetorno.setPassword("");
			usuarioRetorno.setMsgUsuario("senha incorreta");
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(usuarioRetorno);
		}
		user.setMsgUsuario("Usuario Logado com Sucesso");
		System.err.println("Usuario retorno : " + user);
		return ResponseEntity.ok().body(user);
	}
}

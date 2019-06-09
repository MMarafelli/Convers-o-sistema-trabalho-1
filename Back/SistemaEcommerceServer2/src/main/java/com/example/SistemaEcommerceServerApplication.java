package com.example;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.model.User;
import com.example.repository.UserRepository;


@SpringBootApplication
public class SistemaEcommerceServerApplication implements CommandLineRunner {
	
	@Autowired
	private UserRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(SistemaEcommerceServerApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {	
		User user = new User(null,"teste@email.com", "123456", null);
		repository.save(user);
	}


}

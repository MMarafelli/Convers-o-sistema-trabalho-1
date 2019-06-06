package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.domain.Filme;

@Repository
public interface FilmeRepository extends JpaRepository<Filme,Integer>{

}

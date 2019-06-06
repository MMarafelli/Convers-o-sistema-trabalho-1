package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.domain.Games;

@Repository
public interface GamesRepository extends JpaRepository<Games, Integer> {

}

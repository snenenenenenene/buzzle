package com.buzzle.backend.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.buzzle.backend.domain.model.User;

public interface UserDAL extends JpaRepository<User, Integer> {
	User findByUsername(String username);

	User findByEmail(String email);
}
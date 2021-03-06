package com.buzzle.backend.persistence;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.buzzle.backend.domain.model.Role;

public interface RoleDAL extends JpaRepository<Role, Integer> {
	Optional<Role> findById(Integer id);
	
	Optional<Role> findByRoleName(String roleName);
};
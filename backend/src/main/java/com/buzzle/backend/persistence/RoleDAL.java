package com.bavostepbros.leap.persistence;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bavostepbros.leap.domain.model.Role;

public interface RoleDAL extends JpaRepository<Role, Integer> {
	Optional<Role> findById(Integer id);
	
	Optional<Role> findByRoleName(String roleName);
};
package com.buzzle.backend.domain.service.roleservice;

import java.util.List;

import com.buzzle.backend.domain.model.Role;

public interface RoleService {
	Role save(String roleName, Integer weight);

	Role get(Integer id);

	List<Role> getAll();

	Role update(Integer id, String roleName, Integer weight);

	void delete(Integer id);

	boolean existsById(Integer id);

	boolean existsByRoleName(String roleName);
	
	Role getRoleByRoleName(String roleName);
}
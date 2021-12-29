package com.buzzle.backend.domain.service.userservice;

import java.util.List;

import com.buzzle.backend.domain.model.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

public interface UserService {
	User save(String username, String password, String email, Integer roleId);

	User get(Integer id);

	User getByEmail(String email);

	User getByName(String name);

	List<User> getAll();

	User update(Integer userId, String username, String password, String email, Integer roleId);

	User update(Integer userId, String username, String email, Integer roleId);

	void delete(Integer id);

	Authentication authenticate(String email, String password) throws AuthenticationException;

	boolean existsById(Integer id);

	boolean existsByUsername(String username);

	boolean existsByEmail(String email);

	String generatePassword();
}
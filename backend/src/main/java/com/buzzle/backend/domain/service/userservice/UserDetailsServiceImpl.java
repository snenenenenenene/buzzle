package com.buzzle.backend.domain.service.userservice;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.buzzle.backend.domain.model.Role;
import com.buzzle.backend.domain.model.User;
import com.buzzle.backend.domain.service.roleservice.RoleService;
import com.buzzle.backend.persistence.UserDAL;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserDAL userDAL;

	@Autowired
    private RoleService roleService;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userDAL.findByEmail(email);
		if (user == null) {
			throw new UsernameNotFoundException("Email " + email + " not found");
		}
		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
				getGrantedAuthority(user));
	}

	private Collection<GrantedAuthority> getGrantedAuthority(User user) {
		Collection<GrantedAuthority> authorities = new ArrayList<>();
		Role highestRole = new Role("test", Integer.MAX_VALUE);
		String authority = "";
		
		for (Role role : user.getRoles()) {
			if (role.getWeight() < highestRole.getWeight()) {
				highestRole = role;
			}
		}
		
		switch (roleService.get(highestRole.getRoleId()).getRoleName()) {
		case "USER_ADMIN":
			authority = "USER_ADMIN";
			break;
		case "APP_ADMIN":
			authority = "APP_ADMIN";
			break;
		case "VIEWING_USER":
			authority = "VIEWING_USER";
			break;
		case "CREATING_USER":
			authority = "CREATING_USER";
			break;
		}
		System.out.println("authority:" + authority);
		authorities.add(new SimpleGrantedAuthority(authority));
		return authorities;
	}

}
package com.buzzle.backend.controller;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.buzzle.backend.domain.model.dto.BasicRoleDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.buzzle.backend.configuration.jwtconfig.JwtUtility;

import com.buzzle.backend.domain.model.Role;
import com.buzzle.backend.domain.model.User;
import com.buzzle.backend.domain.model.dto.RoleDto;
import com.buzzle.backend.domain.model.dto.UserDto;
import com.buzzle.backend.domain.service.emailservice.EmailService;
import com.buzzle.backend.domain.service.roleservice.RoleService;
import com.buzzle.backend.domain.service.userservice.UserService;
import com.buzzle.backend.persistence.UserDAL;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private JwtUtility jwtUtility;

    @PreAuthorize("hasAuthority('USER_ADMIN') or hasAuthority('APP_ADMIN') or hasAuthority('CREATING_USER') or hasAuthority('VIEWING_USER')")
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public UserDto addUser(@ModelAttribute("username") String username, @ModelAttribute("roleId") Integer roleId,
                           @ModelAttribute("email") String email) {
        String password = userService.generatePassword();

        User user = userService.save(username, password, email, roleId);
        emailService.sendNewUserMessage(user.getEmail(), password);
        return new UserDto(user.getUserId(), user.getUsername(), user.getEmail(), convertRoles(user.getRoles()));
    }

    @PreAuthorize("hasAuthority('USER_ADMIN') or hasAuthority('APP_ADMIN') or hasAuthority('CREATING_USER') or hasAuthority('VIEWING_USER')")
    @GetMapping("/{id}")
    public UserDto getUserById(@ModelAttribute("id") Integer id) {
        User user = userService.get(id);
        return new UserDto(user.getUserId(), user.getUsername(), user.getEmail(), convertRoles(user.getRoles()));
    }

    @PreAuthorize("hasAuthority('USER_ADMIN') or hasAuthority('APP_ADMIN') or hasAuthority('CREATING_USER') or hasAuthority('VIEWING_USER')")
    @GetMapping("/email/{email}")
    public UserDto getUserByEmail(@ModelAttribute("email") String email) {
        User user = userService.getByEmail(email);
        return new UserDto(user.getUserId(), user.getUsername(), user.getEmail(), convertRoles(user.getRoles()));
    }

    @PreAuthorize("hasAuthority('USER_ADMIN')")
    @GetMapping()
    public List<UserDto> getAllUsers() {
        List<User> users = userService.getAll();
        List<UserDto> usersDto = users.stream().map(user -> new UserDto(user.getUserId(), user.getUsername(),
                user.getEmail(), convertRoles(user.getRoles()))).collect(Collectors.toList());
        return usersDto;
    }

    @PreAuthorize("hasAuthority('USER_ADMIN')")
    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public UserDto updateUser(
            @ModelAttribute("roleId") Integer roleId,
            @ModelAttribute("userId") Integer userId,
            @ModelAttribute("username") String username,
            @ModelAttribute("email") String email) {
        User user = userService.update(userId, username, email, roleId);
        return new UserDto(user.getUserId(), user.getUsername(), user.getEmail(), convertRoles(user.getRoles()));
    }

    @PreAuthorize("hasAuthority('USER_ADMIN')")
    @DeleteMapping(path = "/{id}")
    public void deleteUser(@PathVariable("id") Integer id) {
        userService.delete(id);
    }

    @PostMapping(value = "/authenticate", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> authenticate(@ModelAttribute("email") String email,
                                               @ModelAttribute("password") String password) {
        try {
            userService.authenticate(email, password);
            User user = userService.getByEmail(email);
            System.out.println("User in authenticate: " + user.getUsername());
            Iterator<Role> roles = user.getRoles().iterator();
            Role role = roles.hasNext() ? roles.next() : roleService.getRoleByRoleName("CREATING_USER");
            System.out.println("Role in authenticate: " + role.getRoleName());
            return ResponseEntity.ok(jwtUtility.createToken(user.getEmail(), role));
        } catch (AuthenticationException e) {
            return ResponseEntity.ok(e.getMessage());
        }
    }

    @PreAuthorize("hasAuthority('USER_ADMIN') or hasAuthority('APP_ADMIN') or hasAuthority('CREATING_USER') or hasAuthority('VIEWING_USER')")
    @PutMapping(path = "changePassword", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String changePassword(
            @ModelAttribute("password") String password,
            @RequestHeader("Authorization") String token) {
        String jwt = token.substring(7);
        String email = jwtUtility.extractEmail(jwt);
        User user = userService.getByEmail(email);

        Integer roleId = user.getRoles().iterator().next().getRoleId();
        userService.update(user.getUserId(), user.getUsername(), password, email, roleId);
        return "Password saved";
    }

    @PutMapping(path = "/forgotPassword", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String forgotPassword(
            @ModelAttribute("email") String email) {
        String result = "";
        if (userService.existsByEmail(email)) {
            User user = userService.getByEmail(email);
            String password = userService.generatePassword();
            Integer userId = user.getUserId();
            String username = user.getUsername();
            Integer roleId = user.getRoles().iterator().next().getRoleId();
            userService.update(userId, username, password, email, roleId);
            emailService.sendForgotPassword(email, password);
            result = "Email sent.";
        }
        return result;
    }

    private Set<RoleDto> convertRoles(Set<Role> roles) {
        Set<RoleDto> roleDtos = new HashSet<>();
        for (Role role : roles) {
            roleDtos.add(new RoleDto(role.getRoleId(), role.getRoleName(), role.getWeight()));
        }
        return roleDtos;
    }

}

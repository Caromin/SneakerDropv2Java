package com.christian.DAOServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.christian.Entities.Users;
import com.christian.Repositories.UserRepository;

@Service
public class UserDAOService {
	
	// lets JPA know dependency injection
	@Autowired
	private UserRepository userRepository;

	public void addUser(Users user) {
		userRepository.save(user);
	}
	
	public boolean checkIfExists(String username) {
		return userRepository.findUsernameExists(username);
	}

	public Users findByUsername(Users user) {
		return userRepository.findByUsername(user);
	};
}

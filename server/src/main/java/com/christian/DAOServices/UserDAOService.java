package com.christian.DAOServices;

import java.util.ArrayList;
import java.util.List;

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
	
	public List<String> findAllUsers() {
		List<String> users = new ArrayList<>();
		userRepository.findAll().forEach((index) -> {
			users.add(index.getUsername());
		});
		return users;
	};
		
}

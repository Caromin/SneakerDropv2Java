package com.christian.DAOServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.christian.Entities.Users;
import com.christian.Repositories.UserRepository;
import com.christian.Repositories.UserRepositoryCustom;

@Service
public class UserDAOService {
	
	// lets JPA know dependency injection
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordHashing passwordHashing;

	public void addUser(Users user) {
		Object[] hashObject = this.passwordHashing.generateHash(user.getPassword());
		user.setPassword(hashObject[1].toString());
		user.setSaltValue(hashObject[0].toString());
		userRepository.save(user);
	}
	
	public boolean checkIfExists(String username) {
		return userRepository.findUsernameExists(username);
	}

//	public Users findByUsername(Users user) {
//		return userCustom.findByUsername(user);
//	};
}

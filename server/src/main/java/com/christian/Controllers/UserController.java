package com.christian.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.christian.DAOServices.UserDAOService;
import com.christian.Entities.Users;

@RestController
public class UserController {

	@Autowired
	private UserDAOService userDaoService;
	
	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.POST, value = "/addUser")
	public boolean addUser(@RequestBody Users user) {
		try {
			userDaoService.addUser(user);
			return true;
			
		} catch (Exception e) {
			return false;
		}
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.POST, value = "/users/exists")
	public boolean checkForUniqueUsername(@RequestBody String username) {
		return userDaoService.checkIfExists(username.trim());
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.POST, value = "/compare")
	public Users findByUsername(@RequestBody Users user) {
		try {
			return userDaoService.findByUsername(user);
		} catch (Exception e) {
			return null;
		}
	}
}

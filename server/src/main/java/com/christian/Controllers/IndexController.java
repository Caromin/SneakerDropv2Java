package com.christian.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.christian.DAOServices.UserDAOService;
import com.christian.Entities.Users;

@RestController
public class IndexController {

	// lets JPA know dependency injection
	@Autowired
	private UserDAOService userDaoService;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public List<Users> getUsers() {
		return userDaoService.getAllUsers();
	}
}

package com.christian.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.christian.DAOServices.UserDAOService;
import com.christian.DAOServices.ProductsDAOService;
import com.christian.Entities.Products;
import com.christian.Entities.Users;

@RestController
public class IndexController {

	// lets JPA know dependency injection
	@Autowired
	private UserDAOService userDaoService;
	
	@Autowired
	private ProductsDAOService productsDaoService;
	
	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.GET, value = "/recent")
	public List<Products> getRecentProducts() {
		return productsDaoService.getRecentProducts();
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.POST, value = "/addUser")
	public void addUser(@RequestBody Users user) {
		userDaoService.addUser(user);
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.GET, value = "/users")
	public List<String> findAllUsers() {
		return userDaoService.findAllUsers();
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.POST, value = "/compare")
	public Users findByUsername(@RequestBody Users user) {
		return userDaoService.findByUsername(user);
	}
}

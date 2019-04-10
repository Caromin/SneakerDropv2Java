package com.christian.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.christian.DAOServices.UserDAOService;
import com.christian.DAOServices.ProductsDAOService;
import com.christian.Entities.Products;

@RestController
public class IndexController {

//	// lets JPA know dependency injection
//	@Autowired
//	private UserDAOService userDaoService;
	
	@Autowired
	private ProductsDAOService productsDaoService;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public List<Products> getRecentProducts() {
		return productsDaoService.getRecentProducts();
	}
	
}

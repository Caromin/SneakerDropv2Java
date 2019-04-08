package com.christian.DAOServices;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.christian.Entities.Products;
import com.christian.Repositories.ProductRepository;

@Service
public class ProductsDAOService {

	@Autowired
	private ProductRepository productRepository;
	
	public List<Products> getRecentProducts() {
		
		List<Products> products = new ArrayList<>();		
		productRepository.findAll().forEach(products:: add);
		
		return products;
	}

}

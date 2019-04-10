package com.christian.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.christian.Entities.Products;

public interface ProductRepository extends CrudRepository<Products, Integer>{

	@Query(value = "SELECT * FROM Products ORDER BY id DESC LIMIT 4", nativeQuery = true)
	List<Products> findAllOrderByIdDesc();
}

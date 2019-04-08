package com.christian.Repositories;

import org.springframework.data.repository.CrudRepository;

import com.christian.Entities.Products;

public interface ProductRepository extends CrudRepository<Products, Integer>{

}

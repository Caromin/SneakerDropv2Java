package com.christian.Repositories;

import org.springframework.data.repository.CrudRepository;
import com.christian.Entities.Users;

public interface UserRepository extends CrudRepository<Users, Integer>{

	Users findByUsername(String username);

}

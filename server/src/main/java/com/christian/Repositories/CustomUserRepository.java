package com.christian.Repositories;

import com.christian.Entities.Users;

public interface CustomUserRepository {
	
	public Users findByUsername(Users user);
}

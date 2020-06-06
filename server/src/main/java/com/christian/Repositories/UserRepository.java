package com.christian.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.christian.Entities.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer>, UserRepositoryCustom {

}

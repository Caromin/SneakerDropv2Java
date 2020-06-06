package com.christian.Repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import com.christian.Entities.Users;

public class UserRepositoryImpl implements UserRepositoryCustom {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public boolean findUsernameExists(String username) {
		
		String paramQuery = "SELECT * FROM Users u WHERE u.username = :user ";
		Query query = em.createNativeQuery(paramQuery, Users.class);
		query.setParameter("user", username);

		try {
			@SuppressWarnings("unchecked")
			List<Users> results = query.getResultList();
			
			if (results.size() > 0) {
				return true;
			} else {
				return false;
			}
		} catch (NoResultException e) {
			return false;
		}
	}
}

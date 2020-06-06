package com.christian.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Users {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="username")
	@NotNull
	private String username;
	
	@Column(name="password")
	@NotNull
	private String password;
	
	@Column(name="isActive", columnDefinition="boolean default true")
	private Boolean isActive;
	
	@Column(name="saltValue")
	private String saltValue;

	public Users() {
		this.isActive = true;
	}
	
	public Users(Integer id, String username, String password, Boolean isActive) {
		super();
		this.id = id;
		this.username = username.trim();
		this.password = password.trim();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username.trim();
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password.trim();
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
	
	public String getSaltValue() {
		return saltValue;
	}
	
	public void setSaltValue(String saltValue) {
		this.saltValue = saltValue;
	}
	
}
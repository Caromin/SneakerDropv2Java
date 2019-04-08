package com.christian.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Addresses {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@NotNull
	@Column(name="street")
	private String street;
	
	@NotNull
	@Column(name="city")
	private String city;
	
	@NotNull
	@Column(name="state")
	private String state;
	
	@NotNull
	@Column(name="zipcode")
	private Integer zipcode;
	
	@ManyToOne(optional=false)
	@JoinColumn(name="userId", nullable=false, updatable=false, referencedColumnName="id")
	private Users userId;
	
	@Column(name="isActive", columnDefinition="boolean default true")
	private Boolean isActive;
	
	public Addresses() {}
	
	public Addresses(Integer id, String street, String city, String state, Integer zipcode, Users userId,
			Boolean isActive) {
		super();
		this.id = id;
		this.street = street;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.userId = userId;
		this.isActive = isActive;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public Integer getZipcode() {
		return zipcode;
	}
	public void setZipcode(Integer zipcode) {
		this.zipcode = zipcode;
	}
	public Users getUserId() {
		return userId;
	}
	public void setUserId(Users userId) {
		this.userId = userId;
	}
	
	
}

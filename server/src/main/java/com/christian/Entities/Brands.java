package com.christian.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Brands {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="brand")
	@NotNull
	private String brand;
	
	@Column(name="isActive", columnDefinition="boolean default true")
	private Boolean isActive;

	public Brands() {}

	public Brands(Integer id, String brand, Boolean isActive) {
		super();
		this.id = id;
		this.brand = brand;
		this.isActive = isActive;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}
}

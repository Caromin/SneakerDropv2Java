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
public class Listings {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="quantity")
	@NotNull
	private Integer quantity;
	
	@Column(name="size")
	@NotNull
	private Integer size;
	
	@Column(name="productId")
	@NotNull
	@ManyToOne
	@JoinColumn(name="productId", nullable=false, updatable=false, referencedColumnName="id")
	private Products productId;
	
	@Column(name="userId")
	@NotNull
	@ManyToOne
	@JoinColumn(name="userId", nullable=false, updatable=false, referencedColumnName="id")
	private Users userId;
	
	@Column(name="isActive", columnDefinition="boolean default true")
	private Boolean isActive;
	
	public Listings() {}
	
	public Listings(Integer id, Integer quantity, Integer size, Products productId, Users userId, Boolean isActive) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.size = size;
		this.productId = productId;
		this.userId = userId;
		this.isActive = isActive;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Integer getSize() {
		return size;
	}

	public void setSize(Integer size) {
		this.size = size;
	}

	public Products getProductId() {
		return productId;
	}

	public void setProductId(Products productId) {
		this.productId = productId;
	}

	public Users getUserId() {
		return userId;
	}

	public void setUserId(Users userId) {
		this.userId = userId;
	}
	
	
}

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
public class Orders {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name="userId", nullable=false, updatable=false, referencedColumnName="id")
	private Users userId;
	
	@ManyToOne
	@JoinColumn(name="listingId", nullable=false, updatable=false, referencedColumnName="id")
	private Listings listingId;
	
	@Column(name="status")
	@NotNull
	private Integer status;

	@Column(name="isActive", columnDefinition="boolean default true")
	private Boolean isActive;

	public Orders() {}
	
	public Orders(Integer id, Users userId, Listings listingId, Integer status, Boolean isActive) {
		super();
		this.id = id;
		this.userId = userId;
		this.listingId = listingId;
		this.status = status;
		this.isActive = isActive;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Users getUserId() {
		return userId;
	}

	public void setUserId(Users userId) {
		this.userId = userId;
	}

	public Listings getListingId() {
		return listingId;
	}

	public void setListingId(Listings listingId) {
		this.listingId = listingId;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}
	
}

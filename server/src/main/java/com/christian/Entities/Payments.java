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
public class Payments {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="userId")
	@NotNull
	@ManyToOne
	@JoinColumn(name="userId", nullable=false, updatable=false, referencedColumnName="id")
	private Users userId;
	
	@Column(name="number")
	@NotNull
	private Long number;
	
	@Column(name="securitycode")
	@NotNull
	private Integer securitycode;
	
	@Column(name="month")
	@NotNull
	private Integer month;
	
	@Column(name="year")
	@NotNull
	private Integer year;
	
	
	@Column(name="isActive", columnDefinition="boolean default true")
	private Boolean isActive;

	public Payments() {}
	
	
	public Payments(Integer id, Users userId, Long number, Integer securitycode, Integer month, Integer year,
			Boolean isActive) {
		super();
		this.id = id;
		this.userId = userId;
		this.number = number;
		this.securitycode = securitycode;
		this.month = month;
		this.year = year;
		this.isActive = isActive;
	}


	public Boolean getIsActive() {
		return isActive;
	}


	public void setIsActive(Boolean isActive) {
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

	public Long getNumber() {
		return number;
	}

	public void setNumber(Long number) {
		this.number = number;
	}

	public Integer getSecuritycode() {
		return securitycode;
	}

	public void setSecuritycode(Integer securitycode) {
		this.securitycode = securitycode;
	}

	public Integer getMonth() {
		return month;
	}

	public void setMonth(Integer month) {
		this.month = month;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

}

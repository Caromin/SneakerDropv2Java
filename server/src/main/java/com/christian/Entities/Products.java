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
public class Products {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="productName")
	@NotNull
	private String productName;
	
	@Column(name="description")
	@NotNull
	private String description;
	
	@Column(name="color")
	@NotNull
	private String color;
	
	@Column(name="imageUrl")
	@NotNull
	private String imageUrl;
	
	@ManyToOne
	@JoinColumn(name="brandId", nullable=false, updatable=false, referencedColumnName="id")
	private Brands brandId;
	
	@ManyToOne
	@JoinColumn(name="typeId", nullable=false, updatable=false, referencedColumnName="id")
	private Types typeId;
	
	public Products() {}
	
	public Products(Integer id, String productName, String description, String color, String imageUrl, Brands brandId,
			Types typeId, Boolean isActive) {
		super();
		this.id = id;
		this.productName = productName;
		this.description = description;
		this.color = color;
		this.imageUrl = imageUrl;
		this.brandId = brandId;
		this.typeId = typeId;
		this.isActive = isActive;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	@Column(name="isActive", columnDefinition="boolean default true")
	private Boolean isActive;
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public Brands getBrandId() {
		return brandId;
	}

	public void setBrandId(Brands brandId) {
		this.brandId = brandId;
	}

	public Types getTypeId() {
		return typeId;
	}

	public void setTypeId(Types typeId) {
		this.typeId = typeId;
	}
	
	
}

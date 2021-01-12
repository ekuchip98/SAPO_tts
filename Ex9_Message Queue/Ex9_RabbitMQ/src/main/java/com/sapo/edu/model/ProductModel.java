package com.sapo.edu.model;

import lombok.Data;

@Data
public class ProductModel extends BaseModel{

    private String productCode;

    private Integer categoryId;

    private Integer inventoryId;

    private String name;

    private String description;

    private String image;

    private Integer amount;

    private Integer sellNumber;
}

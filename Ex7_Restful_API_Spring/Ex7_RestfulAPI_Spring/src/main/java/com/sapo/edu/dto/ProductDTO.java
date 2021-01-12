package com.sapo.edu.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ProductDTO extends BaseDTO {

    private String productCode;

    private Integer categoryId;

    private Integer inventoryId;

    private String name;

    private String description;

    private String image;

    private Integer amount;

    private Integer sellNumber;

}

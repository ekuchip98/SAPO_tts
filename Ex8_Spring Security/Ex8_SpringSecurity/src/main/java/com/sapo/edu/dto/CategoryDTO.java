package com.sapo.edu.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class CategoryDTO extends BaseDTO {

    private String categoryCode;

    private String name;

    private String description;
}

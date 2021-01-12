package com.sapo.edu.model;

import lombok.Data;

import java.util.Date;
@Data
public class ProductNewModel extends BaseModel{

    private Integer productId;

    private Integer quantity;

    private Date staticsDate;
}

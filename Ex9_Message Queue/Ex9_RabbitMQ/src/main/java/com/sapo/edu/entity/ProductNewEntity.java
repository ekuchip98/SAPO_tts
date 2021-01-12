package com.sapo.edu.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "product_new")
@Data
public class ProductNewEntity extends BaseEntity {


    @Column(name = "product_id")
    private Integer productId;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "statics_date")
    private Date staticsDate;
}

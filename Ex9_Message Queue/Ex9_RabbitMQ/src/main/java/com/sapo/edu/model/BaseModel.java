package com.sapo.edu.model;

import lombok.Data;

import java.util.Date;
@Data
public class BaseModel {
    private Integer id;
    private Date createdDate;
    private Date modifiedDate;
}

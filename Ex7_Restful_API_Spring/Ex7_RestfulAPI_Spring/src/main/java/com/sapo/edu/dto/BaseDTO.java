package com.sapo.edu.dto;

import lombok.Data;

import java.util.Date;

@Data
public class BaseDTO {

    private Integer id;
    private Date createdDate;
    private Date modifiedDate;

}

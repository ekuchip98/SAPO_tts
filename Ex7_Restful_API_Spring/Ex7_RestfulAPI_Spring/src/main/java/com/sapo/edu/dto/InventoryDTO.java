package com.sapo.edu.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class InventoryDTO extends BaseDTO {

    private String inventoryCode;
    private String name;
    private String address;

}

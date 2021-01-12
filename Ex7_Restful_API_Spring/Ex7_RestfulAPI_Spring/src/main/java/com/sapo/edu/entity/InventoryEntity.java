package com.sapo.edu.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "kho")
@Data
public class InventoryEntity extends BaseEntity {

    @NotBlank(message = "inventoryCode la bat buoc")
    @NotNull(message = "không được bỏ trống")
    @Size(max = 20)
    @Column(name = "makho", unique = true)
    private String inventoryCode;

    @Column(name = "ten")
    @Size(max = 50)
    private String name;

    @Column(name = "diadiem")
    @Size(max = 2000)
    private String address;

    @OneToMany(mappedBy = "inventory")
    @JsonIgnore
    private List<ProductEntity> products = new ArrayList<>();

}

package com.sapo.edu.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "loaidanhmuc")
public class CategoryEntity extends BaseEntity {

    @NotBlank(message = "categoryCode la bat buoc")
    @NotNull(message = "không được bỏ trống")
    @Size(max = 20)
    @Column(name = "maloaidanhmuc", unique = true)
    private String categoryCode;

    @Column(name = "ten")
    @Size(max = 50)
    private String name;

    @Column(name = "mota")
    @Size(max = 2000)
    private String description;

    @OneToMany(mappedBy = "category")
    @JsonIgnore
    private List<ProductEntity> products = new ArrayList<>();

}

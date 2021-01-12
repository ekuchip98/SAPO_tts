package com.sapo.edu.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "sanpham")
@Data
public class ProductEntity extends BaseEntity {

    @NotBlank(message = "ProductCode la bat buoc")
    @NotNull(message = "không được bỏ trống")
    @Size(max = 20)
    @Column(name = "masanpham", unique = true)
    private String productCode;

    @Column(name = "ten")
    @Size(max = 50)
    private String name;

    @Column(name = "motasanpham")
    @Size(max = 2000)
    private String description;

    @Column(name = "duongdananh")
    @Size(max = 150)
    private String image;

    @Column(name = "soluongsanpham")
    @Min(value = 0, message = "phải lớn hơn hoặc bằng 0")
    private Integer amount;

    @Column(name = "soluongban")
    @Min(value = 0, message = "phải lớn hơn hoặc bằng 0")
    private Integer sellNumber;
}

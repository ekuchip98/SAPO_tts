package com.sapo.edu.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "role")
public class RoleEntity extends BaseEntity {

    @Column(length = 50)
    private String name;

    @Column(length = 50)
    private String code;

    @JsonIgnore
    @ManyToMany(mappedBy = "roles",fetch = FetchType.EAGER)
    List<UserEntity> users = new ArrayList<>();
}

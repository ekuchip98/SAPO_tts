package com.sapo.edu.repository;

import com.sapo.edu.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {

    List<CategoryEntity> findByNameLike(String name);

}

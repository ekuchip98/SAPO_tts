package com.sapo.edu.repository;

import com.sapo.edu.entity.ProductNewEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductNewRepository extends JpaRepository<ProductNewEntity, Integer> {
    ProductNewEntity findByProductId(Integer id);
}

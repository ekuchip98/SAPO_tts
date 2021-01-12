package com.sapo.edu.repository;

import com.sapo.edu.entity.InventoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InventoryRepository extends JpaRepository<InventoryEntity, Integer> {

    List<InventoryEntity> findByNameLike(String name);
}

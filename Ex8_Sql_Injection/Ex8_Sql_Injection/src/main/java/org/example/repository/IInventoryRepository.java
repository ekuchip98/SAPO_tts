package org.example.repository;


import org.example.model.InventoryModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IInventoryRepository extends JpaRepository<InventoryModel, Integer> {

}

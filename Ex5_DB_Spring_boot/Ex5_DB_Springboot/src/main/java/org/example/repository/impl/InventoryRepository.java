package org.example.repository.impl;

import org.example.model.InventoryModel;
import org.example.repository.IInventoryRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class InventoryRepository  {

    private final EntityManager entityManager;

    public InventoryRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }


    @Transactional(readOnly = true)
    //Hiển thị tất cả Inventory
    public List<InventoryModel> findAll() {
        return entityManager.createQuery("SELECT e FROM InventoryModel e").getResultList();
    }


    public InventoryModel findById(Integer id) {
        return entityManager.find(InventoryModel.class, id);
    }


    public void save(InventoryModel model) {

    }


    public List<String> getInventoryCodes() {
        List<String> list = new ArrayList<>();
        List<InventoryModel> inventoryModels = findAll();
        for (InventoryModel item : inventoryModels){
            list.add(item.getInventoryCode());
        }
        return list;
    }
}

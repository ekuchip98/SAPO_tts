package org.example.controller;

import org.example.model.InventoryModel;
import org.example.repository.IInventoryRepository;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Component
public class InventoryController {

    private final IInventoryRepository iInventoryRepository;

    public InventoryController(IInventoryRepository iInventoryRepository) {
        this.iInventoryRepository = iInventoryRepository;
    }

    public List<InventoryModel> findAll(){
        return iInventoryRepository.findAll();
    }

    public InventoryModel findById(Integer id){
        return iInventoryRepository.findById(id).orElseThrow();
    }

    public void createInventory(InventoryModel model){
        model.setCreatedDate(new Timestamp(System.currentTimeMillis()));
        iInventoryRepository.save(model);
    }

    public void updateInventory(InventoryModel model){
        InventoryModel oldIntentity =iInventoryRepository.findById(model.getId()).orElseThrow();
        model.setId(oldIntentity.getId());
        model.setCreatedDate(oldIntentity.getCreatedDate());
        model.setModifiedDate(new Timestamp(System.currentTimeMillis()));
        iInventoryRepository.save(model);
    }

    public List<String> getInventoryCodes(){
        List<String> list = new ArrayList<>();
        List<InventoryModel> categoryModels = findAll();
        for (InventoryModel item : categoryModels){
            list.add(item.getInventoryCode());
        }
        return list;
    }

}

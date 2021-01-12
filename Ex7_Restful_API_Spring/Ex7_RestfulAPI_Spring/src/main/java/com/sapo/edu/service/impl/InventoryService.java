package com.sapo.edu.service.impl;

import com.sapo.edu.converter.InventoryConverter;
import com.sapo.edu.converter.ProductConverter;
import com.sapo.edu.dto.InventoryDTO;
import com.sapo.edu.dto.ProductDTO;
import com.sapo.edu.entity.InventoryEntity;
import com.sapo.edu.entity.ProductEntity;
import com.sapo.edu.exception.ResourceNotFoundException;
import com.sapo.edu.repository.InventoryRepository;
import com.sapo.edu.service.IInventoryService;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class InventoryService implements IInventoryService {

    private final InventoryRepository inventoryRepository;
    private final InventoryConverter inventoryConverter;
    private final ProductService productService;
    private final ProductConverter productConverter;

    public InventoryService(InventoryRepository inventoryRepository, InventoryConverter inventoryConverter, ProductService productService, ProductConverter productConverter) {
        this.inventoryRepository = inventoryRepository;
        this.inventoryConverter = inventoryConverter;
        this.productService = productService;
        this.productConverter = productConverter;
    }

    @Override
    public List<InventoryDTO> findAll() {
        List<InventoryDTO> list = new ArrayList<>();
        List<InventoryEntity> entities = inventoryRepository.findAll();
        for (InventoryEntity item : entities) {
            InventoryDTO inventoryDTO = inventoryConverter.toDTO(item);
            list.add(inventoryDTO);
        }
        return list;
    }

    @Override
    public List<InventoryDTO> findAll(Pageable pageable) {
        List<InventoryDTO> list = new ArrayList<>();
        List<InventoryEntity> entities = inventoryRepository.findAll(pageable).getContent();
        for (InventoryEntity item : entities) {
            InventoryDTO inventoryDTO = inventoryConverter.toDTO(item);
            list.add(inventoryDTO);
        }
        return list;
    }

    @Override
    public InventoryDTO findById(Integer id) {
        InventoryEntity entity = inventoryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Khong tim thay ID : " + id));
        return inventoryConverter.toDTO(entity);
    }

    @Override
    public int totalItem() {
        return (int) inventoryRepository.count();
    }

    @Override
    public List<InventoryDTO> findByNameLike(String name) {
        List<InventoryDTO> list = new ArrayList<>();
        List<InventoryEntity> entities = inventoryRepository.findByNameLike("%" + name + "%");
        for (InventoryEntity item : entities) {
            InventoryDTO inventoryDTO = inventoryConverter.toDTO(item);
            list.add(inventoryDTO);
        }
        return list;
    }

    @Override
    public InventoryDTO save(InventoryDTO model) {
        InventoryEntity entity;
        if (model.getId() != null) {
            InventoryEntity oldInventory = inventoryRepository.findById(model.getId()).orElseThrow(() -> new ResourceNotFoundException("Khong tim thay ID : " + model.getId()));
            model.setCreatedDate(oldInventory.getCreatedDate());
            model.setModifiedDate(new Date(System.currentTimeMillis()));
            entity = inventoryConverter.toEntity(oldInventory, model);
        } else {
            model.setCreatedDate(new Date(System.currentTimeMillis()));
            entity = inventoryConverter.toEntity(model);
        }
        entity = inventoryRepository.save(entity);
        return inventoryConverter.toDTO(entity);
    }

    @Override
    public void delete(int[] ids) {
        for (int id : ids) {
            InventoryEntity entity = inventoryRepository.getOne(id);
            List<ProductEntity> results = entity.getProducts();
            if (!results.isEmpty()) {
                for (ProductEntity item : results) {
                    ProductDTO productDTO = productConverter.toDTO(item);
                    productService.delete(productDTO.getId());
                }
            }
            inventoryRepository.deleteById(id);
        }
    }
}

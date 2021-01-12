package com.sapo.edu.service.impl;

import com.sapo.edu.converter.ProductConverter;
import com.sapo.edu.dto.ProductDTO;
import com.sapo.edu.entity.CategoryEntity;
import com.sapo.edu.entity.InventoryEntity;
import com.sapo.edu.entity.ProductEntity;
import com.sapo.edu.exception.ResourceNotFoundException;
import com.sapo.edu.repository.CategoryRepository;
import com.sapo.edu.repository.InventoryRepository;
import com.sapo.edu.repository.ProductRepository;
import com.sapo.edu.service.IProductService;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ProductService implements IProductService {

    private final ProductRepository productRepository;
    private final ProductConverter productConverter;
    private final CategoryRepository categoryRepository;
    private final InventoryRepository inventoryRepository;

    public ProductService(ProductRepository productRepository, ProductConverter productConverter, CategoryRepository categoryRepository, InventoryRepository inventoryRepository) {
        this.productRepository = productRepository;
        this.productConverter = productConverter;
        this.categoryRepository = categoryRepository;
        this.inventoryRepository = inventoryRepository;
    }

    //hien thi tat cả san pham
    @Override
    public List<ProductDTO> findAll() {
        List<ProductDTO> list = new ArrayList<>();
        ProductDTO productDTO;
        List<ProductEntity> entities = productRepository.findAll();
        for (ProductEntity item : entities) {
            productDTO = productConverter.toDTO(item);
            productDTO.setCategoryId(item.getCategory().getId());
            productDTO.setInventoryId(item.getInventory().getId());
            list.add(productDTO);
        }
        return list;
    }

    //hien thi san pham co phan trang
    @Override
    public List<ProductDTO> findAll(Pageable pageable) {
        List<ProductDTO> list = new ArrayList<>();
        ProductDTO productDTO;
        List<ProductEntity> entities = productRepository.findAll(pageable).getContent();
        for (ProductEntity item : entities) {
            productDTO = productConverter.toDTO(item);
            productDTO.setCategoryId(item.getCategory().getId());
            productDTO.setInventoryId(item.getInventory().getId());
            list.add(productDTO);
        }
        return list;
    }

    //hien thị san pham theo id
    @Override
    public ProductDTO findById(Integer id) {
        ProductEntity entity = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Khong tim thay ID : " + id));
        ProductDTO productDTO = productConverter.toDTO(entity);
        productDTO.setCategoryId(entity.getCategory().getId());
        productDTO.setInventoryId(entity.getInventory().getId());
        return productDTO;
    }

    //them ,sua san pham
    @Override
    @Transactional
    public ProductDTO save(ProductDTO model) {
        ProductEntity entity;
        if (model.getId() != null) {
            ProductEntity odlProduct = productRepository.findById(model.getId()).orElseThrow(() -> new ResourceNotFoundException("Khong tim thay ID : " + model.getId()));
            model.setModifiedDate(new Date(System.currentTimeMillis()));
            model.setCreatedDate(odlProduct.getCreatedDate());
            entity = productConverter.toEntity(odlProduct, model);
        } else {
            model.setCreatedDate(new Date(System.currentTimeMillis()));
            entity = productConverter.toEntity(model);
        }
        CategoryEntity categoryEntity = categoryRepository.getOne(model.getCategoryId());
        InventoryEntity inventoryEntity = inventoryRepository.getOne(model.getInventoryId());
        entity.setCategory(categoryEntity);
        entity.setInventory(inventoryEntity);
        entity = productRepository.save(entity);
        return productConverter.toDTO(entity);
    }

    //tong so san pham trong tb
    @Override
    public int totalItem() {
        return (int) productRepository.count();
    }

    //tìm kiem theo ten
    @Override
    public List<ProductDTO> findByNameLike(String name) {
        List<ProductDTO> list = new ArrayList<>();
        ProductDTO productDTO;
        List<ProductEntity> entities = productRepository.findByNameLike("%" + name + "%");
        for (ProductEntity item : entities) {
            productDTO = productConverter.toDTO(item);
            productDTO.setCategoryId(item.getCategory().getId());
            productDTO.setInventoryId(item.getInventory().getId());
            list.add(productDTO);
        }
        return list;
    }

    @Override
    public void delete(int[] ids) {
        for (int id : ids) {
            productRepository.deleteById(id);
        }
    }

    @Override
    public void delete(int id) {
        productRepository.deleteById(id);
    }
}

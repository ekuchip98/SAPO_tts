package com.sapo.edu.service.impl;

import com.sapo.edu.converter.CategoryConverter;
import com.sapo.edu.converter.ProductConverter;
import com.sapo.edu.dto.CategoryDTO;
import com.sapo.edu.dto.ProductDTO;
import com.sapo.edu.entity.CategoryEntity;
import com.sapo.edu.entity.ProductEntity;
import com.sapo.edu.exception.ResourceNotFoundException;
import com.sapo.edu.repository.CategoryRepository;
import com.sapo.edu.service.ICategoryService;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CategoryService implements ICategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryConverter categoryConverter;
    private final ProductConverter productConverter;
    private final ProductService productService;

    public CategoryService(CategoryRepository categoryRepository, CategoryConverter categoryConverter, ProductConverter productConverter, ProductService productService) {
        this.categoryRepository = categoryRepository;
        this.categoryConverter = categoryConverter;
        this.productConverter = productConverter;
        this.productService = productService;
    }

    @Override
    public List<CategoryDTO> findAll() {
        List<CategoryDTO> list = new ArrayList<>();
        List<CategoryEntity> entities = categoryRepository.findAll();
        for (CategoryEntity item : entities) {
            CategoryDTO categoryDTO = categoryConverter.toDTO(item);
            list.add(categoryDTO);
        }
        return list;
    }

    @Override
    public List<CategoryDTO> findAll(Pageable pageable) {
        List<CategoryDTO> list = new ArrayList<>();
        List<CategoryEntity> entities = categoryRepository.findAll(pageable).getContent();
        for (CategoryEntity item : entities) {
            CategoryDTO categoryDTO = categoryConverter.toDTO(item);
            list.add(categoryDTO);
        }
        return list;
    }

    @Override
    public CategoryDTO findById(Integer id) {
        CategoryEntity entity = categoryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Khong tim thay ID : " + id));
        return categoryConverter.toDTO(entity);
    }

    @Override
    public int totalItem() {
        return (int) categoryRepository.count();
    }

    @Override
    public List<CategoryDTO> findByNameLike(String name) {
        List<CategoryDTO> list = new ArrayList<>();
        List<CategoryEntity> entities = categoryRepository.findByNameLike("%" + name + "%");
        for (CategoryEntity item : entities) {
            CategoryDTO categoryDTO = categoryConverter.toDTO(item);
            list.add(categoryDTO);
        }
        return list;
    }

    @Override
    @Transactional
    public CategoryDTO save(CategoryDTO model) {
        CategoryEntity entity;
        if (model.getId() != null) {
            CategoryEntity odlCategory = categoryRepository.findById(model.getId()).orElseThrow(() -> new ResourceNotFoundException("Khong tim thay ID : " + model.getId()));
            model.setModifiedDate(new Date(System.currentTimeMillis()));
            model.setCreatedDate(odlCategory.getCreatedDate());
            entity = categoryConverter.toEntity(odlCategory, model);
        } else {
            model.setCreatedDate(new Date(System.currentTimeMillis()));
            entity = categoryConverter.toEntity(model);
        }
        entity = categoryRepository.save(entity);
        return categoryConverter.toDTO(entity);
    }

    @Override
    @Transactional
    public void delete(int[] ids) {
        for (int id : ids) {
            CategoryEntity entity = categoryRepository.getOne(id);
            List<ProductEntity> results = entity.getProducts();
            if (!results.isEmpty()) {
                for (ProductEntity item : results) {
                    ProductDTO productDTO = productConverter.toDTO(item);
                    productService.delete(productDTO.getId());
                }
            }
            categoryRepository.deleteById(id);
        }
    }
}

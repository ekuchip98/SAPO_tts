package com.sapo.edu.service;

import com.sapo.edu.dto.CategoryDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICategoryService {

    List<CategoryDTO> findAll();

    List<CategoryDTO> findAll(Pageable pageable);

    CategoryDTO findById(Integer id);

    int totalItem();

    List<CategoryDTO> findByNameLike(String name);

    CategoryDTO save(CategoryDTO model);

    void delete(int[] ids);
}

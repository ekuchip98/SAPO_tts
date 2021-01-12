package com.sapo.edu.service;

import com.sapo.edu.dto.ProductDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {

    List<ProductDTO> findAll();

    List<ProductDTO> findAll(Pageable pageable);

    ProductDTO findById(Integer id);

    ProductDTO save(ProductDTO model);

    int totalItem();

    List<ProductDTO> findByNameLike(String name);

    void delete(int[] ids);

    void delete(int id);
}

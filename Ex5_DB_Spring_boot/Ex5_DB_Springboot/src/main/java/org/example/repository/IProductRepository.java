package org.example.repository;

import org.example.model.ProductModel;

import java.util.List;

public interface IProductRepository {
    List<ProductModel> findAll();
    List<ProductModel> findAllByProcedure();
    ProductModel findById(Integer id);
    void save(ProductModel model);
    void edit(ProductModel model);
    List<String> getProductCodes();
}

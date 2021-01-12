package org.example.controller;
import org.example.model.ProductModel;
import org.example.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public class ProductController {

    @Autowired
    private IProductRepository productRepository;

    public List<ProductModel> findAllByProcedure(){
        return productRepository.findAllByProcedure();
    }

    public void createProduct(ProductModel model){
        productRepository.save(model);
    }

    public void updateProduct(ProductModel model){
        productRepository.edit(model);
    }

    public List<ProductModel> findAll(){
        return productRepository.findAll();
    }

    public  ProductModel findById(Integer id){
        return productRepository.findById(id);
    }

    public List<String> getProductCodes(){
        return productRepository.getProductCodes();
    }

}

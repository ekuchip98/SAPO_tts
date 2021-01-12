package com.sapo.edu.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.sapo.edu.convert.ProductConverter;
import com.sapo.edu.entity.ProductEntity;
import com.sapo.edu.exception.ExceptionUtil;
import com.sapo.edu.model.ProductModel;
import com.sapo.edu.repository.ProductRepository;
import com.sapo.edu.service.IProductService;
import com.sapo.edu.service.rabbitmq.Producer;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {

    private final Producer producer;
    private final ProductRepository productRepository;
    private final ProductConverter productConverter;

    public ProductService(Producer producer, ProductRepository productRepository, ProductConverter productConverter) {
        this.producer = producer;
        this.productRepository = productRepository;
        this.productConverter = productConverter;
    }

    @Override
    public ProductModel sendMessage(Integer id) {
        ProductEntity entity = productRepository.findById(id).orElseThrow(()->new ExceptionUtil("Khong tim thay ID: "+id));
        ProductModel model = productConverter.toDTO(entity);
        this.producer.sendMessages(id);
        return model;
    }
}

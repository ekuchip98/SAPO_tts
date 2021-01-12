package com.sapo.edu.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.sapo.edu.model.ProductModel;
import com.sapo.edu.service.IProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class RabbitMQAPI {

    private final IProductService productService;

    public RabbitMQAPI(IProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = "/test/{id}")
    public ResponseEntity<ProductModel> sendMessage(@PathVariable Integer id) throws JsonProcessingException {
        return new ResponseEntity<>(productService.sendMessage(id), HttpStatus.CREATED);
    }
}

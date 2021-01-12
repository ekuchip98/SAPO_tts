package com.sapo.edu.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.sapo.edu.model.ProductModel;
import com.sapo.edu.service.IProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/test")
public class KafakaAPI {

    private final IProductService productService;

    public KafakaAPI(IProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = "/product/{id}")
    public ResponseEntity<ProductModel> sendMessageToKafkaTopic(@PathVariable Integer id) throws JsonProcessingException {
        return new ResponseEntity<>(productService.sendMessageToKafkaTopic(id), HttpStatus.CREATED);
    }
}

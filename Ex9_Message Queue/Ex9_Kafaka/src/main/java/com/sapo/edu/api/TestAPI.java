package com.sapo.edu.api;

import com.sapo.edu.entity.ProductNewEntity;
import com.sapo.edu.repository.ProductNewRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestAPI {

    private final ProductNewRepository productNewRepository;

    public TestAPI(ProductNewRepository productNewRepository) {
        this.productNewRepository = productNewRepository;
    }

    @GetMapping(value = "/abc/{id}")
    public ProductNewEntity getTest(@PathVariable Integer id){

        return productNewRepository.findByProductId(id);
    }
}

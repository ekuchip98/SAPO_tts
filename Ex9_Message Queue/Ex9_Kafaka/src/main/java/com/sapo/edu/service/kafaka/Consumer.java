package com.sapo.edu.service.kafaka;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sapo.edu.exception.ExceptionUtil;
import com.sapo.edu.repository.ProductNewRepository;
import com.sapo.edu.convert.ProductNewConverter;
import com.sapo.edu.entity.ProductNewEntity;
import com.sapo.edu.model.ProductModel;
import com.sapo.edu.model.ProductNewModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.util.Date;

@Service
public class Consumer {

    private static final Logger logger = LoggerFactory.getLogger(Consumer.class);
    private final ProductNewRepository productNewRepository;
    private final ProductNewConverter productNewConverter;

    public Consumer(ProductNewRepository productNewRepository, ProductNewConverter productNewConverter) {
        this.productNewRepository = productNewRepository;
        this.productNewConverter = productNewConverter;
    }

    @KafkaListener(topics = "users", groupId = "group_id")
    @Transactional
    public void consume(String message) throws IOException {

        ProductModel  productModel = new ObjectMapper().readValue(message, ProductModel.class);
        ProductNewModel model = new ProductNewModel();
        ProductNewEntity result;

        model.setCreatedDate(new Date(System.currentTimeMillis()));
        model.setProductId(productModel.getId());
        model.setStaticsDate(productModel.getCreatedDate());
        model.setQuantity(productModel.getAmount());
        result = productNewConverter.toEntity(model);

        productNewRepository.save(result);
        logger.info(String.format("#### -> Consumed message -> %s", result));
        logger.info(String.format("#### -> Consumed message -> %s", message));
    }
}

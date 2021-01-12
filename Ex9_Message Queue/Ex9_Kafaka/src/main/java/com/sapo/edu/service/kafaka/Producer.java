package com.sapo.edu.service.kafaka;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sapo.edu.repository.ProductRepository;
import com.sapo.edu.entity.ProductEntity;
import com.sapo.edu.exception.ExceptionUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;



@Service
public class Producer {

    private static final Logger logger = LoggerFactory.getLogger(Producer.class);
    private static final String TOPIC = "users";

    private final KafkaTemplate<String, String> kafkaTemplate;
    private final ProductRepository productRepository;

    public Producer(KafkaTemplate<String, String> kafkaTemplate, ProductRepository productRepository) {
        this.kafkaTemplate = kafkaTemplate;
        this.productRepository = productRepository;
    }

    public void sendMessage(Integer id) throws JsonProcessingException {
        ProductEntity productEntity = productRepository.findById(id).orElseThrow(()->new ExceptionUtil("Khong tim thay ID: "+id));
        String message = new ObjectMapper().writeValueAsString(productEntity);
        logger.info(String.format(" -> Producing message -> %s", message));
        this.kafkaTemplate.send(TOPIC, message);
    }
}

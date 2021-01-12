package com.sapo.edu.service.rabbitmq;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sapo.edu.constant.SystemConstant;
import com.sapo.edu.convert.ProductConverter;
import com.sapo.edu.entity.ProductEntity;
import com.sapo.edu.exception.ExceptionUtil;
import com.sapo.edu.model.ProductModel;
import com.sapo.edu.repository.ProductRepository;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
public class Producer {

    private final RabbitTemplate rabbitTemplate;
    private final ProductRepository productRepository;
    private final ProductConverter productConverter;

    public Producer(RabbitTemplate rabbitTemplate, ProductRepository productRepository, ProductConverter productConverter) {
        this.rabbitTemplate = rabbitTemplate;
        this.productRepository = productRepository;
        this.productConverter = productConverter;
    }

    public void sendMessages(Integer id) {
        ProductEntity productEntity = productRepository.findById(id).orElseThrow(()->new ExceptionUtil("Khong tim thay ID: "+id));
        ProductModel model = productConverter.toDTO(productEntity);
        rabbitTemplate.convertAndSend(SystemConstant.FANOUT_EXCHANGE_NAME, "", model);
        rabbitTemplate.convertAndSend(SystemConstant.TOPIC_EXCHANGE_NAME, "msg.not-important.info", model);
        rabbitTemplate.convertAndSend(SystemConstant.TOPIC_EXCHANGE_NAME, "msg.important.error", model);
    }

}

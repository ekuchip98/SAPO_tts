package com.sapo.edu.service.rabbitmq;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sapo.edu.constant.SystemConstant;
import com.sapo.edu.convert.ProductNewConverter;
import com.sapo.edu.model.ProductModel;
import com.sapo.edu.model.ProductNewModel;
import com.sapo.edu.repository.ProductNewRepository;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
public class Consumer {


    private final ProductNewRepository productNewRepository;
    private final ProductNewConverter productNewConverter;

    public Consumer(ProductNewRepository productNewRepository, ProductNewConverter productNewConverter) {
        this.productNewRepository = productNewRepository;
        this.productNewConverter = productNewConverter;
    }

    @RabbitListener(queues = {SystemConstant.FANOUT_QUEUE_1_NAME})
    @Transactional
    public void receiveMessageFanout2(ProductModel productModel) {

        ProductNewModel model = new ProductNewModel();
        model.setCreatedDate(new Date(System.currentTimeMillis()));
        model.setProductId(productModel.getId());
        model.setStaticsDate(productModel.getCreatedDate());
        model.setQuantity(productModel.getAmount());

        productNewRepository.save(productNewConverter.toEntity(model));
    }
}

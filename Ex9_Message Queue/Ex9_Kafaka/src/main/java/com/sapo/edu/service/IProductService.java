package com.sapo.edu.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.sapo.edu.model.ProductModel;

public interface IProductService {

    ProductModel sendMessageToKafkaTopic(Integer id) throws JsonProcessingException;
}

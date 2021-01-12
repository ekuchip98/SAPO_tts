package com.sapo.edu.convert;

import com.sapo.edu.entity.ProductNewEntity;
import com.sapo.edu.model.ProductNewModel;
import org.springframework.stereotype.Component;

@Component
public class ProductNewConverter implements IConverter<ProductNewEntity, ProductNewModel> {
    @Override
    public ProductNewEntity toEntity(ProductNewModel dto) {
        ProductNewEntity entity = new ProductNewEntity();
        entity.setProductId(dto.getProductId());
        entity.setQuantity(dto.getQuantity());
        entity.setStaticsDate(dto.getStaticsDate());
        entity.setCreatedDate(dto.getCreatedDate());
        entity.setModifiedDate(dto.getModifiedDate());
        return entity;
    }

    @Override
    public ProductNewModel toDTO(ProductNewEntity entity) {
        ProductNewModel model = new ProductNewModel();
        if (entity.getId() != null) {
            model.setId(entity.getId());
        }
        model.setQuantity(entity.getQuantity());
        model.setProductId(entity.getProductId());
        model.setStaticsDate(entity.getStaticsDate());
        model.setCreatedDate(entity.getCreatedDate());
        model.setModifiedDate(entity.getModifiedDate());
        return model;
    }

    @Override
    public ProductNewEntity toEntity(ProductNewEntity entity, ProductNewModel dto) {
        entity.setProductId(dto.getProductId());
        entity.setQuantity(dto.getQuantity());
        entity.setStaticsDate(dto.getStaticsDate());
        entity.setCreatedDate(dto.getCreatedDate());
        entity.setModifiedDate(dto.getModifiedDate());
        return entity;
    }
}

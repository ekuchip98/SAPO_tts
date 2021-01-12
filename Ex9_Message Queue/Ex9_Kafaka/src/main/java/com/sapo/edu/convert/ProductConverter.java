package com.sapo.edu.convert;

import com.sapo.edu.entity.ProductEntity;
import com.sapo.edu.model.ProductModel;
import org.springframework.stereotype.Component;

@Component
public class ProductConverter implements IConverter<ProductEntity, ProductModel> {
    @Override
    public ProductEntity toEntity(ProductModel dto) {
        ProductEntity entity = new ProductEntity();
        entity.setProductCode(dto.getProductCode());
        entity.setName(dto.getName());
        entity.setDescription(dto.getDescription());
        entity.setImage(dto.getImage());
        entity.setAmount(dto.getAmount());
        entity.setSellNumber(dto.getSellNumber());
        entity.setCreatedDate(dto.getCreatedDate());
        entity.setModifiedDate(dto.getModifiedDate());
        return entity;
    }

    @Override
    public ProductModel toDTO(ProductEntity entity) {
        ProductModel dto = new ProductModel();
        if (entity.getId() != null) {
            dto.setId(entity.getId());
        }
        dto.setProductCode(entity.getProductCode());
        dto.setName(entity.getName());

        dto.setDescription(entity.getDescription());
        dto.setImage(entity.getImage());
        dto.setAmount(entity.getAmount());
        dto.setSellNumber(entity.getSellNumber());
        dto.setCreatedDate(entity.getCreatedDate());
        dto.setModifiedDate(entity.getModifiedDate());
        return dto;
    }

    @Override
    public ProductEntity toEntity(ProductEntity entity, ProductModel dto) {
        return null;
    }
}

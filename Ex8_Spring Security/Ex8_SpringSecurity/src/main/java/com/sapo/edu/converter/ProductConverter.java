package com.sapo.edu.converter;

import com.sapo.edu.dto.ProductDTO;
import com.sapo.edu.entity.ProductEntity;
import org.springframework.stereotype.Component;

@Component
public class ProductConverter implements IConverter<ProductEntity, ProductDTO> {
    @Override
    public ProductEntity toEntity(ProductDTO dto) {
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
    public ProductDTO toDTO(ProductEntity entity) {
        ProductDTO dto = new ProductDTO();
        if (entity.getId() != null) {
            dto.setId(entity.getId());
        }
        dto.setProductCode(entity.getProductCode());
        dto.setName(entity.getName());
        dto.setCategoryId(entity.getCategory().getId());
        dto.setInventoryId(entity.getInventory().getId());
        dto.setDescription(entity.getDescription());
        dto.setImage(entity.getImage());
        dto.setAmount(entity.getAmount());
        dto.setSellNumber(entity.getSellNumber());
        dto.setCreatedDate(entity.getCreatedDate());
        dto.setModifiedDate(entity.getModifiedDate());
        return dto;
    }

    @Override
    public ProductEntity toEntity(ProductEntity entity, ProductDTO dto) {

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
}

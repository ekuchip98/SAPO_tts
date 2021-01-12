package com.sapo.edu.converter;

import com.sapo.edu.dto.InventoryDTO;
import com.sapo.edu.entity.InventoryEntity;
import org.springframework.stereotype.Component;

@Component
public class InventoryConverter implements IConverter<InventoryEntity, InventoryDTO> {
    @Override
    public InventoryEntity toEntity(InventoryDTO dto) {
        InventoryEntity entity = new InventoryEntity();
        entity.setInventoryCode(dto.getInventoryCode());
        entity.setName(dto.getName());
        entity.setAddress(dto.getAddress());
        entity.setCreatedDate(dto.getCreatedDate());
        entity.setModifiedDate(dto.getModifiedDate());
        return entity;
    }

    @Override
    public InventoryDTO toDTO(InventoryEntity entity) {
        InventoryDTO dto = new InventoryDTO();
        if (entity.getId() != null) {
            dto.setId(entity.getId());
        }
        dto.setInventoryCode(entity.getInventoryCode());
        dto.setName(entity.getName());
        dto.setAddress(entity.getAddress());
        dto.setCreatedDate(entity.getCreatedDate());
        dto.setModifiedDate(entity.getModifiedDate());
        return dto;
    }

    @Override
    public InventoryEntity toEntity(InventoryEntity entity, InventoryDTO dto) {
        entity.setInventoryCode(dto.getInventoryCode());
        entity.setName(dto.getName());
        entity.setAddress(dto.getAddress());
        entity.setCreatedDate(dto.getCreatedDate());
        entity.setModifiedDate(dto.getModifiedDate());
        return entity;
    }
}

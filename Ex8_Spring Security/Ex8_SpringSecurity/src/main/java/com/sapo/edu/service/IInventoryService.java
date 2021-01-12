package com.sapo.edu.service;

import com.sapo.edu.dto.InventoryDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IInventoryService {

    List<InventoryDTO> findAll();

    List<InventoryDTO> findAll(Pageable pageable);

    InventoryDTO findById(Integer id);

    int totalItem();

    List<InventoryDTO> findByNameLike(String name);

    InventoryDTO save(InventoryDTO model);

    void delete(int[] ids);

}

package com.sapo.edu.api;

import com.sapo.edu.api.output.InventoryOuput;
import com.sapo.edu.dto.InventoryDTO;
import com.sapo.edu.service.impl.InventoryService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/admin")
public class InventoryAPI {

    private final InventoryService inventoryService;

    public InventoryAPI(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @GetMapping(value = "/inventories")
    public ResponseEntity<InventoryOuput> showInventory(@RequestParam(value = "page", required = false) Integer page,
                                                        @RequestParam(value = "limit", required = false) Integer limit,
                                                        @RequestParam(value = "name", defaultValue = "NONE") String name) {
        InventoryOuput result = new InventoryOuput();
        if (page != null && limit != null) {
            result.setPage(page);
            Pageable pageable = PageRequest.of(page - 1, limit);
            result.setListResult(inventoryService.findAll(pageable));
            result.setTotalPage((int) Math.ceil((double) (inventoryService.totalItem()) / limit));
        } else if (!name.equals("NONE")) {
            result.setListResult(inventoryService.findByNameLike(name));
        } else {
            result.setListResult(inventoryService.findAll());
        }
        if (StringUtils.isEmpty(result)) {
            new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(value = "/inventories/{id}")
    public ResponseEntity<InventoryDTO> getInventory(@PathVariable("id") int id) {
        InventoryDTO inventoryDTO = inventoryService.findById(id);
        return new ResponseEntity<>(inventoryDTO, HttpStatus.OK);
    }

    @PostMapping(value = "/inventories")
    public ResponseEntity<InventoryDTO> createInventory(@RequestBody InventoryDTO model) {
        InventoryDTO inventoryDTO = inventoryService.save(model);
        return new ResponseEntity<>(inventoryDTO, HttpStatus.CREATED);
    }

    @PutMapping(value = "/inventories/{id}")
    public ResponseEntity<InventoryDTO> updateInventory(@PathVariable("id") int id, @RequestBody InventoryDTO model) {
        model.setId(id);
        InventoryDTO inventoryDTO = inventoryService.save(model);
        return new ResponseEntity<>(inventoryDTO, HttpStatus.OK);
    }

    @DeleteMapping(value = "/inventories")
    public ResponseEntity<HttpStatus> deleteInventory(@RequestBody int[] ids) {
        inventoryService.delete(ids);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

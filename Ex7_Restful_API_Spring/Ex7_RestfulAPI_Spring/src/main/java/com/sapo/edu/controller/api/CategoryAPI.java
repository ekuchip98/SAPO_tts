package com.sapo.edu.controller.api;

import com.sapo.edu.controller.api.output.CategoryOutput;
import com.sapo.edu.dto.CategoryDTO;
import com.sapo.edu.service.ICategoryService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/admin")
public class CategoryAPI {

    private final ICategoryService categoryService;

    public CategoryAPI(ICategoryService categoryService) {
        this.categoryService = categoryService;
    }

    //Hien thi loai sp, phan trang va theo name
    @GetMapping(value = "/categories")
    public ResponseEntity<CategoryOutput> showCategories(@RequestParam(value = "page", required = false) Integer page,
                                                         @RequestParam(value = "limit", required = false) Integer limit,
                                                         @RequestParam(value = "name", defaultValue = "NONE") String name) {
        CategoryOutput result = new CategoryOutput();
        if (page != null && limit != null) {
            result.setPage(page);
            Pageable pageable = PageRequest.of(page - 1, limit);
            result.setTotalPage((int) Math.ceil((double) (categoryService.totalItem()) / limit));
            result.setListResult(categoryService.findAll(pageable));
        } else if (!name.equals("NONE")) {
            result.setListResult(categoryService.findByNameLike(name));
        } else {
            result.setListResult(categoryService.findAll());
        }
        if (StringUtils.isEmpty(result)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    //Hien thi loại sp theo id
    @GetMapping(value = "/categories/{id}")
    public ResponseEntity<CategoryDTO> getCategory(@PathVariable("id") Integer id) {
        CategoryDTO categoryDTO = categoryService.findById(id);
        return new ResponseEntity<>(categoryDTO, HttpStatus.OK);
    }

    //Them loại sp
    @PostMapping(value = "/categories")
    public ResponseEntity<CategoryDTO> createCategory(@RequestBody CategoryDTO model) {
        CategoryDTO categoryDTO = categoryService.save(model);
        return new ResponseEntity<>(categoryDTO, HttpStatus.CREATED);
    }

    //Sua loai sp
    @PutMapping(value = "/categories/{id}")
    public ResponseEntity<CategoryDTO> updateCategory(@RequestBody CategoryDTO model, @PathVariable("id") Integer id) {
        CategoryDTO categoryDTO;
        model.setId(id);
        categoryDTO = categoryService.save(model);
        return new ResponseEntity<>(categoryDTO, HttpStatus.OK);
    }

    @DeleteMapping(value = "/categories")
    public ResponseEntity<HttpStatus> deleteCategory(@RequestBody int[] ids) {
        categoryService.delete(ids);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

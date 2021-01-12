package org.example.controller;

import org.example.model.CategoryModel;
import org.example.repository.ICategoryRepository;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class CategoryController {

    private final ICategoryRepository categoryRepository;

    public CategoryController(ICategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryModel> findAll(){
        return categoryRepository.findAll();
    }

    public CategoryModel findById(Integer id){
        return categoryRepository.findById(id);
    }

    public void createCategory(CategoryModel model){
        categoryRepository.save(model);
    }

    public void updateCategory(CategoryModel model){
        model.getId();
        categoryRepository.save(model);
    }

    public List<String> getCategoryCodes(){
        return categoryRepository.getCategoryCodes();
    }
}

package org.example.repository;

import org.example.model.CategoryModel;

import java.util.List;

public interface ICategoryRepository {
    List<CategoryModel> findAll();
    CategoryModel findById(Integer id);
    void save(CategoryModel model);
    List<String> getCategoryCodes();
}

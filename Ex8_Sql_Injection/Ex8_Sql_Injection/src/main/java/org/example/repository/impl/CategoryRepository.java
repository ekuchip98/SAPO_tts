package org.example.repository.impl;

import org.example.mapper.CategoryMapper;
import org.example.model.CategoryModel;
import org.example.repository.ICategoryRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Repository
public class CategoryRepository implements ICategoryRepository{

    private final JdbcTemplate jdbcTemplate;

    public CategoryRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    //Hiển thị tất cả Category
    @Override
    @Transactional
    public List<CategoryModel> findAll() {
        String sql = "SELECT * FROM loaidanhmuc";
        return jdbcTemplate.query(sql, new CategoryMapper());
    }

    @Override
    @Transactional
    public CategoryModel findById(Integer id) {
        String sql = "SELECT * FROM loaidanhmuc WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, new CategoryMapper(),id);
    }

    @Override
    @Transactional
    public void save(CategoryModel model) {
        if(model.getId() != null){
            StringBuffer sql = new StringBuffer("UPDATE loaidanhmuc SET");
            sql.append(" maloaidanhmuc = ?, ten = ?, mota = ?,");
            sql.append("ngaysua = ? WHERE id = ?");
            CategoryModel odlCategory = findById(model.getId());
            model.setCreatedDate(odlCategory.getCreatedDate());
            model.setModifiedDate(new Timestamp(System.currentTimeMillis()));
            jdbcTemplate.update(sql.toString(),model.getCategoryCode(), model.getName(),
                    model.getDescription(), model.getModifiedDate(), model.getId());
        }else{
            StringBuffer sql = new StringBuffer("INSERT INTO loaidanhmuc");
            sql.append("(maloaidanhmuc, ten, mota, ngaytao) ");
            sql.append("VALUES (?, ?, ?, ?)");
            model.setCreatedDate(new Timestamp(System.currentTimeMillis()));
            jdbcTemplate.update(sql.toString(), model.getCategoryCode(), model.getName(),
                    model.getDescription(), model.getCreatedDate());
        }
    }

    @Override
    public List<String> getCategoryCodes() {
        List<String> list = new ArrayList<>();
        List<CategoryModel> categoryModels = findAll();
        for (CategoryModel item : categoryModels){
            list.add(item.getCategoryCode());
        }
        return list;
    }
}

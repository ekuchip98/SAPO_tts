package org.example.mapper;

import org.example.model.CategoryModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CategoryMapper implements RowMapper<CategoryModel> {

    @Override
    //Gán các trường dữ liệu vào Model
    public CategoryModel mapRow(ResultSet resultSet, int i) throws SQLException {
        CategoryModel categoryModel = new CategoryModel();
        categoryModel.setId(resultSet.getInt("id"));
        categoryModel.setCategoryCode(resultSet.getString("maloaidanhmuc"));
        categoryModel.setName(resultSet.getString("ten"));
        categoryModel.setDescription(resultSet.getString("mota"));
        categoryModel.setCreatedDate(resultSet.getTimestamp("ngaytao"));
        categoryModel.setModifiedDate(resultSet.getTimestamp("ngaysua"));
        return categoryModel;
    }
}

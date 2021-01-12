package org.example.mapper;

import org.example.model.ProductModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

public class ProductMapper implements RowMapper<ProductModel> {
    @Override
    //Gán các trường dữ liệu vào Model
    public ProductModel mapRow(ResultSet resultSet, int i) throws SQLException {
        ProductModel productModel = new ProductModel();
        productModel.setId(resultSet.getInt("id"));
        productModel.setProductCode(resultSet.getString("masanpham"));
        productModel.setCategoryId(resultSet.getInt("danhmuc"));
        productModel.setInventoryId(resultSet.getInt("kho"));
        productModel.setName(resultSet.getString("ten"));
        productModel.setDescription(resultSet.getString("motasanpham"));
        productModel.setImage(resultSet.getString("duongdananh"));
        productModel.setAmount(resultSet.getInt("soluongsanpham"));
        productModel.setSellNumber(resultSet.getInt("soluongban"));
        productModel.setCreatedDate(resultSet.getTimestamp("ngaytao"));
        productModel.setModifiedDate(resultSet.getTimestamp("ngaysua"));
        return productModel;
    }
    public Map mapRowSave(ProductModel model){
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("masanpham",model.getProductCode());
        parameters.put("danhmuc", model.getCategoryId());
        parameters.put("kho", model.getInventoryId());
        parameters.put("ten", model.getName());
        parameters.put("motasanpham", model.getDescription());
        parameters.put("duongdananh", model.getImage());
        parameters.put("soluongsanpham", model.getAmount());
        parameters.put("soluongban", model.getSellNumber());
        parameters.put("ngaytao", model.getCreatedDate());
        parameters.put("ngaysua", model.getModifiedDate());
        return parameters;
    }
}

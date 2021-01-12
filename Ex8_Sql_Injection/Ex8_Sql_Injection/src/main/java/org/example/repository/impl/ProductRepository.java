package org.example.repository.impl;

import org.example.mapper.ProductMapper;
import org.example.model.CategoryModel;
import org.example.model.ProductModel;

import org.example.repository.IProductRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Repository
public class ProductRepository implements IProductRepository {

    private final DataSource dataSource;

    private SimpleJdbcCall simpleJdbcCall;

    private SimpleJdbcInsert simpleJdbcInsert;

    private final JdbcTemplate template;

    public ProductRepository(DataSource dataSource, JdbcTemplate template) {
        this.dataSource = dataSource;
        this.template = template;
    }

    @Override
    public List<ProductModel> findAll() {
        return template.query("SELECT * FROM sanpham", new ProductMapper());
    }

    //Hiển thị tất cả dữ liệu trong Procedure của bang Products <Procedure lấy 10 sản phẩm có số lượng bán nhiều nhất>
    @Override
    public List<ProductModel> findAllByProcedure(){
       simpleJdbcCall = new SimpleJdbcCall(dataSource)
                .withProcedureName("getSanPham")
                .returningResultSet("product", new ProductMapper());
        Map map = simpleJdbcCall.execute(new HashMap<>());
        return  (List) map.get("product");
    }

    @Override
    public ProductModel findById(Integer id) {
        String sql = "SELECT * FROM sanpham WHERE id = ?";
        return template.queryForObject(sql, new ProductMapper(), id);
    }

    @Override
    @Transactional
    public void save(ProductModel model) {
        simpleJdbcInsert = new SimpleJdbcInsert(dataSource)
                .withTableName("sanpham");
        simpleJdbcInsert.execute(new ProductMapper().mapRowSave(model));
    }

    @Override
    @Transactional
    public void edit(ProductModel model) {
        if(model.getId() != null){
            StringBuffer sql = new StringBuffer("UPDATE sanpham SET");
            sql.append(" masanpham = ?, danhmuc = ?, kho = ?, ten = ?, motasanpham = ?,");
            sql.append(" duongdananh = ?, soluongsanpham = ?, soluongban = ?, ");
            sql.append("ngaysua = ? WHERE id = ?");
            ProductModel odlProduct = findById(model.getId());
            model.setCreatedDate(odlProduct.getCreatedDate());
            model.setModifiedDate(new Timestamp(System.currentTimeMillis()));
            template.update(sql.toString(),model.getProductCode(),model.getCategoryId(),
                    model.getInventoryId(), model.getName(), model.getDescription(),
                    model.getImage(), model.getAmount(), model.getSellNumber(),
                    model.getModifiedDate(), model.getId());
        }
    }

    @Override
    public List<String> getProductCodes() {
        List<String> list = new ArrayList<>();
        List<ProductModel> productModels = findAll();
        for (ProductModel item : productModels){
            list.add(item.getProductCode());
        }
        return list;
    }
}

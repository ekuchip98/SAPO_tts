package org.example.util.product;

import org.example.controller.ProductController;
import org.example.model.ProductModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.util.List;
@Component
public class ProductShow {

    private Logger logger =  LoggerFactory.getLogger(ProductShow.class);

    private final ProductController productController;

    public ProductShow(ProductController productController) {
        this.productController = productController;
    }

    //Show all data product theo Procedure
    public void showProductByProcedure(){
        List<ProductModel> list = productController.findAllByProcedure();
        showTitle();
        logger.info("-----------------------------------------------------------------------");
        for (ProductModel model : list){
            showData(model);
        }
    }

    public void showProductById(Integer id){
        ProductModel model = productController.findById(id);
        showTitle();
        logger.info("-----------------------------------------------------------------------");
        showData(model);
    }

    public void showProducts(){
        List<ProductModel> list = productController.findAll();
        showTitle();
        logger.info("-----------------------------------------------------------------------");
        for (ProductModel model : list){
            showData(model);
        }
    }

    public void createProduct(){
        try {
            ProductInput inPut = new ProductInput(productController);
            ProductModel model = new ProductModel();
            inPut.categoryInput(model);
            model.setCreatedDate(new Timestamp(System.currentTimeMillis()));
            productController.createProduct(model);
            logger.info("THÊM THÀNH CÔNG");
        }catch (Exception e){
            logger.info("THÊM THẤT BẠI");
        }
    }

    public void updateProduct(Integer id){
        try {
            ProductInput inPut = new ProductInput(productController);
            ProductModel model = new ProductModel();
            inPut.categoryInput(model);
            model.setId(id);
            productController.updateProduct(model);
            logger.info("SỬA THÀNH CÔNG");
        }catch (Exception e){
            logger.info("SỬA THẤT BẠI");
        }
    }
    //gọi getter bảng Product
    private void showData(ProductModel model) {
        logger.info(String.format("%s\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s",model.getId(),model.getProductCode(),model.getCategoryId(),model.getInventoryId(),model.getName(),model.getDescription(),model.getImage(),model.getAmount(),model.getSellNumber(),model.getCreatedDate(),model.getModifiedDate()));
    }

    private void showTitle(){
        logger.info(String.format("%s\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s","ID","ProductCode","CategoryId","WareHouseId","Name","Description","Image","Amount","SellNumber","CreatedDate","ModifiedDate"));
    }

}

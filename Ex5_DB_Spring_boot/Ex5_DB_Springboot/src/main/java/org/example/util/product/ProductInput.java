package org.example.util.product;

import org.example.controller.ProductController;
import org.example.model.ProductModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Scanner;

public class ProductInput {

    private final ProductController productController;

    private Logger logger = LoggerFactory.getLogger(ProductInput.class);

    public ProductInput(ProductController productController) {
        this.productController = productController;
    }

    public void categoryInput(ProductModel model){

        Scanner scanner = new Scanner(System.in);
        String inPut = null;
        logger.info("Nhập mã sản phẩm:");
        model.setProductCode(inPutCode(inPut));
        logger.info("Nhập id danh mục:");
        model.setCategoryId(inputInt(inPut));
        logger.info("Nhập id kho:");
        model.setInventoryId(inputInt(inPut));
        logger.info("Nhập tên sản phẩm:");
        model.setName(scanner.nextLine());
        logger.info("Nhập mô tả của sản phẩm:");
        model.setDescription(scanner.nextLine());
        logger.info("Nhập đường dẫn ảnh:");
        model.setImage(scanner.nextLine());
        logger.info("Nhập số lượng sản phẩm:");
        model.setAmount(inputInt(inPut));
        logger.info("Nhập số lượng bán:");
        model.setSellNumber(inputInt(inPut));
    }

    private boolean checkIn(String inPut){
        try{
            Integer.parseInt(inPut);
            return true;
        }catch (NumberFormatException e){
            return false;
        }
    }

    private int inputInt(String inPut){
        Scanner scanner = new Scanner(System.in);
        do{
            inPut = scanner.nextLine();
            if(checkIn(inPut)){
                return Integer.parseInt(inPut);
            }else {
                logger.info("Nhập sai kiểu dữ liệu nhập lại");
            }
        }while (!checkIn(inPut));
        return 0;
    }

    private boolean checkCode(String inPut){
        int count = 0;
        for (String string : productController.getProductCodes()){
            if(string.equals(inPut)){
                count++;
            }
        }
        try {
            if (count == 0){
                return true;
            }
        }catch (Exception e){
            return false;
        }
        return false;
    }

    private String inPutCode(String inPut){
        Scanner scanner = new Scanner(System.in);
        do {
            inPut = scanner.nextLine();
            if (checkCode(inPut)){
                return inPut;
            }else {
                logger.info("Mã trùng");
            }
        }while (!checkCode(inPut));
        return null;
    }
}

package org.example.util.product;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Scanner;
@Component
public class ProductMenu {

    Logger logger = LoggerFactory.getLogger(ProductMenu.class);
    private int index = 0;

    private final ProductShow productShow;
    public ProductMenu(ProductShow productShow) {
        this.productShow = productShow;
    }

    public void showMenu(){
        do {
            try{
                selectProduct();
                logger.info("\n=================Selection ==================");
                inPut();
                switch (index){
                    case 1:
                        productShow.showProducts();
                        break;
                    case 2:
                        inPutId();
                        productShow.showProductById(index);
                        break;
                    case 3:
                        productShow.showProductByProcedure();
                        break;
                    case 4:
                        productShow.createProduct();
                        break;
                    case 5:
                        inPutId();
                        productShow.updateProduct(index);
                        break;
                    default: break;
                }
            }catch (NumberFormatException e){
                logger.info("Hãy nhập số");
            }
        }while (index > 0 && index < 5);
    }

    private void inPut(){
        Scanner scanner = new Scanner(System.in);
        if(scanner.hasNext()){
            index = Integer.parseInt(scanner.nextLine());
        }
    }

    private void selectProduct(){
        logger.info("1. Hiển thị tất cả sản phẩm");
        logger.info("2. Hiển thị loại sản phẩm theo ID");
        logger.info("3. Lấy 10 sản phẩm có số lượng bán nhiều nhất");
        logger.info("4. Thêm mới một loại sản phẩm");
        logger.info("5. Sửa đổi một loại sản phẩm");
        logger.info(">= 6. Exit");
    }

    private void inPutId(){
        logger.info("Hãy nhập ID của sản phẩm");
        inPut();
    }

}

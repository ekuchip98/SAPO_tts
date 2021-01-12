package org.example.util.category;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Scanner;
@Component
public class CategoryMenu {
    Logger logger = LoggerFactory.getLogger(CategoryMenu.class);
    private int index = 0;

    private final CategoryShow categoryShow;

    public CategoryMenu(CategoryShow categoryShow) {
        this.categoryShow = categoryShow;
    }

    public void showMenu(){
        do {
            try{
                selectCategory();
                logger.info("\n=================Selection ==================");
                inPut();
                switch (index){
                    case 1:
                        categoryShow.showAll();
                        break;
                    case 2:
                        inPutId();
                        categoryShow.showCategoryById(index);
                        break;
                    case 3:
                        categoryShow.createCategory();
                        break;
                    case 4:
                        inPutId();
                        categoryShow.updateCategory(index);
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

    private void selectCategory(){
        logger.info("1. Hiển thị tất cả loại sản phẩm");
        logger.info("2. Hiển thị loại sản phẩm theo ID");
        logger.info("3. Thêm mới một loại sản phẩm");
        logger.info("4. Sửa đổi một loại sản phẩm");
        logger.info(">= 5. Exit");
    }

    private void inPutId(){
        logger.info("Hãy nhập ID của loại sản phẩm");
        inPut();
    }
}

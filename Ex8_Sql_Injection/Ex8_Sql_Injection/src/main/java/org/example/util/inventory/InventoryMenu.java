package org.example.util.inventory;

import org.example.util.category.CategoryMenu;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Scanner;

@Component
public class InventoryMenu {

    Logger logger = LoggerFactory.getLogger(CategoryMenu.class);
    private int index = 0;
    private final InventoryShow inventoryShow;

    public InventoryMenu(InventoryShow inventoryShow) {
        this.inventoryShow = inventoryShow;
    }

    public void showMenu(){
        do {
            try{
                selectCategory();
                logger.info("\n=================Selection ==================");
                inPut();
                switch (index){
                    case 1:
                        inventoryShow.showAll();
                        break;
                    case 2:
                        inPutId();
                        inventoryShow.showInventoryById(index);
                        break;
                    case 3:
                        inventoryShow.createInventory();
                        break;
                    case 4:
                        inPutId();
                        inventoryShow.updateInventory(index);
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
        logger.info("1. Hiển thị tất cả kho");
        logger.info("2. Hiển thị kho theo ID");
        logger.info("3. Thêm mới một kho");
        logger.info("4. Sửa đổi một kho");
        logger.info(">= 5. Exit");
    }

    private void inPutId(){
        logger.info("Hãy nhập ID của kho");
        inPut();
    }
}
